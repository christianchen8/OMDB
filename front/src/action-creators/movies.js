import axios from "axios";
import { RECEIVE_MOVIES, RECEIVE_SINGLEMOVIE } from "../constants";

const receieveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies,
});

const receieveSingleMovie = (movie) => ({
  type: RECEIVE_SINGLEMOVIE,
  movie,
});

export const fetchMovies = (movie = "avengers") => (dispatch) => {
  axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&s=${movie}`)
    .then((res) => res.data)
    .then((movies) => {
      dispatch(receieveMovies(movies));
    });
};

export const fetchSingleMovie = (id) => (dispatch) => {
  axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&i=${id}`)
    .then((res) => res.data)
    .then((singleMovie) => {
      dispatch(receieveSingleMovie(singleMovie));
    });
};
