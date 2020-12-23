import axios from "axios";

const key = `?api_key=${process.env.REACT_APP_API_KEY}`;

export function getMovies() {
  return axios
    .get("https://api.themoviedb.org/3/trending/movie/day" + key)
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getMovieWithID(id) {
  console.log("getMovieWithID id:", id);
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}${key}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getMovieCredits(id) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}/credits${key}`)
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
