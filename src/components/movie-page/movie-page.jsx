import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Footer from "../footer/footer";
import PlayButton from "../play-button/play-button";
import MyListButton from "../my-list-button/my-list-button";
import Tabs from "../tabs/tabs";
import MoreLikeThisList from "../more-like-this-list/more-like-this-list";
import Header from "../header/header";

const MoviePage = (props) => {

  const {films, reviews, header, history} = props;
  const {name, genre, year, preview, poster} = films[0];
  const genreFilter = films.filter((film) => film.genre === genre);
  return (
    <Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={preview} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header header={header} />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <PlayButton history={history} />
                <MyListButton history={history} />
                <Link to="/films/:id/review" className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={`${name} poster`} width="218" height="327" />
            </div>


            <Tabs films={films} reviews={reviews} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <MoreLikeThisList films={genreFilter} />
        <Footer />
      </div>
    </Fragment>
  );
};

MoviePage.propTypes = {
  films: PropTypes.array.isRequired,
  reviews: PropTypes.array,
  header: PropTypes.shape(),
  history: PropTypes.shape().isRequired,
};

export default MoviePage;
