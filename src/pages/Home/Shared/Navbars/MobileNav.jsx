import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useAuth from "@/hooks/useAuth";
import Login from "@/pages/authentications/Login";
import Registration from "@/pages/authentications/Registration";

import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  const { user } = useAuth();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <MdMenu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Tech View</SheetTitle>
          <SheetDescription>
            <div className="flex flex-col gap-4">
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
          </SheetDescription>
        </SheetHeader>

        <SheetFooter className="mt-4">
          {!user ? (
            <div className="flex gap-4">
              {/* Login dialog */}
              <Login />

              {/* Register dialog */}
              <Registration />
            </div>
          ) : (
            <>
              <div className="flex gap-3">
                <img
                  className="h-16 w-16 rounded-md"
                  src="https://github.com/shadcn.png"
                  alt=""
                />
                <div>
                  <h3 className="font-bold">{user?.displayName}</h3>
                  <p>{user?.email}</p>
                </div>
              </div>
            </>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
