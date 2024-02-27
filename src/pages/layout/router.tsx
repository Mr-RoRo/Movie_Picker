import { createBrowserRouter } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Layout from "./Layout";
import MoviesPage from "../Movies/MoviesPage";
import TVshows from "../TVshows/TVshows";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "movies", element: <MoviesPage /> },
      { path: "tvshows", element: <TVshows /> },
      { path: "celebrities" },
    ],
  },
]);

export default router;
