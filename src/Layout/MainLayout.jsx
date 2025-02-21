import Footer from "../Pages/common/Footer";
import Navbar from "../Pages/common/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 p-4">
          <Navbar />
        </div>
        <div className="w-full p-4">
          <Outlet />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
