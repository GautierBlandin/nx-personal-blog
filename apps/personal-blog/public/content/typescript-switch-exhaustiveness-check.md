# Switch statement exhaustiveness check in Typescript

Imagine that you're writing a banking application. You handle deposits, withdrawals, and transfers. To model this,
you've created a `Transaction` discriminated union type:

```typescript
type Transaction =
  | { kind: 'deposit'; amount: number; accountId: string }
  | { kind: 'withdrawal'; amount: number; accountId: string; atmId: string }
  | { kind: 'transfer'; amount: number; fromAccountId: string; toAccountId: string }
```

In addition to the main business logic that handles the processing
of transactions, there is a feature that enables the users to view
a PDF report of their recent transactions. This feature uses a `formatTransaction` function
to present the transactions in a human-readable format:

```typescript
function formatTransaction(transaction: Transaction): string {
  switch (transaction.kind) {
    case 'deposit':
      return `Deposited ${transaction.amount} to account ${transaction.accountId}`;
    case 'withdrawal':
      return `Withdrew ${transaction.amount} from account ${transaction.accountId} at ATM ${transaction.atmId}`;
    case 'transfer':
      return `Transferred ${transaction.amount} from account ${transaction.fromAccountId} to account ${transaction.toAccountId}`;
    default:
      throw new Error("Unknown transaction type");
  }
}
```

The bank decides to add a new transaction type, `payment`, that enables users to send payments to approved
merchants. The `Transaction` type is extended to include the new variant:

```typescript
type Transaction =
  | { kind: 'deposit'; amount: number; accountId: string }
  | { kind: 'withdrawal'; amount: number; accountId: string; atmId: string }
  | { kind: 'transfer'; amount: number; fromAccountId: string; toAccountId: string }
  | { kind: 'payment'; amount: number; fromAccountId: string; merchantId: string }
```

The processing business logic gets properly updated and tested to support this new kind of transaction. However, after the
code is deployed in production, some users complain that they get an error when they try to generate reports. Indeed, the
developer forgot to update the `formatTransaction` function to handle the new variant!

How did this issue get shipped ?
- Existing regression tests passed, as customers not making use of the new transaction type were not affected
- The issue was not on a business-critical path on which testing focused when the new feature was added

Fortunately, typescript enables us to add a static type-check that would have prevented it. The `never` type
is a type that represents the empty set of values, meaning that nothing can be assigned to it. We can use this
to our advantage:

```typescript
function assertUnreachable(x: never): void {
  throw new Error(`Case not handled: ${x}`);
}

function formatTransaction(transaction: Transaction): string {
  switch (transaction.kind) {
    // Existing cases...
    default:
      assertUnreachable(transaction);
      //                ^ Type Error: 'payment' is not assignable to type never.
  }
}
```

Now, when `Transaction` is extended, the compiler will complain about the missing case in
the `formatTransaction` function, preventing the bug from sneaking in.
---
## Tradeoffs with an eslint rule

The `@typescript-eslint/switch-exhaustiveness-check` eslint rule enables having eslint errors in
case a switch statement is not exhaustive. The benefit of an eslint rule is that
you don't need to explicitly add the `assertUnreachable` call to each switch statement. However,
it comes with the drawback of not being embedded in the code itself and of being less flexible
(`assertUnreachable` also works for if/else statements and any other kind of type-narrowing
that should be exhaustive).
