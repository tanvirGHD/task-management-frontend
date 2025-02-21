import Navbar from '../Pages/common/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
     return (
          <div className="flex">
               <div className="w-1/4"> 
                    <Navbar />
               </div>
               <div className="w-3/4"> 
                    <Outlet />
               </div>
          </div>
     );
};

export default MainLayout;
