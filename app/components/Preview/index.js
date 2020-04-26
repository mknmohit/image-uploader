/**
 *
 * Preview
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { isEmpty } from 'lodash';
import Styled from './style';


function Preview({ previewURL }) {

  if(!isEmpty(previewURL)) {
    return (
      <div>
        <Styled.Root>
          <Styled.Card>
            <a href={previewURL} target="_blank">
              <Styled.OriginalImg src={previewURL} />
            </a>
            <Styled.CardContent>
              <Styled.ImgInfo>
                Original Image: 1024 x 1024
              </Styled.ImgInfo>
              <Styled.RemoveBtn to="/">
                Change
              </Styled.RemoveBtn>
            </Styled.CardContent>
          </Styled.Card>
        </Styled.Root>
      </div>
    )

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
