import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./app.tsx'), // Matches '/'
  route('articles', './routes/articles._index.tsx'), // Matches '/articles' (Index route)
  route('articles/:identifier', './routes/articles.$identifier.tsx'), // Matches '/articles/:identifier' (Identifier route)
] satisfies RouteConfig;
