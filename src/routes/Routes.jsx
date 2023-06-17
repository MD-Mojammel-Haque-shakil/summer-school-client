import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";

import Classes from "../pages/Classes/Classes";
import SignUp from "../SignUp/SignUp";


import ManageUser from "../pages/Dashboard/DashboardComponent/manageUsers/ManageUser";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageClasses from "../pages/Dashboard/DashboardComponent/ManageClasses/ManageClasses";
import PrivateRoutes from "../pages/Private Routes/PrivateRoutes";
import AllClass from "../pages/Classes/AllClass";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
              path: 'allclass',
              element: <AllClass></AllClass>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
          {
            path: 'manageuser',
            element:<ManageUser></ManageUser>
          },
          {
            path: 'manageclass',
            element: <ManageClasses></ManageClasses>
          }
        ]
      }
])