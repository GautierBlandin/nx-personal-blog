import { NavLink } from 'react-router';

export const Navbar = () => {
  return (
    <nav className="flex justify-center space-x-8 py-3">
      <NavLink to="/" className={`text-neutral-emphasis hover:underline`}>
        <h5>Home</h5>
      </NavLink>
      <NavLink
        to="/articles/"
        className={`text-neutral-emphasis hover:underline`}
      >
        <h5>Articles</h5>
      </NavLink>
    </nav>
  );
};
