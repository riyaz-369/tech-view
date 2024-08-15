import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Shared/Navbar";
import Footer from "../pages/Home/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
