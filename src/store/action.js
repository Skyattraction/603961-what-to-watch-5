import {getFilmsByGenre} from '../utils';

export const ActionType = {
  SELECT_GENRE: `SELECT_GENRE`,
  GET_FILMS: `GET_FILMS`,
  LOAD_FILMS_SET: `LOAD_FILMS_SET`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_GENRES: `LOAD_GENRES`,
  LOAD_PROMO: `LOAD_PROMO`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

export const selectActiveGenre = (genre) => ({
  type: ActionType.SELECT_GENRE,
  payload: genre
});

export const filterFilmsByGenre = (genre) => ({
  type: ActionType.GET_FILMS,
  payload: getFilmsByGenre(genre)
});

export const loadFilmsSet = (loadedFilmsNumber) => ({
  type: ActionType.LOAD_FILMS_SET,
  payload: loadedFilmsNumber
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews
});

export const loadPromoFilm = (promoFilm) => ({
  type: ActionType.LOAD_PROMO,
  payload: promoFilm
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
