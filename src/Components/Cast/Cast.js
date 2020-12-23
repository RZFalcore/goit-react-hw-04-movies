import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import CastMember from "../CastMember/CastMember";
import { getMovieCredits } from "../../Services/API";

class Cast extends Component {
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
              <CastMember info={castMember} />
            </li>
          ))}
      </ul>
    );
  }
}

export default withRouter(Cast);
