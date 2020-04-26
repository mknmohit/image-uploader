/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import HomePage from 'containers/HomePage';
import Preview from 'components/Preview';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import {
  makeSelectPreviewURL,
} from './selectors';

import GlobalStyle from 'theme/globalStyles';

export function App({
  previewURL,
}) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/preview" component={Preview} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

App.propTypes = {
  previewURL: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  previewURL: makeSelectPreviewURL(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);