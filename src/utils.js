import {ALL_GENRES} from "./const";
import {initialState} from './store/reducer';

const {films, genres} = initialState;

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getGenresList = () => {

  const genreList = [ALL_GENRES];

  for (let genre of genres) {
    genreList.push((genre));
  }
  const updatedGenresList = new Set(genreList.slice(0, 10));
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
