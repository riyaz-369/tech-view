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

  console.log(user);

  return (
    <nav className="bg-slate-100 py-4 shadow-md">
      <div className="container flex justify-between">
        <div className="flex items-center gap-2">
          <img
            className="w-9 rounded-full"
            src="../../../../public/logo.jpg"
            alt=""
          />
          <h1 className="text-3xl font-bold">Tech View</h1>
        </div>
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
                    <AvatarImage
                      src={user?.photoURL}
                      referrerPolicy="no-referrer"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </HoverCardTrigger>
                <HoverCardContent className="flex gap-3">
                  <img
                    referrerPolicy="no-referrer"
                    className="h-16 w-16 rounded-md"
                    src={user?.photoURL}
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
      </div>
    </nav>
  );
};

export default Navbar;
