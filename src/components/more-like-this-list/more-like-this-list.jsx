import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import withPreviewCard from "../../hocs/with-preview-card/with-preview-card";

const PreviewCard = withPreviewCard(SmallMovieCard);

const MoreLikeThisList = (props) => {
  const {films} = props;
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <PreviewCard key={i} film={film} />
        ))}
      </div>
    </section>
  );
};

MoreLikeThisList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MoreLikeThisList;
