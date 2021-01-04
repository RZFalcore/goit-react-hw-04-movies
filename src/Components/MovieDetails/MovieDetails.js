import React from "react";
import PropTypes from "prop-types";

import { getImgUrl } from "../../utils/imagePathFinder";
import styles from "./MovieDetails.module.css";

const MovieDetails = ({
  title,
  release_date,
  vote_average,
  overview,
  genres,
  poster_path,
  goBack,
}) => {
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
          <button onClick={goBack}>Go back</button>
        </div>
      </div>
    </>
  );
};

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  poster_path: PropTypes.string.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default MovieDetails;
