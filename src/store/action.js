import {getFilmsByGenre} from '../utils';

const ActionType = {
  SELECT_GENRE: `SELECT_GENRE`,
  GET_FILMS: `GET_FILMS`,
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
};

export {ActionType, ActionCreator};
