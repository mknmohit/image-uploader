/**
 *
 * Preview
 *
 */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { NavLink } from 'react-router-dom';
import { isEmpty } from 'lodash';

import Styled from './style';

function Preview({ previewURL }) {

  const [imgRef, setImgRef] = useState(null);
  const [cropInfo, setCropInfo] = useState({
    unit: 'px',
    width: 755,
    height: 450,
  });
  const [croppedUrl, setCroppedUrl] = useState();

  const onImageLoaded = useCallback(img => {
    setImgRef(img);
  }, []);

  const onCropChange = crop => setCropInfo(crop);

  const onCropComplete = async crop => {
    if (imgRef && crop.width && crop.height) {
      createCropPreview(imgRef, crop, 'newFile.jpeg');
    }
  };

  const createCropPreview = async (image, crop, fileName) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          reject(new Error('Canvas is empty'));
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(croppedUrl);
        setCroppedUrl(window.URL.createObjectURL(blob));
      }, 'image/jpeg');
    });
  };

  if(!isEmpty(previewURL)) {
    return (
      <div>
        <Styled.Root>
          <Styled.Card>
            {/* <a href={previewURL} target="_blank">
              <Styled.OriginalImg src={previewURL} />
            </a> */}

            <ReactCrop
              src={previewURL}
              crop={cropInfo}
              minWidth={755}
              maxWidth={755}
              minHeight={450}
              maxHeight={450}
              ruleOfThirds
              onImageLoaded={onImageLoaded}
              onChange={onCropChange}
              onComplete={onCropComplete}
            />
            
            <Styled.CardContent>
              <Styled.ImgInfo>
                Original Image: 1024 x 1024
              </Styled.ImgInfo>
              <Styled.RemoveBtn to="/">
                Change
              </Styled.RemoveBtn>
            </Styled.CardContent>
          </Styled.Card>
          {croppedUrl && <img alt="Crop preview" src={croppedUrl} />}
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
