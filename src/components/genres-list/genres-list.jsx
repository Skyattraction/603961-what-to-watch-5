import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getGenresList} from '../../utils';

class GenresList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: props.activeGenre,
      genres: getGenresList()
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(genre) {
    const {onGenreClick} = this.props;
    this.setState(() => ({
      active: genre
    }));
    (() => onGenreClick(genre))();
  }

  render() {
    const {activeGenre} = this.props;

    return (
      <ul className="catalog__genres-list">
        {this.state.genres.map((genre, i) =>
          <li
            className={(activeGenre === genre) ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}
            key={`${i}-${genre}`}
          >
            <a href="#"
              onClick={(evt) => {
                evt.preventDefault();
                this.handleClick(genre);
              }}
              className="catalog__genres-link"
            >
              {genre}
            </a>
          </li>
        )}
      </ul>
    );
  }
}

GenresList.propTypes = {
  films: PropTypes.array.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGenreClick: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired
};

export default GenresList;
