import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {getQuality} from "../../../../utils";

const OverviewTab = (props) => {

  const {id, films} = props;
  const {director, starring, description, rating, scoresCount} = films[id] || {};
  const quality = getQuality(rating);
  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{quality}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring:
          {starring &&
              starring.map((actor, i) => {
                if (i < starring.length - 1) {
                  return <Fragment key={`${actor}-${id}`}>{actor}, <br /></Fragment>;
                } else {
                  return actor;
                }
              })
          }
        </strong></p>
      </div>
    </Fragment>
  );
};

OverviewTab.propTypes = {
  id: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default OverviewTab;
