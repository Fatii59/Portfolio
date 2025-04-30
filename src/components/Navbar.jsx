import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-transparent shadow-none z-50">
      {/* Logo */}
      <NavLink to="/" className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold shadow-md">
        <p className="blue-gradient_text text-xl">FH</p>
      </NavLink>

      {/* Links */}
      <nav className="flex gap-7 text-lg font-medium text-black">
        {["about", "projects", "contact"].map((path) => (
          <NavLink
            key={path}
            to={`/${path}`}
            className={({ isActive }) =>
              isActive
                ? "text-black underline"
                : "hover:text-gray-800 transition-colors duration-300"
            }
          >
            {path.charAt(0).toUpperCase() + path.slice(1)}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
