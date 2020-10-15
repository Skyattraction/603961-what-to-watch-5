import React from "react";
import PropTypes from "prop-types";

const MyListButton = (props) => {
  const {history} = props;

  const onMyListButtonClick = () => {
    history.push(`/mylist`);
  };

  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={onMyListButtonClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add" />
      </svg>
      <span>My list</span>
    </button>
  );
};

export default MyListButton;

MyListButton.propTypes = {
  history: PropTypes.shape().isRequired,
};
