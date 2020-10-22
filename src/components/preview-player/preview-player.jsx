import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";

class PreviewPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    };
    this.videoRef = createRef();
    this.timeCount = 0;
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
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

  render() {
    const {trailer, preview} = this.props;
    const {isPlaying} = this.state;

    return (
      <video
        ref={this.videoRef}
        className="small-movie-card__preview-video"
        src={trailer}
        width={280}
        height={175}
        autoPlay={false}
        muted={true}
        poster={preview}
        loop={true}
        controls={isPlaying}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      />
    );
  }
}

PreviewPlayer.propTypes = {
  trailer: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};

export default PreviewPlayer;
