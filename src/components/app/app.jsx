import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";

const App = (props) => {
  const {movieName, movieGenre, movieYear} = props;

  return (
    <MainPage movieName={movieName} movieGenre={movieGenre} movieYear={movieYear} />
  );
};


App.propTypes = {
  movieName: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.number.isRequired,
};

export default App;
