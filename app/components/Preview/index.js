/**
 *
 * Preview
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import { isEmpty } from 'lodash';
import Styled from './style';


function Preview({ previewURL }) {

  if(!isEmpty(previewURL)) {
    return <img src={previewURL} />
  }
  return (
    <Styled.NoPreview>
      <Styled.NoPreviewMsg>
        Please choose/upload the image first. <NavLink to="/">Click Here</NavLink>
      </Styled.NoPreviewMsg>
    </Styled.NoPreview>
  );
}

Preview.propTypes = {
  previewURL: PropTypes.string,
};

export default Preview;
