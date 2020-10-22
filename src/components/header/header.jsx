import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Header = (props) => {
  const {header} = props;
  const {title, avatar} = header;
  return (
    <header className="page-header user-page__head">
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {title &&
        <h1 className="page-title user-page__title">{title}</h1>
      }

      {avatar &&
        <div className="user-block">
          <div className="user-block__avatar">
            <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      }
    </header>
  );
};

Header.propTypes = {
  header: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    avatar: PropTypes.bool,
  })),
};

export default Header;
