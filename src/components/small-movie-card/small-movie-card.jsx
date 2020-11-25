import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import Player from "../preview-player/preview-player";
import withPreview from "../../hocs/with-preview-player/with-preview-player";

const WithPreviewPlayerWrapped = withPreview(Player);

const SmallMovieCard = (props) => {
  const {film, handleMouseLeave, handleMouseEnter, isActive} = props;

  const {
    id,
    name,
    previewImage,
    previewVideoLink
  } = film;

  const currentId = id - 1;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link className="small-movie-card__image" to={`/films/${currentId}`}>
        <WithPreviewPlayerWrapped previewImage={previewImage} previewVideoLink={previewVideoLink} />
      </Link>
      {!isActive &&
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${currentId}`}>{name}</Link>
      </h3>
      }
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  }).isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default SmallMovieCard;
