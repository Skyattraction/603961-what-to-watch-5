import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: 0
      };

      this.onClick = this.onClick.bind(this);
    }

    onClick(item) {
      this.setState({activeItem: item});
    }

    render() {
      const {activeItem} = this.state;

      return (
        <Component
          {...this.props}
          activeItem={activeItem}
          onClick={this.onClick}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
