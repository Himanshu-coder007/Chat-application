import "./App.css";
import Signup from './components/Signup';
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
]);

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
