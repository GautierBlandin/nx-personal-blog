import Markdoc from '@markdoc/markdoc';
import React, { FC } from 'react';
import { CodeBlock } from './code-block';
import { markdownConfig } from './config';
import { Paragraph } from './paragraph';
import { List } from './list';
import { Heading } from './heading';
import { Separator } from './separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table';

interface Props {
  content: string;
}

export const Markdown: FC<Props> = (props) => {
  const ast = Markdoc.parse(props.content);

  const content = Markdoc.transform(ast, {
    ...markdownConfig,
  });

  return (
    <>
      {Markdoc.renderers.react(content, React, {
        components: {
          Paragraph,
          CodeBlock,
          List,
          Heading,
          Separator,
          Table,
          TableHeader,
          TableBody,
          TableRow,
          TableHead,
          TableCell,
        },
      })}
    </>
  );
};
