/**
 *
 * CroppedPreview
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import createCroppedImage from 'utils/createCroppedImage';
import Styled from './style';

function CroppedPreview({
  image,
  width,
  height,
  coordinateX,
  coordinateY,
}) {

  const [croppedUrl, setCroppedUrl] = useState(null);

  useEffect(() => {
    const cropInfo = {
      width,
      height,
      x: coordinateX,
      y: coordinateY
    }
    createCroppedImage(image, cropInfo, 'newFile.jpeg').then(url => setCroppedUrl(url))
  }, []);

  return (
    <Styled.Card>
      <a href={croppedUrl} target="_blank">
        <img src={croppedUrl} alt={width+'x'+height} />
      </a>
      <Styled.CardContent>
        <Styled.ImgInfo>
          Cropped Image: {width} x {height}
        </Styled.ImgInfo>
        <Styled.RemoveBtn href="/">
          Crop Manually
        </Styled.RemoveBtn>
    </Styled.CardContent>
    </Styled.Card>
  );
}

CroppedPreview.propTypes = {
  image: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  coordinateX: PropTypes.number,
  coordinateY: PropTypes.number,

};

export default CroppedPreview;
