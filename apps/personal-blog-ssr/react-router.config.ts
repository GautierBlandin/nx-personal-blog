import type { Config } from '@react-router/dev/config';
import { articles } from '@nx-personal-blog/static-articles';

export default {
  ssr: true,
  async prerender() {
    const articleRoutes = Object.keys(articles).map(
      (identifier) => `/articles/${identifier}`
    );

    return ['/', '/articles', ...articleRoutes];
  },
} satisfies Config;
