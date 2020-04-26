import styled from 'styled-components';

const NoPreview = styled.div`
  justify-content: center;
  align-items: center;
`;

const NoPreviewMsg = styled.div`
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  padding: 60px;
  border-radius: 8px;
`;

export default {
  NoPreview,
  NoPreviewMsg,
};
