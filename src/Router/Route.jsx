import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../ Pages/Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import CheckOut from "../ Pages/Checkout/CheckOut";


const router = createBrowserRouter([
   {
     path: "/",
     element: <Main></Main>,
     children:[
      {
         path:'/',
         element: <Home></Home>
      },{
        path : "/login",
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },{
        path: '/checkout/:id',
        element: <CheckOut></CheckOut>,
        loader: ({params}) => fetch(`http://localhost:5000/cheakout/${params.id}`)
      }
     ]
   },
 ]);

export default router;