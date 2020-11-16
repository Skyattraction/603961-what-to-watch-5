import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withPreviewCard = (Component) => {
  class WithPreviewCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false
      };

      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
      this.setState({isActive: true});
    }

    handleMouseLeave() {
      this.setState({isActive: false});
    }

    render() {
      const {film} = this.props;

      const {isActive} = this.state;

      return (
        <Component
          film={film}
          isActive={isActive}
          handleMouseEnter={this.handleMouseEnter}
          handleMouseLeave={this.handleMouseLeave}
        />
      );
    }
  }

  WithPreviewCard.propTypes = {
    film: PropTypes.shape({
      name: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired,
      preview_video_link: PropTypes.string.isRequired,
    }).isRequired,
  };

  return WithPreviewCard;
};

export default withPreviewCard;
