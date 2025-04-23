import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export function loadArticleContent({
  toRoot,
  name,
}: {
  toRoot: string;
  name: string;
}): string {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  // Construct the absolute path to the markdown file.
  // __dirname represents the directory of the current module (articles.ts).
  // path.join ensures the path is constructed correctly across different OS.
  const filePath = path.join(
    __dirname,
    toRoot,
    'libs/static/articles/src/content',
    `${name}.md`
  );

  try {
    // Read the file synchronously using UTF-8 encoding.
    return fs.readFileSync(filePath, 'utf8');
  } catch (error: any) {
    // Handle potential errors, like the file not existing (ENOENT).
    if (error.code === 'ENOENT') {
      throw new Error(
        `Article content file not found for "${name}" at expected path: ${filePath}`
      );
    } else {
      // Rethrow other errors (e.g., permissions issues)
      throw new Error(
        `Failed to read article content for "${name}": ${error.message}`
      );
    }
  }
}
