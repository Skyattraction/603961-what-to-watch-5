import {getFilmsByGenre} from '../utils';

const ActionType = {
  SELECT_GENRE: `SELECT_GENRE`,
  GET_FILMS: `GET_FILMS`,
  LOAD_FILMS_SET: `LOAD_FILM_SET`,
};

const ActionCreator = {
  selectActiveGenre: (genre) => ({
    type: ActionType.SELECT_GENRE,
    payload: genre
  }),
  filterFilmsByGenre: (genre) => ({
    type: ActionType.GET_FILMS,
    payload: getFilmsByGenre(genre)
  }),
  loadFilmsSet: (loadedFilmsNumber) => ({
    type: ActionType.LOAD_FILMS_SET,
    payload: loadedFilmsNumber
  }),
};

export {ActionType, ActionCreator};
