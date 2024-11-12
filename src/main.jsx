import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TVShowDetails from "@pages/TVShowDetails";
import RootLayout from "@pages/RootLayout";
import HomePage from "@pages/HomePage";
import MovieDetail from "@pages/MovieDetail";
import ModalProvider from "@context/ModalProvider";
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
