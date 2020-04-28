/**
 *
 * InsertMedia
 *
 */

import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { toLower } from 'lodash';

import uploadIcon from 'images/icons/upload.svg';
import { OriginalImgSize } from 'containers/App/constants';
import Styled from './style';

function InsertMedia({ handlePreviewUrl, history }) {
  function handleImageChange(event) {
    const {
      target: { files, value },
    } = event;
    const filePath = toLower(value);
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.bmp|\.tiff|\.raw)$/i;

    if (!allowedExtensions.exec(filePath)) {
      event.target.value = null;
      alert(
        'Please upload file having extensions:\njpg, jpeg, png, bmp, tiff and raw only.',
      );
    } else {
      const imageURL = URL.createObjectURL(files[0]);
      const img = new Image();
      img.src = imageURL;

      img.onload = function() {
        const { width, height } = this;
        const {
          width: reqWidth,
          height: reqHeight,
        } = OriginalImgSize

        if (width === reqWidth && height === reqHeight) {
          handlePreviewUrl(imageURL);
          history.push('/preview');
        } else {
          alert('Please uplod image having dimensions 1024 x 1024 pixels');
        }
      };
    }
  }

  return (
    <Styled.Root>
      <Styled.Card>
        <Styled.Icon src={uploadIcon} alt="upload" />
        <Styled.Input
          type="file"
          name="file"
          id="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <label htmlFor="file">
          <Styled.UploadBtn>Choose Image</Styled.UploadBtn>
        </label>
        <Styled.List>
          <Styled.Item>Image should be 1024 x 1024 pixels</Styled.Item>
          <Styled.Item>
            Acceptable file type: jpg, jpeg, png, bmp, tiff, raw
          </Styled.Item>
        </Styled.List>
      </Styled.Card>
    </Styled.Root>
  );
}

InsertMedia.propTypes = {
  handlePreviewUrl: PropTypes.func,
  history: PropTypes.object,
};

export default withRouter(InsertMedia);
