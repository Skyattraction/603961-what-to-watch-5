import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import FilmsList from "../films-list/films-list";
import Footer from "../footer/footer";

const MyListPage = (props) => {

  const {films, header} = props;

  return (
    <div className="user-page">
      <Header header={header} />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films}/>
      </section>

      <Footer />
    </div>
  );
};

MyListPage.propTypes = {
  films: PropTypes.array.isRequired,
  header: PropTypes.shape(),
};

export default MyListPage;
