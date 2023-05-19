
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import MyToy from "../pages/MyToy/MyToy";
import AddAToy from "../pages/AddAToy/AddAToy";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path:'/blogs',
            element: <Blogs></Blogs>
        },
        {
            path:'/allToys',
            element: <AllToys></AllToys>
        },
        {
            path:'/myToy',
            element: <MyToy></MyToy>
        },
        {
            path:'/addToy',
            element: <AddAToy></AddAToy>
        },
      ]
    },
  ]);

export default router;