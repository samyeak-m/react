import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Create from './pages/auth/Create';
import Login from './pages/auth/Login';
import CreateProduct from './pages/dashboard/product/CreateProduct';
import {Toaster} from "react-hot-toast";
import ListProduct from './pages/dashboard/product/ListProduct';
import DashboardLayout from './layout/dashboardLayout';


function App() {
  const router = createBrowserRouter([
    {
      path: "/auth",
      children:[
        {
          path: "create",
          element: <Create/>
        },

        {
          path: "login",
          element: <Login/>
        }
      ]
    },
    {
      path:"/dashboard",
      element:<DashboardLayout/>,
      children:[
        {
          path:"addProduct",
          element:<CreateProduct/>
        },
        {
          path:"listProduct",
          element:<ListProduct/>
        
        },
      ]
    }
  ]);
  return <> 
  
  <RouterProvider router={router}/>;

  <Toaster position='top-right'/>
  </>
}

export default App;