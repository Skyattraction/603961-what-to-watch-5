import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import {getVideoProgressPosition} from "../../utils";

const withFullPlayer = (Component) => {
  class WithFullPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.videoRef = createRef();

      this.state = {
        films: [],
        isPlaying: false,
        remainingTime: 0,
        timePosition: 0,
      };

      this.handleClickPlay = this.handleClickPlay.bind(this);
      this.handleClickPause = this.handleClickPause.bind(this);
      this.handleClickFullScreen = this.handleClickFullScreen.bind(this);
      this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
      this.handleVideoEnd = this.handleVideoEnd.bind(this);
    }

    handleClickPlay() {
      this.setState({
        isPlaying: true
      });
    }

    handleClickPause() {
      this.setState({
        isPlaying: false
      });
    }

    handleClickFullScreen() {
      const video = this.videoRef.current;
      video.requestFullscreen();
    }

    handleTimeUpdate() {
      const video = this.videoRef.current;
      this.setState({
        remainingTime: video.duration - video.currentTime,
      });

      this.setState({
        timePosition: getVideoProgressPosition(video),
      });
    }

    handleVideoEnd() {
      const video = this.videoRef.current;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then((_) => {
          this.setState({
            isPlaying: false,
          });
          video.load();
        })
        .catch((_error) => {
          return;
        });
      }
    }

    componentDidMount() {
      const video = this.videoRef.current;

      this.setState({
        remainingTime: video.currentTime,
        timePosition: getVideoProgressPosition(video),
      });

      if (this.state.isPlaying) {
        video.play();
      }
    }

    componentDidUpdate() {
      const video = this.videoRef.current;
      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    render() {
      const {films, id, onExitButtonClick} = this.props;
      const {backgroundImage, name, videoLink} = films[id] || {};
      const {isPlaying, remainingTime, timePosition} = this.state;

      return (
        <Component
          {...this.props}
          name={name}
          isPlaying={isPlaying}
          remainingTime={remainingTime}
          timePosition={timePosition}
          onExitButtonClick={onExitButtonClick}
          handleClickPlay={this.handleClickPlay}
          handleClickPause={this.handleClickPause}
          handleClickFullScreen={this.handleClickFullScreen}
        >
          <video
            ref={this.videoRef}
            src={videoLink}
            className="player__video"
            poster={backgroundImage}
            loop={false}
            onTimeUpdate={this.handleTimeUpdate}
            onEnded={this.handleVideoEnd}
          />
        </Component>
      );
    }
  }

  WithFullPlayer.propTypes = {
    id: PropTypes.string.isRequired,
    films: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      videoLink: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    onExitButtonClick: PropTypes.func.isRequired,
  };

  return WithFullPlayer;
};

export default withFullPlayer;
