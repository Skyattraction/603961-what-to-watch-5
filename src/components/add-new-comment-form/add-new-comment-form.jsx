import React, {PureComponent, Fragment} from "react";

class AddNewCommentForm extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

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
            <input className="rating__input" id={`star-${i}`} type="radio" name="rating" value={i} defaultChecked={i === parseInt(rating, 10) ? `checked` : !`checked`} onChange={this.handleFieldChange}/>
            <label className="rating__label" htmlFor={`star-${i}`}>Rating {i}</label>
          </Fragment>
      );
    }
    return items;
  }

  render() {
    const {rating} = this.state;

    return (
      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={this.handleSubmit}>
          <div className="rating">
            <div className="rating__stars">
              {this.addRating(rating)}
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={this.handleChange}></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddNewCommentForm;
