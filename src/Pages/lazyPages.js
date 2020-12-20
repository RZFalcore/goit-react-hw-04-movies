import { lazy } from "react";

export const HomePage = lazy(() =>
  import("./HomePage" /* webpackChunkName: "home-page" */)
);
export const MoviePage = lazy(() =>
  import("./MoviePage" /* webpackChunkName: "home-page" */)
);
