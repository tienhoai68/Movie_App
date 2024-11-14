import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "@pages/RootLayout";

import ModalProvider from "@context/ModalProvider";
import Search from "@pages/SearchPage";
import SearchPage from "@pages/SearchPage";

const MovieDetail = lazy(() => import("@pages/MovieDetail"));
const TVShowDetails = lazy(() => import("@pages/TVShowDetails"));
const HomePage = lazy(() => import("@pages/HomePage"));
const PeoplePage = lazy(() => import("@pages/PeoplePage"));

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movieDetail/:id",
        element: <MovieDetail />,
      },
      {
        path: "/tv/:id",
        element: <TVShowDetails />,
      },
      {
        path: "/people/:id",
        element: <PeoplePage />,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://api.themoviedb.org/3/person/${params.id}?append_to_response=combined_credits`,
            {
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
              },
            },
          );
          return res;
        },
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </StrictMode>,
);
