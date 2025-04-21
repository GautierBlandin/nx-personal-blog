import type { Config } from 'tailwindcss';
// eslint-disable-next-line @nx/enforce-module-boundaries
import * as theme from '../../theme.cjs';

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: theme,
  },
  plugins: [],
} satisfies Config;
