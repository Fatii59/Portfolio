import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-[#E0FFFF] bg-opacity-30 backdrop-blur-md shadow-md">
      {/* Logo / Home Link */}
      <NavLink to="/" className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold shadow-md">
        <p className="blue-gradient_text text-xl">FH</p>
      </NavLink>

      {/* Navigation Links */}
      <nav className="flex gap-7 text-lg font-medium text-black">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'text-yellow-50' : 'text-black hover:text-yellow-100')}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? 'text-yellow-50' : 'text-black hover:text-yellow-100')}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'text-yellow-50' : 'text-black hover:text-yellow-100')}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
