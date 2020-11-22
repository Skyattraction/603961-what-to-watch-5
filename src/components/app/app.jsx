import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from 'react-redux';
import {selectActiveGenre, filterFilmsByGenre, loadFilmsSet} from '../../store/action';
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

const App = (props) => {

  const {films, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({history}) => (
            <MainPage
              {...props}
              header={{avatar: true, customClass: `movie-card__head`}}
              history={history}
            />
          )}
        />
        <Route exact path="/login">
          <SignInPage header={{title: `Sign In`, customClass: `user-page__head`}} />
        </Route>
        <Route exact path="/mylist">
          <MyListPage films={films} header={{title: `My list`, avatar: true, customClass: `user-page__head`}} />
        </Route>
        <Route
          exact
          path="/films/:id"
          render={(RouteComponentProps) => (
            <MoviePageRouter
              films={films}
              reviews={reviews}
              header={{avatar: true, customClass: `movie-card__head`}}
              {...RouteComponentProps}
            />
          )}
        />
        <Route
          exact
          path="/films/:id/review"
          render={({history}) => (
            <AddReviewPage films={films} history={history} />
          )}
        />
        <Route
          exact
          path="/player/:id"
          render={(RouteComponentProps) => (
            <FullPlayerPageWrapped films={films} onExitButtonClick={() => RouteComponentProps.history.push(`/`)} {...RouteComponentProps} />
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
    dispatch(filterFilmsByGenre(genre));
  },
  onShowMoreClickAction(loadedFilmsNumber) {
    dispatch(loadFilmsSet(loadedFilmsNumber));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
