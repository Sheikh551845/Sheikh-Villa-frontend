import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Apartment from "./Pages/Apartment";
import DashboardLayout from "./Components/Dashbord/DashbordLayout";
import PrivateRoute from "./Components/PrivateRoute";
import UserProfile from "./Components/Dashbord/UserProfile";
import Announcements from "./Components/Dashbord/Announcements";
import DashHome from "./Components/Dashbord/DashHome";
import AdminProfile from "./Components/Dashbord/AdminProfile";
import ManageAgreement from "./Components/Dashbord/ManageAgreements";
import ManageMember from "./Components/Dashbord/ManageMember";
import MakeAnnouncement from "./Components/Dashbord/MakeAnnouncement";

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
      path: "Login",
      element:<Login></Login>
  },
  {
    path: "Registration",
    element:<Registration></Registration>
},
{
  path: "Apartment",
  element:<Apartment></Apartment>
},

  ]
},

{
  path: "Dashboard",
  element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
  errorElement: <ErrorPage></ErrorPage>,
  children:[
    {

      path: "/Dashboard",
      element: <DashHome></DashHome>
    },
    {path: "Announcements",
     element: <Announcements></Announcements>
    },
    
   
    {path: "UserProfile",
      element: <UserProfile></UserProfile>
    },

    {path: "AdminProfile",
    element: <AdminProfile></AdminProfile>
  },

  {path: "ManageAgreement",
  element: <ManageAgreement></ManageAgreement>
  },

  {path: "ManageMember",
  element: <ManageMember></ManageMember>
  },

  {path: "MakeAnnouncement",
  element: <MakeAnnouncement></MakeAnnouncement>
  },


    

]
},

])
  