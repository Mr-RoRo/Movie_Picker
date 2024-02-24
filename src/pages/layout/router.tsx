import { createBrowserRouter } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "movies" },
      { path: "tvshows" },
      { path: "celebrities" },
    ],
  },
]);

export default router;
