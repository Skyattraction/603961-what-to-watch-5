import React from "react";
import PropTypes from "prop-types";
import {connect, useSelector} from "react-redux";
import {loadFilmsSet} from "../../store/action";
import {getLoadedFilms, getFilmsByGenre} from "../../selectors";

const ShowMoreButton = (props) => {
  const {onShowMoreClickAction} = props;
  const loadedFilmsNumber = useSelector(getLoadedFilms);

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

const mapStateToProps = (state) => ({
  films: getFilmsByGenre(state),
  loadedFilmsNumber: getLoadedFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClickAction(loadedFilmsNumber) {
    dispatch(loadFilmsSet(loadedFilmsNumber));
  }
});

export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
