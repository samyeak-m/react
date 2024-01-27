import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Create from './pages/auth/Create';
import Login from './pages/auth/Login';
import {Toaster} from "react-hot-toast";


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
    }
  ]);
  return <> 
  
  return <RouterProvider router={router}/>;

  <Toaster />
  </>
}

export default App;