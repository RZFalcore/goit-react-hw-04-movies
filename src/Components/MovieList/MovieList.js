import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

const MovieList = ({ movieList, location }) => (
  <ul>
    {movieList.map((movie) => (
      <li key={movie.id}>
        <Link
          to={{ pathname: `/movies/${movie.id}`, state: { from: location } }}
        >
          {movie.title}
        </Link>
      </li>
    ))}
  </ul>
);   

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(MovieList);
