import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import Player from "../preview-player/preview-player";
import withPreview from "../../hocs/with-preview-player/with-preview-player";

const WithPreviewPlayerWrapped = withPreview(Player);

const SmallMovieCard = (props) => {
  const {film, handleMouseLeave, handleMouseEnter, isActive} = props;

  const {
    name,
    preview,
    trailer
  } = film;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link className="small-movie-card__image" to="/films/2">
        <WithPreviewPlayerWrapped preview={preview} trailer={trailer} />
      </Link>
      {!isActive &&
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to="/films/2">{name}</Link>
      </h3>
      }
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    trailer: PropTypes.string.isRequired,
  }).isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default SmallMovieCard;
