import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import PreviewPlayer from "../preview-player/preview-player";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({isActive: true});
  }

  handleMouseLeave() {
    this.setState({isActive: false});
  }

  render() {
    const {film} = this.props;

    const {
      name,
      preview,
      trailer
    } = film;

    const {isActive} = this.state;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="small-movie-card__image">
          <PreviewPlayer preview={preview} trailer={trailer} />
        </div>
        {!isActive &&
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to="/films/:id">{name}</Link>
        </h3>
        }
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    trailer: PropTypes.string.isRequired,
  }).isRequired,
};

export default SmallMovieCard;
