import React from "react";
import PropTypes from 'prop-types';
import {Router as BrowserRouter, Route, Switch} from "react-router-dom";
import {connect, useSelector} from 'react-redux';
import {selectActiveGenre, loadFilmsSet} from '../../store/action';
import {getGenresList} from "../../selectors";
import browserHistory from "../../browser-history";
import {AppRoute} from "../../const";
import PrivateRoute from "../private-route/private-route";
import MainPage from "../main-page/main-page";
import SignInPage from "../sign-in-page/sign-in-page";
import MyListPage from "../my-list-page/my-list-page";
import MoviePage from "../movie-page/movie-page";
import AddReviewPage from "../add-review-page/add-review-page";
import PlayerPage from "../player-page/player-page";
import withFullPlayer from "../../hocs/with-full-player/with-full-player";
import withRouter from "../../hocs/with-router/with-router";

const FullPlayerPageWrapped = withRouter(withFullPlayer(PlayerPage));
const MoviePageRouter = withRouter(MoviePage);
const AddReviewRouter = withRouter(AddReviewPage);

const App = (props) => {

  const {films, reviews} = props;
  const genres = useSelector(getGenresList);
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          exact
          path={AppRoute.ROOT}
          render={({history}) => (
            <MainPage
              {...props}
              genres={genres}
              header={{avatar: true, customClass: `movie-card__head`}}
              history={history}
            />
          )}
        />
        <Route exact path={AppRoute.LOGIN}>
          <SignInPage header={{title: `Sign In`, customClass: `user-page__head`}} />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MYLIST}
          render={() => {
            return (
              <MyListPage films={films} header={{title: `My list`, avatar: true, customClass: `user-page__head`}} />
            );
          }}
        />
        <Route
          exact
          path={AppRoute.FILMS}
          render={(RouteComponentProps) => (
            <MoviePageRouter
              key={RouteComponentProps.match.params.id}
              films={films}
              reviews={reviews}
              header={{avatar: true, customClass: `movie-card__head`}}
              {...RouteComponentProps}
            />
          )}
        />
        <PrivateRoute
          exact
          path={AppRoute.FILMS_REVIEW}
          render={(RouteComponentProps) => (
            <AddReviewRouter films={films} {...RouteComponentProps} />
          )}
        />
        <Route
          exact
          path={AppRoute.PLAYER}
          render={(RouteComponentProps) => (
            <FullPlayerPageWrapped
              key={RouteComponentProps.match.params.id}
              films={films}
              onExitButtonClick={() => RouteComponentProps.history.push(AppRoute.ROOT)}
              {...RouteComponentProps}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  reviews: PropTypes.array,
  promoFilm: PropTypes.oneOfType(
      PropTypes.arrayOf(PropTypes.shape({subProp: PropTypes.string})),
      PropTypes.shape({subProp: PropTypes.string})),
  history: PropTypes.func,
};

const mapStateToProps = ({FILMS, DATA}) => ({
  activeGenre: FILMS.activeGenre,
  loadedFilmsNumber: FILMS.loadedFilmsNumber,
  reviews: DATA.reviews,
  films: DATA.films,
  promoFilm: DATA.promoFilm,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClickAction(genre) {
    dispatch(selectActiveGenre(genre));
  },
  onShowMoreClickAction(loadedFilmsNumber) {
    dispatch(loadFilmsSet(loadedFilmsNumber));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
