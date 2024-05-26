import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "./ErrorPage";
import SingleActivity from "./Activities/SingleActivity";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/activities/:name",
    element: <SingleActivity />,
    errorElement: <ErrorPage />,
  },
]);
