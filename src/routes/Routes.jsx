
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
import PrivateRoute from "./PrivateRoute";
import Viewdetails from "../pages/ViewDetails/Viewdetails";
import UpdateToy from "../pages/UpdateToy/UpdateToy";

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
            element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
        },
        {
            path:'/addToy',
            element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
        },
        {
            path:'/viewDetails/:id',
            element: <PrivateRoute><Viewdetails></Viewdetails></PrivateRoute>,
            loader: ({params})=> fetch(`https://toys-and-hobbies-server.vercel.app/toy/${params.id}`)
        },
        {
          path: '/update-toy/:id',
          element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
          loader: ({ params }) => fetch(`https://toys-and-hobbies-server.vercel.app/toy/${params.id}`)
        },
      ]
    },
  ]);

export default router;