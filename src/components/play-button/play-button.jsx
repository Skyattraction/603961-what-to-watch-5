import React from "react";
import PropTypes from "prop-types";

const PlayButton = (props) => {
  const {history} = props;

  const onPlayButtonClick = () => {
    history.push(`/player/:id`);
  };

  return (
    <button className="btn btn--play movie-card__button" type="button" onClick={onPlayButtonClick}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
};

export default PlayButton;

PlayButton.propTypes = {
  history: PropTypes.shape().isRequired,
};
