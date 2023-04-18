import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Signup from "../Pages/Signup/Signup";
import Signin from "../Pages/Signin/Signin";
import AuthorDetails from "../Pages/AuthorDetails/AuthorDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />           
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/signin',
                element: <Signin />
            },
            {
                path: '/author',
                element: <AuthorDetails />
            },
        ]
    }
])

export default router;