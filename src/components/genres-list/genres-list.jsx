import React from 'react';
import PropTypes from 'prop-types';
import {getGenresList, selectAllGenres, selectActiveGenre} from '../../selectors';
import {connect, useSelector} from 'react-redux';

const GenresList = (props) => {
  const {activeItem, onClick, handleClick} = props;
  const genres = useSelector(getGenresList);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, item) =>
        <li
          className={(activeItem === genre) ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}
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
  activeItem: selectActiveGenre(state),
  genres: selectAllGenres(state)
});

GenresList.propTypes = {
  genres: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired
};

export {GenresList};
export default connect(mapStateToProps)(GenresList);
