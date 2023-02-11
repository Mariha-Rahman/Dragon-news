import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Rightsight from "../pages/Other/Rightsight";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "./privateroute/PrivateRoute";

export const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/places')
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/register',
            element: <Registration></Registration>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/places/:id',
            element: <PrivateRoute>
                <Rightsight></Rightsight>
            </PrivateRoute>,
            loader: ({ params }) => fetch(`http://localhost:5000/places/${params.id}`)
        }
    ]
}]);