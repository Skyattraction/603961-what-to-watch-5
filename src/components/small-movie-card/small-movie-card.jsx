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
    preview_video_link
  } = film;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link className="small-movie-card__image" to="/films/:id">
        <WithPreviewPlayerWrapped preview={preview} preview_video_link={preview_video_link} />
      </Link>
      {!isActive &&
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to="/films/:id">{name}</Link>
      </h3>
      }
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    preview_video_link: PropTypes.string.isRequired,
  }).isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default SmallMovieCard;
