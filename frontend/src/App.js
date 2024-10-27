import "./App.css";
import Signup from './components/Signup';
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";



const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
]);

function App() {
  const [socket,setSocket] = useState(null);
  const {authUser} = useSelector(store=>store.user);
 

  useEffect(()=>{
    if(authUser){
      const socket = io(`http://localhost:8080`, {
        query: {
          userId: authUser._id,
        },
      });
      setSocket(socket);
    }
  },[authUser]);


  return (
    <div className="p-4 h-screen flex items-center justify-center">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
