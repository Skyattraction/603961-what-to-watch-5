import React from "react";
import PropTypes from "prop-types";


const ReviewsTab = (props) => {

  const {reviews} = props;

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.map((review, i) => (
          <div key={`${i}-${review.id}`} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{review.text}</p>

              <footer className="review__details">
                <cite className="review__author">{review.author}</cite>
                <time className="review__date" dateTime="2016-12-24">{review.date}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{review.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

ReviewsTab.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    rating: PropTypes.string,
  }))
};

export default ReviewsTab;
