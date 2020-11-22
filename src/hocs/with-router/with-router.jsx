import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withRouter = (Component) => {
  class WithRouter extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        id: this.props.match.params.id,
        films: this.props.films,
      };
    }

    render() {
      const {id} = this.state;
      return (
        <Component {...this.props} id={id}/>
      );
    }
  }

  WithRouter.propTypes = {
    films: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  return WithRouter;

};

export default withRouter;
