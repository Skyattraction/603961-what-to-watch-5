import {ALL_GENRES} from "./const";
import {initialState} from './store/reducer';

const {films} = initialState;

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getGenresList = (filmsList) => {

  const genreList = [ALL_GENRES];

  for (let film of filmsList) {
    genreList.push((film.genre));
  }
  const updatedGenresList = new Set(genreList);
  return Array.from(updatedGenresList);
};

export const getFilmsByGenre = (activeGenre) => {

  const filmsByGenre = [];

  films.forEach((film) => {
    if (activeGenre === film.genre) {
      filmsByGenre.push(film);
    }
  });

  if (activeGenre === ALL_GENRES) {
    return films;
  } else {
    return filmsByGenre;
  }
};
