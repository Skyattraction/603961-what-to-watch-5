import React, {Fragment} from "react";
import PropTypes from "prop-types";


const DetailsTab = (props) => {

  const {id, films} = props;
  const {director, starring, runTime, genre, released} = films[id] || {};

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starring &&
              starring.map((actor, i) => {
                if (i < starring.length - 1) {
                  return <Fragment key={`${actor}-${id}`}>{actor}, <br /></Fragment>;
                } else {
                  return actor;
                }
              })
            }
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{runTime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

DetailsTab.propTypes = {
  id: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default DetailsTab;
