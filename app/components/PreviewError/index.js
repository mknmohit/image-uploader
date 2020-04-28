/**
 *
 * PreviewError
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import Styled from './style';

function PreviewError() {
  return (
    <Styled.NoPreview>
      <Styled.NoPreviewMsg>
        Please choose/upload the image first.{' '}
        <NavLink to="/">Click Here</NavLink>
      </Styled.NoPreviewMsg>
    </Styled.NoPreview>
  );
}

export default PreviewError;
