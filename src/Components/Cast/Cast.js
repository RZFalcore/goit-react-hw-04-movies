import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import CastMember from "../CastMember/CastMember";

import { getMovieCredits } from "../../Services/API";
class Cast extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  state = { cast: null };

  componentDidMount() {
    const { id } = this.props.match.params;
    getMovieCredits(id)
      .then((data) => this.setState({ cast: data.cast }))
      .catch(console.log);
  }

  render() {
    const { cast } = this.state;

    return (
      <ul>
        {cast &&
          cast.map((castMember) => (
            <li key={castMember.id}>
              <CastMember {...castMember} />
            </li>
          ))}
      </ul>
    );
  }
}

export default withRouter(Cast);
