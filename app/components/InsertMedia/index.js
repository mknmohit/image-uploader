/**
 *
 * InsertMedia
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';

import uploadIcon from 'images/icons/upload.svg';
import Styled from './style';

function InsertMedia() {
  const [previewURL, setPreviewURL] = useState('');

  function handleImageChange(event) {
    const {
      target: { files },
    } = event;
    const imageURL = URL.createObjectURL(files[0]);
    setPreviewURL(imageURL);
    // const imageData = new FormData();
    // imageData.append('image', files[0]);
    // imageData.append('file_name', files[0].name);
    // setImageUploadName(files[0].name);
    // onImageUpload(imageData, imageURL, itemIndex);
  }

  return (
    <Styled.Root>
      <Styled.Card>
        <Styled.Icon src={uploadIcon} alt="upload" />
        <Styled.Input
          type="file"
          name="file"
          id="file"
          onChange={handleImageChange}
          // name={name}
          // componentName={componentName}
        />
        <label htmlFor="file">
          <Styled.UploadBtn>Choose Image</Styled.UploadBtn>
        </label>
        <Styled.List>
          <Styled.Item>Image should be 1024 x 1024 pixels</Styled.Item>
          <Styled.Item>Acceptable file type: jpg, jpeg, png, svg</Styled.Item>
        </Styled.List>
      </Styled.Card>
    </Styled.Root>
  );
}

InsertMedia.propTypes = {};

export default memo(InsertMedia);
