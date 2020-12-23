import React, { Component } from "react";

import MovieList from '../Components/MovieList/MovieList';
import {getMovieWithQuery} from '../Services/API'
export default class MoviePage extends Component {
  state = {
    query: "",
    searchedMovies: null
  };

  handleChagne = e => {
    this.setState({ query: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;

    query.length > 0 && getMovieWithQuery(query)
      .then(data => this.setState({ searchedMovies: data.results }))
      .catch(console.log)
  }

  render() {
    const { query , searchedMovies} = this.state;
    return (
      <div>
          <h1>Movie search</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={query} onChange={this.handleChagne} placeholder="Type movie..."/>
            <button type="submit">Search</button>
        </form>
        {searchedMovies && <MovieList movieList={searchedMovies}/>}
      </div>
    )
  }
}
