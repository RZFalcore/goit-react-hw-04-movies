import React, { Component } from "react";
import { getMovieWithID, getMoviePoster } from "../../Services/API";

export default class MovieDetailsPage extends Component {
  state = { movie: null, poster: "" };
  componentDidMount() {
    const id = this.props.match.params.id;
    getMovieWithID(id)
      .then((data) => this.setState({ movie: data }))
      .catch(console.log);
  }

  render() {
    const { movie, poster } = this.state;
    console.log(movie, poster);
    return (
      <div>
        <h2>Movie details page</h2>;
        {movie && (
          <>
            <img src={movie.poster_path} alt="" />
          </>
        )}
      </div>
    );
  }
}
