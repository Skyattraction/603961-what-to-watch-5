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
    case ActionType.LOAD_FILMS_SET:
      return extend(state, {
        loadedFilmsNumber: action.payload
      });
  }

  return state;
};

export {filmsProcess, initialState};
