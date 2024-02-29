import { createBrowserRouter } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Layout from "./Layout";
import MoviesPage from "../Movies/MoviesPage";
import TVshows from "../TVshows/TVshows";
import MovieDetails from "../Movies/MovieDetails";
import TVshowDetails from "../TVshows/TVshowDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "movies", element: <MoviesPage /> },
      { path: "movies/:id", element: <MovieDetails /> },
      { path: "tvshows", element: <TVshows /> },
      { path: "tvshows/:id", element: <TVshowDetails /> },
    ],
  },
]);

export default router;
