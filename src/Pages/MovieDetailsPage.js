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

  handleReturn = () => {
    const { history, location } = this.props;    
    if (location.state) {
      return history.push(location.state.from);
    }
    history.push("/");
  }

  render() {
    const { movie } = this.state;
    
    return (
      <div>
        <Suspense fallback={<p>Loading...</p>}>
          {movie && <MovieDetails {...movie} goBack={this.handleReturn} />}
          <MovieMoreInfo />
        </Suspense>
  
      </div>
    );
  }
}
