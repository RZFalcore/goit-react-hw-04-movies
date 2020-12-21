import React, { Component } from "react";
import { getMovieWithID } from "../Services/API";
import { getImgUrl } from "../utils/imagePathFinder";

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
        <h1>Movie details page</h1>
        {movie && (
          <>
            <h2>{movie.title}</h2>
            <img src={posterUrl} alt={movie.title} height="400px" />
          </>
        )}
      </div>
    );
  }
}
