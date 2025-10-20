import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/book/CartPage";
import CheckOut from "../pages/book/CheckOut";

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
        },
        {
          path: "/cart",
          element:<CartPage/>
        },
        {
          path: "/checkout",
          element: <CheckOut/>
        },
    ]
  },
]);