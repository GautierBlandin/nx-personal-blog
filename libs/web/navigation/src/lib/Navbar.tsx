import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex justify-center space-x-8 py-4">
      <Link
        to="/"
        className={`text-neutral-emphasis hover:underline ${location.pathname === '/' ? 'underline' : ''}`}
      >
        <h4>Home</h4>
      </Link>
      <Link
        to="/articles"
        className={`text-neutral-emphasis hover:underline ${location.pathname.startsWith('/articles') ? 'underline' : ''}`}
      >
        <h4>Articles</h4>
      </Link>
    </nav>
  );
};
