import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Review from "../Review/Review";

import { getMovieReviews } from "../../Services/API";

class Reviews extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  state = { reviews: [] };

  componentDidMount() {
    const { id } = this.props.match.params;
    getMovieReviews(id)
      .then((data) => this.setState({ reviews: data.results }))
      .catch(console.log);
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id}>
              <Review {...review} />
            </li>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </ul>
    );
  }
}

export default withRouter(Reviews);
