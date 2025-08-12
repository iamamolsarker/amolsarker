import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Projects from "../Pages/Projects/Projects";

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
        }
    ]
  },
]);