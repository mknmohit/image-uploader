import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const btnStyles = `
  cursor: pointer;
  border-radius: 24px;
  padding: 12px 40px;
  width: fit-content;
  margin: 0 auto 12px auto;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
`;

const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  color: initial;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  margin: 16px;
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
`;

const CropBtn = styled(NavLink)`
  ${btnStyles};
  color: ${props => props.theme.base};
  background-image: ${props => props.theme.blue};
`;

const DownloadBtn = styled.a`
  ${btnStyles};
  color: ${props => props.theme.base};
  background-image: ${props => props.theme.success};
`;

export default {
  Card,
  CardContent,
  ImgInfo,
  CropBtn,
  DownloadBtn,
};
