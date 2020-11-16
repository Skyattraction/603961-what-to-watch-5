import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {getGenresList} from '../../utils';

const withGenresList = (Component) => {
  class WithGenresList extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: this.props.activeGenre,
        genres: getGenresList()
      };

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(genre) {
      const {onGenreClickAction} = this.props;
      this.setState(() => ({
        activeItem: genre
      }));
      (() => onGenreClickAction(genre))();
    }

    render() {
      const {genres, activeItem} = this.state;
      return (
        <Component {...this.props} activeItem={activeItem} genres={genres} handleClick={this.handleClick} />
      );
    }
  }

  WithGenresList.propTypes = {
    films: PropTypes.array.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    onGenreClickAction: PropTypes.func.isRequired,
    activeGenre: PropTypes.string.isRequired
  };

  return WithGenresList;

};

export default withGenresList;
