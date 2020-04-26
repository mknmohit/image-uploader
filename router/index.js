import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomePage from 'containers/HomePage';
import Preview from 'components/Preview';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

/* eslint-disable react/jsx-no-bind */
function Router({ previewURL }) {
  /* routeProps are passed by react-router-dom, routeProps includes {match: {…}, location: {…}, history: {…}, staticContext: undefined} */
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={routeProps => <HomePage {...routeProps} />}
      />
      <Route
        exact
        path="/preview"
        render={routeProps => (
          <Preview {...routeProps} previewURL={previewURL} />
        )}
      />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

Router.propTypes = {
  previewURL: PropTypes.string,
};

export default Router;
