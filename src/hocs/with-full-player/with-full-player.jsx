import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import {getVideoProgressPosition} from "../../utils";

const withFullPlayer = (Component) => {
  class WithFullPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.videoRef = createRef();

      this.state = {
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
      const {films} = this.props;
      const {preview_video_link} = films;
      const video = this.videoRef.current;

      video.src = preview_video_link;

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
      const {films, onExitButtonClick} = this.props;
      const {preview, name} = films[0];
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
            className="player__video"
            poster={preview}
            loop={false}
            onTimeUpdate={this.handleTimeUpdate}
            onEnded={this.handleVideoEnd}
          />
        </Component>
      );
    }
  }

  WithFullPlayer.propTypes = {
    films: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired,
      preview_video_link: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    onExitButtonClick: PropTypes.func.isRequired,
  };

  return WithFullPlayer;
};

export default withFullPlayer;
