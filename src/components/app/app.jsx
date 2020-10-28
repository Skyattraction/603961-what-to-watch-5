import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "../main-page/main-page";
import SignInPage from "../sign-in-page/sign-in-page";
import MyListPage from "../my-list-page/my-list-page";
import MoviePage from "../movie-page/movie-page";
import AddReviewPage from "../add-review-page/add-review-page";
import PlayerPage from "../player-page/player-page";

const App = (props) => {

  const {movieName, movieGenre, movieYear, films, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({history}) => (
            <MainPage
              movieName={movieName}
              movieGenre={movieGenre}
              movieYear={movieYear}
              films={films}
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
          render={({history}) => (
            <MoviePage
              films={films}
              reviews={reviews}
              history={history}
              header={{avatar: true, customClass: `movie-card__head`}}
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
          render={({history}) => (
            <PlayerPage onExitButtonClick={() => history.push(`/`)} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movieName: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.number.isRequired,
  films: PropTypes.array.isRequired,
  reviews: PropTypes.array,
};

export default App;
