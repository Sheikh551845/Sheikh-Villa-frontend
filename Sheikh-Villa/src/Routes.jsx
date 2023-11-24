import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login";

export const router = createBrowserRouter([
    {
    path: "/",
    element:<Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element:<Home></Home>
    },
    {
      path: "/Login",
      element:<Login></Login>
  },
  ]
}
])
  