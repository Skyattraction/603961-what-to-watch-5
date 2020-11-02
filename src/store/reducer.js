import {extend} from '../utils';
import {ActionType} from './action';
import films from '../mocks/films';
import reviews from '../mocks/reviews';
import {ALL_GENRES} from '../const';

const initialState = {
  activeGenre: ALL_GENRES,
  reviews,
  films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_GENRE:
      return extend(state, {
        activeGenre: action.payload
      });

    case ActionType.GET_FILMS:
      return extend(state, {
        films: action.payload
      });
  }

  return state;
};

export {reducer, initialState};
