import { createBrowserRouter, Route } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import React from "react";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);
