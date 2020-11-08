import React, {PureComponent, Fragment} from "react";

const withCommentForm = (Component) => {
  class WithCommentForm extends PureComponent {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.addRating = this.addRating.bind(this);
      this.state = {
        rating: `3`
      };
    }

    handleSubmit(evt) {
      evt.preventDefault();
    }

    handleChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    addRating(rating) {
      const allStars = 5;
      const items = [];

      for (let i = 1; i <= allStars; i++) {
        items.push(
            <Fragment key={`rating-item-${i}`}>
              <input className="rating__input" id={`star-${i}`} type="radio" name="rating" value={i} defaultChecked={i === parseInt(rating, 10) ? `checked` : !`checked`} onChange={this.handleChange}/>
              <label className="rating__label" htmlFor={`star-${i}`}>Rating {i}</label>
            </Fragment>
        );
      }
      return items;
    }

    render() {
      const {rating} = this.state;

      return (
        <Component {...this.props}
          rating={rating}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          addRating={this.addRating}
        />
      );
    }
  }

  return WithCommentForm;
};

export default withCommentForm;
