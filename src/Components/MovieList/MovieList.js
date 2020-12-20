import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movieList }) => (
  <ul>
    {movieList.map((movie) => (
      <li key={movie.id}>
        <Link to={{ pathname: `/movies/${movie.id}` }}>{movie.title}</Link>
      </li>
    ))}
  </ul>
);

export default MovieList;