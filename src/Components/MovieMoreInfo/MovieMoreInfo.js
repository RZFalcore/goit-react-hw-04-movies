import React from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { Cast } from "../../Pages/lazyPages";

const MovieMoreInfo = ({ credits, match }) => {
  const { url, path } = match;

  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`${url}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/cast`}>
          <Cast cast={credits} />
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(MovieMoreInfo);
