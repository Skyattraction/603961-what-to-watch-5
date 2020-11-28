import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import AddNewCommentForm from "../add-new-comment-form/add-new-comment-form";
import withCommentForm from "../../hocs/with-comment-form/with-comment-form";

const AddNewCommentFormWrapped = withCommentForm(AddNewCommentForm);

const AddReviewPage = (props) => {
  const {films, id} = props;
  const {name, backgroundImage, posterImage} = films[id] || {};
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <AddNewCommentFormWrapped />
    </section>
  );
};

AddReviewPage.propTypes = {
  id: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired,
};

export default AddReviewPage;
