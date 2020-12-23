import { lazy } from "react";

export const HomePage = lazy(() =>
  import("./HomePage" /* webpackChunkName: "home-page" */)
);
export const MoviePage = lazy(() =>
  import("./MoviePage" /* webpackChunkName: "movie-page" */)
);

export const MovieDetailsPage = lazy(() =>
  import("./MovieDetailsPage" /* webpackChunkName: "movie-details-page" */)
);

export const Cast = lazy(() =>
  import("../Components/Cast/Cast" /* webpackChunkName: "cast" */)
);

export const Reviews = lazy(() =>
  import("../Components/Reviews/Reviews" /* webpackChunkName: "reviews" */)
);