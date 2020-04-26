/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Router from '../../../router';
import {
  makeSelectPreviewURL,
} from './selectors';

import GlobalStyle from 'theme/globalStyles';

export function App({
  previewURL,
}) {
  return (
    <div>
      <Router previewURL={previewURL} />
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