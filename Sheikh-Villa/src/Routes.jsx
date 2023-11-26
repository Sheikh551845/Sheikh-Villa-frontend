import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Apartment from "./Pages/Apartment";

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
  {
    path: "/Registration",
    element:<Registration></Registration>
},
{
  path: "/Apartment",
  element:<Apartment></Apartment>
},

  ]
}
])
  