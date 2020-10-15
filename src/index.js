import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films";

const Settings = {
  MOVIE_NAME: `The Grand Budapest Hotel`,
  MOVIE_GENRE: `Drama`,
  MOVIE_YEAR: 2014
};

ReactDOM.render(
    <App
      movieName={Settings.MOVIE_NAME}
      movieGenre={Settings.MOVIE_GENRE}
      movieYear={Settings.MOVIE_YEAR}
      films={films}
    />,
    document.querySelector(`#root`)
);
