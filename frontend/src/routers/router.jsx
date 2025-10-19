import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
            path:"/",
            element: <Home/>
        },
        {
          path:"/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        }
    ]
  },
]);