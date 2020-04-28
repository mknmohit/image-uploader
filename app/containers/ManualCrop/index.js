/**
 *
 * ManualCrop
 *
 */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { isEmpty, find, map } from 'lodash';
import { NavLink } from 'react-router-dom';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import { updateCropData } from 'containers/App/actions';
import createCroppedImage from 'utils/createCroppedImage';
import PreviewError from 'components/PreviewError';
import Styled from './style';

export function ManualCrop({ previewURL, cropData, match, onUpdateCropData }) {
  const [imgRef, setImgRef] = useState(null);
  const [cropInfo, setCropInfo] = useState(null);
  const [croppedUrl, setCroppedUrl] = useState();

  const onImageLoaded = useCallback(img => {
    const {
      params: { id },
    } = match;
    const reqCropData = find(cropData, { id });
    const { width, height, coordinateX: x, coordinateY: y } = reqCropData;

    setImgRef(img);
    setCropInfo({
      unit: 'px',
      width,
      height,
      x,
      y,
    });
    return false;
  }, []);

  const onCropChange = crop => setCropInfo(crop);

  const onCropComplete = async crop => {
    if (imgRef && crop.width && crop.height) {
      createCroppedImage(imgRef, crop, 'newFile.jpg').then(url =>
        setCroppedUrl(url),
      );
    }
  };

  const handleSavePreview = () => {
    const {
      params: { id },
    } = match;
    const { width, height, x, y } = cropInfo;
    const updatedData = map(cropData, item => {
      const { id: imgId } = item;
      if (id === imgId) {
        return {
          id,
          width,
          height,
          coordinateX: x,
          coordinateY: y,
        };
      }
      return item;
    });
    onUpdateCropData(updatedData);
  };

  if (!isEmpty(previewURL)) {
    const {
      params: { id },
    } = match;
    const reqCropData = find(cropData, { id });
    const { width, height, coordinateX: x, coordinateY: y } = reqCropData;

    return (
      <Styled.Root>
        <ReactCrop
          src={previewURL}
          crop={cropInfo}
          minWidth={width}
          maxWidth={width}
          minHeight={height}
          maxHeight={height}
          ruleOfThirds
          onImageLoaded={onImageLoaded}
          onChange={onCropChange}
          onComplete={onCropComplete}
        />
        {croppedUrl && (
          <Styled.Container>
            <Styled.Card>
              <a href={croppedUrl} target="_blank">
                <img src={croppedUrl} alt={`${width}x${height}`} />
              </a>
              <Styled.CardContent>
                <Styled.ImgInfo>
                  Cropped Image: {width} x {height}
                </Styled.ImgInfo>
                <Styled.SaveBtn to="/preview" onClick={handleSavePreview}>
                  Done
                </Styled.SaveBtn>
              </Styled.CardContent>
            </Styled.Card>
          </Styled.Container>
        )}
      </Styled.Root>
    );
  }
  return <PreviewError />
}

ManualCrop.propTypes = {
  previewURL: PropTypes.string,
  cropData: PropTypes.array,
  match: PropTypes.object,
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

export default compose(withConnect)(ManualCrop);
