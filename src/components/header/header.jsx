import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {AuthorizationStatus, AppRoute} from "../../const";
import {getAuthorizationStatus} from "../../selectors";

const Header = (props) => {
  const {header, login} = props;
  const {title, avatar, customClass} = header;

  return (
    <header className={`page-header  ${customClass}`}>
      <div className="logo">
        <Link to={AppRoute.ROOT} className="logo__link">
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
          {
            (() => {
              if (login === AuthorizationStatus.AUTH) {
                return (
                  <div className="user-block__avatar">
                    <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
                  </div>
                );
              } else {
                return (
                  <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
                );
              }
            })()
          }
        </div>
      }
    </header>
  );
};

Header.propTypes = {
  login: PropTypes.string.isRequired,
  header: PropTypes.shape({
    title: PropTypes.string,
    avatar: PropTypes.bool,
    customClass: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  login: getAuthorizationStatus(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
