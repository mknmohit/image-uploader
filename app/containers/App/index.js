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

import GlobalStyle from 'theme/globalStyles';
import Router from '../../../router';
import { makeSelectPreviewURL, makeSelectCropData } from './selectors';

export function App({ previewURL, cropData }) {
  return (
    <div>
      <Router previewURL={previewURL} cropData={cropData} />
      <GlobalStyle />
    </div>
  );
}

App.propTypes = {
  previewURL: PropTypes.string,
  cropData: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  previewURL: makeSelectPreviewURL(),
  cropData: makeSelectCropData(),
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
