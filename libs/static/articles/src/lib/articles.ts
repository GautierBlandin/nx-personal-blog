import * as fs from 'fs';
import * as path from 'path';

/**
 * Loads the content of a markdown article file.
 *
 * @param name - The base name of the article file (without extension).
 * @returns The content of the markdown file as a string.
 * @throws {Error} If the file cannot be found or read.
 */
export function loadArticleContent(name: string): string {
  // Construct the absolute path to the markdown file.
  // __dirname represents the directory of the current module (articles.ts).
  // path.join ensures the path is constructed correctly across different OS.
  const filePath = path.join(__dirname, '../content', `${name}.md`);

  console.log(filePath);

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
