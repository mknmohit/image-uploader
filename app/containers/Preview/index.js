/**
 *
 * Preview
 *
 */

import React, { memo, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { NavLink } from 'react-router-dom';
import { isEmpty, map } from 'lodash';

import { OriginalImgSize, CroppedImgSize } from 'containers/App/constants';
import { updateCropData } from 'containers/App/actions'
import createCroppedImage from 'utils/createCroppedImage';
import Styled from './style';
import CroppedPreview from 'components/CroppedPreview';

export function Preview({ previewURL, cropData, onUpdateCropData }) {

  useEffect(() => {
    const imgInfo = map(CroppedImgSize, item => {
      const { width, height } = item

      return {
        id: width+'x'+height,
        width,
        height,
        coordinateX: ( origWidth - width ) / 2, 
        coordinateY: ( origHeight - height ) / 2
      }
    })
    onUpdateCropData(imgInfo)
  }, []);

  const {
    width: origWidth,
    height: origHeight
  } = OriginalImgSize

  const getImageElement = () => {
    const img = new Image()
    img.src = previewURL
    return img
  }

  const getCoordinateX = () => {

  }

  const renderCroppedPreview = () => (
    map(cropData, item => {
      const { id, width, height, coordinateX, coordinateY } = item
      return (
        <CroppedPreview
          key={id}
          image={getImageElement()}
          width={width}
          height={height}
          coordinateX={coordinateX}
          coordinateY={coordinateY}
        />
      )
    })
  )

  if(!isEmpty(previewURL)) {
    return (
      <div>
        <Styled.Root>
          <Styled.Card>
            <a href={previewURL} target="_blank">
              <img src={previewURL} alt={origWidth+'x'+origHeight} />
            </a>
            
            <Styled.CardContent>
              <Styled.ImgInfo>
                Original Image: {origWidth} x {origHeight}
              </Styled.ImgInfo>
              <Styled.RemoveBtn to="/">
                Change
              </Styled.RemoveBtn>
            </Styled.CardContent>
          </Styled.Card>
          {renderCroppedPreview()}
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
  cropData: PropTypes.array,
  onUpdateCropData: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    onUpdateCropData: params => dispatch(updateCropData(params)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Preview);
