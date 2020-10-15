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

  const {movieName, movieGenre, movieYear, films} = props;

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
              history={history}
            />
          )}
        />
        <Route exact path="/login">
          <SignInPage header={{title: `Sign In`}} />
        </Route>
        <Route exact path="/mylist">
          <MyListPage films={films} header={{title: `My list`, avatar: true}} />
        </Route>
        <Route
          exact
          path="/films/:id"
          render={({history}) => (
            <MoviePage films={films} history={history} />
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
};

export default App;
