import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout";
import TaskBoard from "../components/TaskBoard/TaskBoard";
import TaskForm from "../components/TaskForm/TaskForm";
import TaskList from "../components/TaskList/TaskList";
import Home from "../components/Home/Home";
import AboutUs from "../components/About/AboutUs";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../components/login/Login";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Route not found</h2>,
        children: [
          {
               path: '/',
               element: <Home></Home>
          },
          {
               path: 'taskBoard',
               element: <PrivateRoute><TaskBoard></TaskBoard></PrivateRoute>
          },
          {
               path: 'taskFrom',
               element: <PrivateRoute><TaskForm></TaskForm></PrivateRoute>
          },
          {
               path: 'taskList',
               element: <PrivateRoute><TaskList></TaskList></PrivateRoute>
          },
          {
               path: 'about',
               element: <AboutUs></AboutUs>
          },
          {
               path: 'protect',
               element: <Login></Login>
          }
        ]
    },
    
  ]);

export default router;