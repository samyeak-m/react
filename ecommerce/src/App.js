import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Create from './pages/auth/Create';
import Login from './pages/auth/Login';
import CreateProduct from './pages/dashboard/product/CreateProduct';
import { Toaster } from "react-hot-toast";
import ListProduct from './pages/dashboard/product/ListProduct';
import DashboardLayout from './layout/dashboardLayout';
import UpdateProduct from './pages/dashboard/product/UpdateProduct';
import Home from './pages/index';
import SingleProduct from './pages/product/singleProduct';
import ListOrder from './pages/dashboard/order/ListOrder';
import Cart from "./pages/cart";
import MainLayout from './layout/MainLayout';



function App() {
  const router = createBrowserRouter([
    {

      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />

        },
        {
          path: "/product/:id",
          element: <SingleProduct />
        },
        {
          path: "/cart",
          element: <Cart />
        }
      ]
    },
    {
      path: "/auth",
      children: [
        {
          path: "create",
          element: <Create />
        },

        {
          path: "login",
          element: <Login />
        }
      ]
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "addProduct",
          element: <CreateProduct />
        },
        {
          path: "listProduct",
          element: <ListProduct />

        },
        {
          path: "updateProduct/:id",
          element: <UpdateProduct />
        },
        {
          path: "ListOrder",
          element: <ListOrder />
        }
      ]
    }
  ]);
  return <>

    <RouterProvider router={router} />

    <Toaster position='top-right' />
  </>
}

export default App;