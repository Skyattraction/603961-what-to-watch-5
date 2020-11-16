import React, {Fragment} from "react";
import PropTypes from "prop-types";


const OverviewTab = (props) => {

  const {films} = props;
  const {director, starring, description, averagescore, quality, ratestotal} = films;

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{averagescore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{quality}</span>
          <span className="movie-rating__count">{ratestotal} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
      </div>
    </Fragment>
  );
};

OverviewTab.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    averagescore: PropTypes.string.isRequired,
    quality: PropTypes.string.isRequired,
    ratestotal: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default OverviewTab;
