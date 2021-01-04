import React from "react";
import PropTypes from "prop-types";

const Review = ({ author, content }) => (
  <>
    <h4>{author}</h4>
    <p>{content}</p>
  </>
);

Review.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Review;
