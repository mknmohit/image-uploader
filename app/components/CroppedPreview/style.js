import styled from 'styled-components';

const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  color: initial;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
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
`

const RemoveBtn = styled.a`
  cursor: pointer;
  border-radius: 24px;
  padding: 12px 40px;
  color: ${props => props.theme.base};
  width: fit-content;
  margin: 0 auto 12px auto;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  background-image: linear-gradient(
    to right bottom,
    #00c7d4,
    #00bce5,
    #00aef5,
    #009dff,
    #0088ff
  );
`;

export default {
  Card,
  CardContent,
  ImgInfo,
  RemoveBtn,
};
