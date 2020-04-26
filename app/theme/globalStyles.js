import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    display: flex;
    color: #fff;
    background-image: linear-gradient(
      to right bottom,
      #667eea,
      #6e71d8,
      #7364c6,
      #7657b4,
      #764ba2
    );
    min-height: 100%;
    min-width: 100%;
  }

  #app > div,
  #app > div > div {
    display: flex;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
