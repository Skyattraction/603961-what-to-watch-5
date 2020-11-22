import React from "react";
import PropTypes from "prop-types";

const PreviewPlayer = (props) => {
  const {previewVideoLink, previewImage, videoRef, handleMouseEnter, handleMouseLeave, isPlaying} = props;

  return (
    <video
      ref={videoRef}
      className="small-movie-card__preview-video"
      src={previewVideoLink}
      width={280}
      height={175}
      autoPlay={false}
      muted={true}
      poster={previewImage}
      loop={true}
      controls={isPlaying}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

PreviewPlayer.propTypes = {
  previewVideoLink: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  videoRef: PropTypes.shape().isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default PreviewPlayer;
