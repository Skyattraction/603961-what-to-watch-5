import {createSelector} from "reselect";
import {filterFilmsByGenre, addFilms, getGenres} from "./utils";

export const selectAllGenres = (state) => state.DATA.films;
export const selectActiveGenre = (state) => state.FILMS.activeGenre;
export const getFilmsNumber = (state) => state.FILMS.loadedFilmsNumber;

export const getFilmsByGenre = createSelector(
    selectAllGenres,
    selectActiveGenre,
    (films, activeGenre) => filterFilmsByGenre(films, activeGenre)
);

export const getLoadedFilms = createSelector(
    selectAllGenres,
    getFilmsNumber,
    (films, loadedFilmsNumber) => addFilms(films, loadedFilmsNumber)
);

export const getGenresList = createSelector(
    selectAllGenres,
    (films) => getGenres(films)
);
