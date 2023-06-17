import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";

import Classes from "../pages/Classes/Classes";
import SignUp from "../SignUp/SignUp";


import ManageUser from "../pages/Dashboard/DashboardComponent/manageUsers/ManageUser";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageClasses from "../pages/Dashboard/DashboardComponent/ManageClasses/ManageClasses";

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
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
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