import React from "react";
import PropTypes from "prop-types";
import {getVideoTimePosition} from "../../utils";


const PlayerPage = (props) => {

  const {
    name,
    isPlaying,
    timePosition,
    remainingTime,
    onExitButtonClick,
    handleClickPlay,
    handleClickPause,
    handleClickFullScreen,
    children
  } = props;

  return (
    <div className="player">
      {children}

      <button type="button" className="player__exit" onClick={onExitButtonClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={`${timePosition}`} max="100"></progress>
            <div className="player__toggler" style={{left: `${timePosition}%`}}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{getVideoTimePosition(remainingTime)}</div>
        </div>

        <div className="player__controls-row">
          {isPlaying
            ? <button type="button" className="player__play" onClick={handleClickPause}>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
            : <button type="button" className="player__play" onClick={handleClickPlay}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
          }

          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen" onClick={handleClickFullScreen}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

PlayerPage.propTypes = {
  name: PropTypes.string.isRequired,
  timePosition: PropTypes.number.isRequired,
  remainingTime: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
  handleClickPlay: PropTypes.func.isRequired,
  handleClickPause: PropTypes.func.isRequired,
  handleClickFullScreen: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default PlayerPage;
