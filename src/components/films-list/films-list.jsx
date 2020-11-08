import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import withPreviewCard from "../../hocs/with-preview-card/with-preview-card";

const PreviewCard = withPreviewCard(SmallMovieCard);

const FilmsList = (props) => {
  const {films} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => (
        <PreviewCard key={i} film={film} />
      ))}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmsList;
