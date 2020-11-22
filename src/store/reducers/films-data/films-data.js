import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  films: [],
  promoFilm: {},
  reviews: []
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
    case ActionType.LOAD_PROMO:
      return extend(state, {
        promoFilm: action.payload,
      });
  }
  return state;
};

export {filmsData, initialState};
