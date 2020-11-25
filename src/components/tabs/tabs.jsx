import React from "react";
import PropTypes from "prop-types";
import DetailsTab from "./components/details-tab/details-tab";
import OverviewTab from "./components/overview-tab/overview-tab";
import ReviewsTab from "./components/reviews-tab/reviews-tab";
import {NavLink} from "react-router-dom";

const Tabs = (props) => {
  const {
    id,
    films,
    reviews,
    activeItem,
    onClick
  } = props;

  const tabs = [{id: 0, name: `Overview`}, {id: 1, name: `Details`}, {id: 2, name: `Reviews`}];

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs.map((tab, item) => (
            <li
              className={`movie-nav__item ${tab.id === activeItem ? `movie-nav__item--active` : ``}`}
              key={tab.id}
            >
              <NavLink
                to="/"
                className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  evt.stopPropagation();
                  onClick(item);
                }}
              >
                {tab.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {activeItem === 0 &&
        <OverviewTab films={films} id={id} />
      }

      {activeItem === 1 &&
        <DetailsTab films={films} id={id} />
      }

      {activeItem === 2 &&
        <ReviewsTab reviews={reviews} id={id} />
      }
    </div>
  );
};

Tabs.propTypes = {
  id: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    reviewdata: PropTypes.array,
  })),
  onClick: PropTypes.func.isRequired,
  activeItem: PropTypes.number.isRequired,
};

export default Tabs;
