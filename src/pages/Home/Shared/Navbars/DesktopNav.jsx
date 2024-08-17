import MobileNav from "./MobileNav";
import { NavLink } from "react-router-dom";
import Login from "@/pages/authentications/Login";
import Registration from "@/pages/authentications/Registration";
import useAuth from "@/hooks/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { user, logOut } = useAuth();

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

        {!user ? (
          <div className="flex gap-4">
            {/* Login dialog */}
            <Login />
            {/* Register dialog */}
            <Registration />
          </div>
        ) : (
          <>
            <HoverCard>
              <HoverCardTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </HoverCardTrigger>
              <HoverCardContent className="flex gap-3">
                <img
                  className="h-16 w-16 rounded-md"
                  src="https://github.com/shadcn.png"
                  alt=""
                />
                <div>
                  <h3 className="font-bold">{user?.displayName}</h3>
                  <p>{user?.email}</p>
                  <div onClick={logOut} className="text-end mt-4">
                    <Button>Logout</Button>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </>
        )}
      </div>

      {/* mobile navbar */}
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
