import {extend} from "../../../utils";
import {ActionType} from "../../action";
//import films from '../../../mocks/films';
import reviews from '../../../mocks/reviews';
import genres from '../../../mocks/genres';

const initialState = {
  films: [],
  reviews,
  genres
};

const filmsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.LOAD_GENRES:
      return extend(state, {
        genres: action.payload,
      });
  }
  return state;
};

export {filmsData, initialState};
