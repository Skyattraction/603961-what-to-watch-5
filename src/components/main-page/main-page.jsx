import React from "react";
import PropTypes from "prop-types";
import FilmsList from "../films-list/films-list";
import PlayButton from "../play-button/play-button";
import MyListButton from "../my-list-button/my-list-button";
import Footer from "../footer/footer";
import Header from "../header/header";
import GenresList from "../genres-list/genres-list";
import ShowMoreButton from "../show-more-button/show-more-button";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import withGenresList from "../../hocs/with-genres-list/with-genres-list";

const GenresListWrapped = withActiveItem(withGenresList(GenresList));

const MainPage = (props) => {
  const {films, genres, promoFilm, header, history, onGenreClickAction, activeGenre, loadedFilmsNumber, onShowMoreClickAction} = props;
  const {name, genre, released, previewImage, posterImage} = promoFilm[0] || {};

  return (
    <div className="main-page">
      <div className="visually-hidden">
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="add" viewBox="0 0 19 20">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="+" fill="#EEE5B5" points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859" />
            </g>
          </symbol>
          <symbol id="full-screen" viewBox="0 0 27 27">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z" fill="#FFF9D9" fillOpacity="0.7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z" fill="#FFF9D9" fillOpacity="0.7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9" fillOpacity="0.7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9" fillOpacity="0.7" />
          </symbol><symbol id="in-list" viewBox="0 0 18 14">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5" />
          </symbol>
          <symbol id="pause" viewBox="0 0 14 21">
            <symbol id="play-s" viewBox="0 0 19 19"> <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5" /> </symbol>
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21" />
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21" />
            </g>
          </symbol>
        </svg>
      </div>

      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={previewImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header header={header} />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <PlayButton history={history} promoFilm={promoFilm} />
                <MyListButton history={history} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresListWrapped
            films={films}
            genres={genres}
            activeGenre={activeGenre}
            onGenreClickAction={onGenreClickAction} />
          <FilmsList films={films.slice(0, loadedFilmsNumber)} />
          {films.length > loadedFilmsNumber &&
            <ShowMoreButton films={films} loadedFilmsNumber={loadedFilmsNumber} onShowMoreClickAction={onShowMoreClickAction} />
          }
        </section>

        <Footer />
      </div>
    </div>
  );
};

MainPage.propTypes = {
  films: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  promoFilm: PropTypes.oneOfType(
      PropTypes.arrayOf(PropTypes.shape({subProp: PropTypes.string})),
      PropTypes.shape({subProp: PropTypes.string})),
  header: PropTypes.shape(),
  history: PropTypes.shape().isRequired,
  onGenreClickAction: PropTypes.func.isRequired,
  onShowMoreClickAction: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  loadedFilmsNumber: PropTypes.number.isRequired,
};


export default MainPage;
