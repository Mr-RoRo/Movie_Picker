import { createBrowserRouter } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Layout from "./Layout";
import MoviesPage from "../Movies/MoviesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "movies", element: <MoviesPage /> },
      { path: "tvshows" },
      { path: "celebrities" },
    ],
  },
]);

export default router;
