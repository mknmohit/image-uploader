import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Root = styled.div`
  width: 100%;
  text-align: center;
`;

const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  color: initial;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  margin: 16px 16px 120px;
  background-color: ${props => props.theme.base};
`;

const CardContent = styled.div`
  padding: 16px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

const ImgInfo = styled.p`
  margin: 0 0 12px;
  color: gray;
`

const RemoveBtn = styled(NavLink)`
  cursor: pointer;
  border-radius: 24px;
  padding: 12px 40px;
  color: ${props => props.theme.base};
  width: fit-content;
  margin: 0 auto 12px auto;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  background-image: linear-gradient(to right bottom, #ff7eb3, #ff7eb3, #ff7eb3, #ff7eb3, #ff7eb3);
`;

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
  Root,
  Card,
  CardContent,
  ImgInfo,
  RemoveBtn,
  NoPreview,
  NoPreviewMsg,
};
