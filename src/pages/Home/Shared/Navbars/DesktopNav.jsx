import MobileNav from "./MobileNav";
import { NavLink } from "react-router-dom";
import Login from "@/pages/authentications/Login";
import Registration from "@/pages/authentications/Registration";

const Navbar = () => {
  return (
    <nav className="flex justify-between container mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold">Tech View</h1>

      {/* desktop navbar */}
      <div className="hidden lg:flex items-center gap-8">
        <div className="flex gap-4">
          <NavLink
            className="hover:border-b-2 border-purple-800 hover:rounded transition-all pl-1 py-1 lg:px-4"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="hover:border-b-2 border-purple-800 hover:rounded transition-all pl-1 py-1 lg:px-4"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="hover:border-b-2 border-purple-800 hover:rounded transition-all pl-1 py-1 lg:px-4"
            to="/products"
          >
            Products
          </NavLink>
        </div>

        <div className="flex gap-4">
          {/* Login dialog */}
          <Login />
          {/* Register dialog */}
          <Registration />
        </div>
      </div>

      {/* mobile navbar */}
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
