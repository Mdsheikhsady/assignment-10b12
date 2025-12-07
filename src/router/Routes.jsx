import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import ForgotPass from "../pages/ForgotPass";
import Error from "../pages/Error";
import ServiceDetails from "../pages/ServiceDetails";
import AddService from "../pages/AddService";
import MyServices from "../pages/MyServices";
import UpdateService from "../pages/UpdateService";
import MyOrders from "../pages/myOrders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement:<Error></Error>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },

        {
            path:'/services',
            element:<Services></Services>
        },

        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Register></Register>
        },
        {
            path:'/profile',
            element:<PrivateRouter><Profile></Profile></PrivateRouter>
        },
        {
            path: '/details/:myId',
            element: <PrivateRouter><ServiceDetails></ServiceDetails></PrivateRouter>
             
        },
        {
            path: '/forgot/:email',
            element: <ForgotPass></ForgotPass>
        },
        {
            path: '/add-services',
            element: <PrivateRouter><AddService></AddService></PrivateRouter>
        },
        {
            path: '/my-services',
            element: <PrivateRouter><MyServices></MyServices></PrivateRouter>
        },
        
        {
            path: '/update-services/:id',
            element: <PrivateRouter><UpdateService></UpdateService></PrivateRouter>
        },
        {
            path: '/my-orders',
            element: <PrivateRouter><MyOrders></MyOrders></PrivateRouter>,
        }
        
    ]
  },
]);

export default router;