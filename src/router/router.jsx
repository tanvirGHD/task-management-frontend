import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout";
import TaskBoard from "../components/TaskBoard/TaskBoard";
import TaskForm from "../components/TaskForm/TaskForm";
import TaskList from "../components/TaskList/TaskList";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Route not found</h2>,
        children: [
          {
               path: 'taskBoard',
               element: <TaskBoard></TaskBoard>
          },
          {
               path: 'taskFrom',
               element: <TaskForm></TaskForm>
          },
          {
               path: 'taskList',
               element: <TaskList></TaskList>
          }
        ]
    },
    
  ]);

export default router;