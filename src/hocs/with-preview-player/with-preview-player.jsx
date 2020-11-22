import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";

const withPreviewPlayer = (Component) => {
  class WithPreviewPlayer extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isPlaying: false
      };
      this.videoRef = createRef();
      this.timeCount = 0;
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.startPlay = this.startPlay.bind(this);
    }

    handleMouseEnter() {
      this.timeCount = setTimeout(() => this.startPlay(), 1000);
    }

    handleMouseLeave() {
      const video = this.videoRef.current;
      this.setState({isPlaying: false});
      video.pause();
      video.load();
      clearTimeout(this.timeCount);
    }

    startPlay() {
      this.setState({isPlaying: true});
      const video = this.videoRef.current;
      video.play();
    }

    componentWillUnmount() {
      clearTimeout(this.timeCount);
    }

    render() {
      const {previewVideoLink, previewImage} = this.props;
      const {isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          videoRef={this.videoRef}
          previewVideoLink={previewVideoLink}
          previewImage={previewImage}
          isPlaying={isPlaying}
          handleMouseEnter={this.handleMouseEnter}
          handleMouseLeave={this.handleMouseLeave}
        />
      );
    }
  }

  WithPreviewPlayer.propTypes = {
    previewVideoLink: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
  };

  return WithPreviewPlayer;
};

export default withPreviewPlayer;
