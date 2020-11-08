import React from 'react';
import PropTypes from 'prop-types';

const GenresList = (props) => {
  const {genres, activeItem, onClick, handleClick} = props;

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

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired
};

export default GenresList;
