import {loadFilms, loadReviews, loadPromoFilm, requireAuthorization, redirectToRoute} from "./action";
import {mapPropsNames} from "../utils";
import {AuthorizationStatus} from "../const";
import {AppRoute, APIRoute} from "../const";

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(loadFilms(data.map(mapPropsNames))))
);

export const fetchReviewList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}${id}`)
    .then(({data}) => {
      dispatch(loadReviews(data));
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS_PROMO)
    .then(({data}) => {
      dispatch(loadPromoFilm([data].map(mapPropsNames)));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);
