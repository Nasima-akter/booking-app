import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddSeller from "../../Pages/Dashboard/AddSeller/AddSeller";
import AddDoctor from "../../Pages/Dashboard/AddSeller/AddSeller";
import AllAppointment from "../../Pages/Dashboard/AllAppointment/AllAppointment";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import EditUser from "../../Pages/Dashboard/EditUser/EditUser";
import ViewUser from "../../Pages/Dashboard/EditUser/ViewUser";
import ManageSellers from "../../Pages/Dashboard/ManageSellers/ManageSellers";
// import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import RecentAppointment from "../../Pages/Dashboard/RecentAppointment/RecentAppointment";
// import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Appointment></Appointment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/SignUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/addseller',
                element: <AdminRoute><AddSeller></AddSeller></AdminRoute>
            },
            {
                path: '/dashboard/managesellers',
                element: <AdminRoute><ManageSellers></ManageSellers></AdminRoute>
            },
            {
                path: '/dashboard/recentAppointment',
                element: <AdminRoute><RecentAppointment></RecentAppointment></AdminRoute>
            },
            {
                path: '/dashboard/allAppointment',
                element: <AdminRoute><AllAppointment></AllAppointment></AdminRoute>
            },
            {
                path: '/dashboard/EditUser/:id',
                element: <AdminRoute><EditUser></EditUser></AdminRoute>
                
            },
            {
                path: '/dashboard/viewUser',
                element: <AdminRoute><ViewUser></ViewUser></AdminRoute>
            },
            // {
            //     path: '/Dashboard/EditUser',
            //     element: <AdminRoute><EditUser></EditUser></AdminRoute>
            // },
        ]
    }
])

export default router;
