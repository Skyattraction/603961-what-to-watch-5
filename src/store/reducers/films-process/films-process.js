import {extend} from '../../../utils';
import {ActionType} from '../../action';
import {ALL_GENRES, NUMBER_OF_LOADED_FILMS} from '../../../const';

const initialState = {
  films: [],
  activeGenre: ALL_GENRES,
  loadedFilmsNumber: NUMBER_OF_LOADED_FILMS,
};

const filmsProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_GENRE:
      return extend(state, {
        activeGenre: action.payload
      });

    case ActionType.GET_FILMS:
      return extend(state, {
        films: action.payload,
        loadedFilmsNumber: NUMBER_OF_LOADED_FILMS
      });

    case ActionType.LOAD_FILMS_SET:
      if (state.loadedFilmsNumber < state.films.length - NUMBER_OF_LOADED_FILMS) {
        return extend(state, {loadedFilmsNumber: action.payload + NUMBER_OF_LOADED_FILMS});
      } else {
        return extend(state, {loadedFilmsNumber: state.films.length});
      }
  }

  return state;
};

export {filmsProcess, initialState};
