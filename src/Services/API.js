import axios from "axios";

const key = `?api_key=${process.env.REACT_APP_API_KEY}`;
const url = "https://api.themoviedb.org/3";

export function getMovies() {
  return axios
    .get(`${url}/trending/movie/day${key}`)
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getMovieWithQuery(query) {
  return axios
    .get(`${url}/search/movie${key}&query=${query}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getMovieWithID(id) {
  return axios
    .get(`${url}/movie/${id}${key}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getMovieCredits(id) {
  return axios
    .get(`${url}/movie/${id}/credits${key}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getMovieReviews(id) {
  return axios
    .get(`${url}/movie/${id}/reviews${key}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getMoviePoster(posterPath) {
  if (posterPath) {
    return axios
      .get(`https://image.tmdb.org/t/p/w500${posterPath}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    return "";
  }
}
