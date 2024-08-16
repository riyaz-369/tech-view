import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Login from "@/pages/authentications/Login";
import Registration from "@/pages/authentications/Registration";

import { MdMenu } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const MobileNav = () => {
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
          <div className="flex gap-4">
            {/* Login dialog */}
            <Login />
            {/* Register dialog */}
            <Registration />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
