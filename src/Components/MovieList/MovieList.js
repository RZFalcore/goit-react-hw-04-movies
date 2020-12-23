import React from "react";
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

export default withRouter(MovieList);
