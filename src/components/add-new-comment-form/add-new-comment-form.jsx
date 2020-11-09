import React from "react";
import PropTypes from 'prop-types';

const AddNewCommentForm = (props) => {
  const {handleChange, handleSubmit, addRating, rating} = props;

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {addRating(rating)}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={handleChange}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

AddNewCommentForm.propTypes = {
  rating: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  addRating: PropTypes.func.isRequired,
};

export default AddNewCommentForm;
