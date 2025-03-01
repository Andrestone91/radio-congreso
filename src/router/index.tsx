import React, { useState, useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "components/layout";
import { Home } from "pages/home";
import { NewSection } from "components/product";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/new",
        element: (
          <NewSection
            url={"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"}
          />
        ),
      },
    ],
  },
]);

export { AppRoutes };
