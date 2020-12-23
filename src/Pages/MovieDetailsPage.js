import React, { Component, Suspense } from "react";

import MovieDetails from "../Components/MovieDetails/MovieDetails";
import MovieMoreInfo from "../Components/MovieMoreInfo/MovieMoreInfo";

import { getMovieWithID } from "../Services/API";

export default class MovieDetailsPage extends Component {
  state = { movie: null };

  componentDidMount() {
    const { id } = this.props.match.params;
    getMovieWithID(id)
      .then((data) => this.setState({ movie: data }))
      .catch(console.log);
  }

  render() {
    const { movie } = this.state;
    
    return (
      <div>
        {movie && <MovieDetails movie={movie} />}
        <Suspense fallback={<p>Loading...</p>}>
          <MovieMoreInfo />
        </Suspense>
      </div>
    );
  }
}
