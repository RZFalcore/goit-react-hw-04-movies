import React, { Component } from "react";
import { getMovieWithID } from "../../Services/API";
import { getImgUrl } from "../../utils/imagePathFinder";
import styles from "./MovieDetailsPage.module.css";

export default class MovieDetailsPage extends Component {
  state = { movie: null, posterUrl: "" };
  componentDidMount() {
    const id = this.props.match.params.id;
    getMovieWithID(id)
      .then((data) =>
        this.setState({ movie: data, posterUrl: getImgUrl(data.poster_path) })
      )
      .catch(console.log);
  }

  render() {
    const { movie, posterUrl } = this.state;
    console.log(movie);
    return (
      <div>
        <h1 className={styles.pageTitle}>Movie details page</h1>
        {movie && (
          <>
            <div className={styles.movieHeader}>
              <img src={posterUrl} alt={movie.title} height="400px" />
              <div className={styles.movieInfo}>
                <h2>
                  {movie.title} ({movie.release_date.slice(0, 4)})
                </h2>
                <p>User score: {movie.vote_count}%</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <p>
                  {movie.genres.map((genre) => (
                    <span key={genre.id}>{genre.name} </span>
                  ))}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
