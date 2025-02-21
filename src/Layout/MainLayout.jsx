import Navbar from '../Pages/common/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
     return (
          <div className="flex flex-col md:flex-row min-h-screen">
               <div className="w-full md:w-1/4 bg-gray-200 p-4">
                    <Navbar />
               </div>
               <div className="w-full md:w-3/4 p-4">
                    <Outlet />
               </div>
          </div>
     );
};

export default MainLayout;
