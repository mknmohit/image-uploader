/**
 *
 * InsertMedia
 *
 */

import React from 'react';
import { withRouter } from 'react-router'
import PropTypes from 'prop-types';

import uploadIcon from 'images/icons/upload.svg';
import Styled from './style';

function InsertMedia({
  handlePreviewUrl,
  history,
}) {

  function handleImageChange(event) {
    const {
      target: { files },
    } = event;
    const imageURL = URL.createObjectURL(files[0]);
    handlePreviewUrl(imageURL);
    history.push('/preview')
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

InsertMedia.propTypes = {
  handlePreviewUrl: PropTypes.func,
  history: PropTypes.object,
};

export default withRouter(InsertMedia);
