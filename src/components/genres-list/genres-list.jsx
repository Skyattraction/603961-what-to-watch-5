import React from 'react';
import PropTypes from 'prop-types';
import {getGenresList, getFilmsByGenre, selectAllGenres, selectActiveGenre} from '../../selectors';
import {connect, useSelector} from 'react-redux';

const GenresList = (props) => {
  const {activeGenre, onClick, handleClick} = props;
  const genres = useSelector(getGenresList);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, item) =>
        <li
          className={(activeGenre === genre) ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}
          key={`${item}-${genre}`}
        >
          <a href="#"
            onClick={(evt) => {
              evt.preventDefault();
              handleClick(genre);
              onClick(item);
            }}
            className="catalog__genres-link"
          >
            {genre}
          </a>
        </li>
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  activeGenre: selectActiveGenre(state),
  genres: selectAllGenres(state)
});

const mapDispatchToProps = (dispatch) => ({
  handleClick(activeGenre) {
    dispatch(getFilmsByGenre(activeGenre));
  }
});

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired
};

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
