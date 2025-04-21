import path from 'path';
import { fileURLToPath } from 'url';

// Note: If you use library-specific PostCSS/Tailwind configuration then you should remove the `postcssConfig` build
// option from your application's configuration (i.e. project.json).
//
// See: https://nx.dev/guides/using-tailwind-css-in-react#step-4:-applying-configuration-to-libraries

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export default {
  plugins: {
    tailwindcss: {
      config: path.join(__dirname, 'tailwind.config.ts'),
    },
    autoprefixer: {},
  },
};
