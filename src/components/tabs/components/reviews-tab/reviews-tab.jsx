import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchReviewList} from "../../../../store/api-actions";

class ReviewsTab extends PureComponent {

  componentDidMount() {
    const {getReviews, id} = this.props;
    getReviews(id);
  }
  render() {
    const {reviews} = this.props;
    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {reviews.map(({id, user, rating, comment, date}) => (
            <div key={`${id}`} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{comment}</p>
                <footer className="review__details">
                  <cite className="review__author">{user.name}</cite>
                  <time className="review__date" dateTime="2016-12-24">{date}</time>
                </footer>
              </blockquote>
              <div className="review__rating">{rating}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ReviewsTab.propTypes = {
  id: PropTypes.number.isRequired,
  getReviews: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({subProp: PropTypes.string}).isRequired,
    comment: PropTypes.string,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number,
  }))
};

const mapStateToProps = ({DATA}) => ({
  reviews: DATA.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  getReviews(id) {
    dispatch(fetchReviewList(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsTab);
