import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import DetailsTab from "./components/details-tab/details-tab";
import OverviewTab from "./components/overview-tab/overview-tab";
import ReviewsTab from "./components/reviews-tab/reviews-tab";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOverviewTabActive: true,
      isDetailsTabActive: false,
      isReviewsTabActive: false
    };

    this.handleClickOverview = this.handleClickOverview.bind(this);
    this.handleClickDetails = this.handleClickDetails.bind(this);
    this.handleClickReviews = this.handleClickReviews.bind(this);
  }

  handleClickOverview(evt) {
    evt.preventDefault();
    this.setState({
      isOverviewTabActive: true,
      isDetailsTabActive: false,
      isReviewsTabActive: false
    });
  }

  handleClickDetails(evt) {
    evt.preventDefault();
    this.setState({
      isOverviewTabActive: false,
      isDetailsTabActive: true,
      isReviewsTabActive: false
    });
  }

  handleClickReviews(evt) {
    evt.preventDefault();
    this.setState({
      isOverviewTabActive: false,
      isDetailsTabActive: false,
      isReviewsTabActive: true
    });
  }

  render() {
    const {films, reviews} = this.props;
    const {reviewdata} = reviews[0];
    const {isOverviewTabActive, isDetailsTabActive, isReviewsTabActive} = this.state;
    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className={`movie-nav__item  ${isOverviewTabActive ? `movie-nav__item--active` : ``}`}>
              <a onClick={this.handleClickOverview} href="#" className="movie-nav__link">Overview</a>
            </li>
            <li className={`movie-nav__item  ${isDetailsTabActive ? `movie-nav__item--active` : ``}`}>
              <a onClick={this.handleClickDetails} href="#" className="movie-nav__link">Details</a>
            </li>
            <li className={`movie-nav__item  ${isReviewsTabActive ? `movie-nav__item--active` : ``}`}>
              <a onClick={this.handleClickReviews} href="#" className="movie-nav__link">Reviews</a>
            </li>
          </ul>
        </nav>
        {isOverviewTabActive &&
          <OverviewTab films={films} />
        }

        {isDetailsTabActive &&
          <DetailsTab films={films} />
        }

        {isReviewsTabActive &&
          <ReviewsTab reviews={reviewdata} />
        }
      </div>
    );
  }
}

Tabs.propTypes = {
  films: PropTypes.array.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    reviewdata: PropTypes.array,
  })),
};

export default Tabs;
