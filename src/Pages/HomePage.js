import React, { Component, Suspense } from "react";
import MovieList from "../Components/MovieList/MovieList";
import { getMovies } from "../Services/API";

export default class HomePage extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    getMovies().then((data) => this.setState({ movies: data }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h2>Thrending today</h2>
        <Suspense fallback={<p>Loading...</p>}>
          {movies && <MovieList movieList={movies} />}
        </Suspense>
      </div>
    );
  }
}
