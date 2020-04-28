/**
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import InsertMedia from 'components/InsertMedia';
import { previewURL } from 'containers/App/actions';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function HomePage({ onPreviewURL }) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  function handlePreviewUrl(imageURL) {
    console.log('imageURL', imageURL);
    onPreviewURL(imageURL);
  }

  return <InsertMedia handlePreviewUrl={handlePreviewUrl} />;
}

HomePage.propTypes = {
  onPreviewURL: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onPreviewURL: params => dispatch(previewURL(params)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
