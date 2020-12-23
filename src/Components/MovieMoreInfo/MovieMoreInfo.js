import React from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";

import { Cast, Reviews } from "../../Pages/lazyPages";

const MovieMoreInfo = ({ match }) => {
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
          <Cast />
        </Route>
        <Route path={`${path}/reviews`}>
            <Reviews />
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(MovieMoreInfo);