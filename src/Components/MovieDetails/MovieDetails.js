import React from "react";
import styles from "./MovieDetails.module.css";

import { getImgUrl } from "../../utils/imagePathFinder";

const MovieDetails = ({ movie }) => {
  const {
    title,
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
  } = movie;
  const url = getImgUrl(poster_path);

  return (
    <>
      <div className={styles.movieHeader}>
        <img src={url} alt={title} height="400px" />
        <div className={styles.movieInfo}>
          <h2>
            {title} ({release_date.slice(0, 4)})
          </h2>
          <p>User score: {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres.map((genre) => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
