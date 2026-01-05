import { createBrowserRouter } from "react-router";
import App from "../App";
import ProjectDetails from "../Page/ProjectDetailes";
import RootLayouts from "../Layouts/RootLayouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts/>,
    children:[
      {
        index: true ,
        element: <App/>
      },
      {
        path: "/proojectDetailes/:id",
        element: <ProjectDetails/>
      }
    ]
  }
])