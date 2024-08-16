import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Shared/Footer";
import DesktopNav from "../pages/Home/Shared/Navbars/DesktopNav";

const MainLayout = () => {
  return (
    <div>
      <DesktopNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
