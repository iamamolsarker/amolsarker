import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Projects from "../Pages/Projects/Projects";
import Blogs from "../Pages/Blogs/Blogs";
import BlogDetails from "../Pages/BlogDetailsPage/BlogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
        {
            index: true,
            Component: Home
        },
        {
            path:"about-me",
            Component: AboutMe
        },
        {
          path: "projects",
          Component: Projects
        },
        {
          path:"blogs",
          Component: Blogs

        },
        {
          path:"single-blog/:id",
          Component: BlogDetails
        }
    ]
  },
]);