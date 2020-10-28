import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";

const MoreLikeThisList = (props) => {
  const {films} = props;
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <SmallMovieCard key={i} film={film} />
        ))}
      </div>
    </section>
  );
};

MoreLikeThisList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MoreLikeThisList;
