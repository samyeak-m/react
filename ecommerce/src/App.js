import './App.css';
import { useState } from 'react';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Create from './pages/auth/Create';
// import TodoWrapper from './TodoWrapper';

function App() {

  // return (
  //   <div className="App">
  //   <TodoWrapper/>
    
  //     </div>
   
    
  // );
  const router = createBrowserRouter([
    {
      path: "/auth",
      children:[
        {
          path:"create",
          element:<Create/>
        }
        
      ]
    }
  ]);
  return <RouterProvider router={router}/>;
}

export default App;