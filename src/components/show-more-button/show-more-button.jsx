import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const ShowMoreButton = (props) => {
  const {loadedFilmsNumber, onShowMoreClick} = props;

  return (
    <div className="catalog__more">
      <button
        type="button"
        className="catalog__button"
        onClick={(evt) => {
          evt.preventDefault();
          onShowMoreClick(loadedFilmsNumber);
        }}
      >
        Show more
      </button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  films: PropTypes.array.isRequired,
  loadedFilmsNumber: PropTypes.number.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  loadedFilmsNumber: state.loadedFilmsNumber
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick(loadedFilmsNumber) {
    dispatch(ActionCreator.loadFilmsSet(loadedFilmsNumber));
  }
});

export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
