import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loadFilmsSet} from "../../store/action";

const ShowMoreButton = (props) => {
  const {loadedFilmsNumber, onShowMoreClickAction} = props;

  return (
    <div className="catalog__more">
      <button
        type="button"
        className="catalog__button"
        onClick={(evt) => {
          evt.preventDefault();
          onShowMoreClickAction(loadedFilmsNumber);
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
  onShowMoreClickAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({FILMS, DATA}) => ({
  films: DATA.films,
  loadedFilmsNumber: FILMS.loadedFilmsNumber
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClickAction(loadedFilmsNumber) {
    dispatch(loadFilmsSet(loadedFilmsNumber));
  }
});

export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
