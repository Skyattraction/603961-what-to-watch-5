import {createSelector} from "reselect";
import {ALL_GENRES} from "./const";

const selectAllGenres = (state) => state.DATA.films;
const selectActiveGenre = (state) => state.FILMS.activeGenre;

export const getFilmsByGenre = createSelector([selectActiveGenre, selectAllGenres], (genre, films) => {
  if (genre === ALL_GENRES) {
    return films;
  } else {
    return films.filter((film) => film.genre === genre);
  }
});

export const getGenresList = createSelector([selectAllGenres], (films) => {
  const allGenres = [ALL_GENRES];
  for (let film of films) {
    allGenres.push((film.genre));
  }

  const updatedGenresList = new Set(allGenres.slice(0, 10));
  return Array.from(updatedGenresList);
});
