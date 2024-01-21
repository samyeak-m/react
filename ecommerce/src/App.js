import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Create from './pages/auth/Create';

function App() {
  const router = createBrowserRouter([
    {
      path: "/auth",
      children:[
        {
          path: "create",
          element: <Create/>
        }
        
      ]
    }
  ]);
  return <RouterProvider router={router}/>;
}

export default App;