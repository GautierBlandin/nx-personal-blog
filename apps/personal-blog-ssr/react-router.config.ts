import type { Config } from '@react-router/dev/config';

export default {
  ssr: true,
  async prerender() {
    return ['/', '/articles'];
  },
} satisfies Config;
