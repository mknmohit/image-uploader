import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: 100%;
  max-width: 350px;
  border-radius: 10px;
  background-color: ${props => props.theme.base};
  padding: 24px;
  margin: 12px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
`;

const Icon = styled.img`
  width: 64px;
  display: flex;
  margin: 32px auto;
`;

const Input = styled.input`
  opacity: 0;
  display: none;
`;

const UploadBtn = styled.div`
  cursor: pointer;
  border-radius: 24px;
  padding: 12px 40px;
  color: ${props => props.theme.base};
  width: fit-content;
  margin: 0 auto 36px auto;
  font-size: 16px;
  font-weight: bold;
  background-image: linear-gradient(
    to right bottom,
    #00c7d4,
    #00bce5,
    #00aef5,
    #009dff,
    #0088ff
  );
`;

const List = styled.ul`
  padding-left: 16px;
  color: silver;
  margin-bottom: 50px;
`;

const Item = styled.li`
  margin-bottom: 16px;
`;

export default {
  Root,
  Card,
  Icon,
  Input,
  UploadBtn,
  List,
  Item,
};
