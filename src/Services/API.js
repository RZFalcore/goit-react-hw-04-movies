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

export function getMoviePoster(id, posterPath) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}${posterPath}`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
