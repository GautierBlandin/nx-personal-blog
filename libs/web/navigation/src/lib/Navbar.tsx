import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex justify-center space-x-8 py-3">
      <Link
        to="/"
        className={`text-neutral-emphasis hover:underline ${
          location.pathname === '/' ? 'underline' : ''
        }`}
      >
        <h5>Home</h5>
      </Link>
      <Link
        to="/articles"
        className={`text-neutral-emphasis hover:underline ${
          location.pathname === '/articles' ? 'underline' : ''
        }`}
      >
        <h5>Articles</h5>
      </Link>
    </nav>
  );
};
