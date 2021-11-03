import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  h1 {
    font-weight: 900;
  }

  h2 { font-weight: 700; }
  h1, h2, h3, h4,h5,h6 {
    font-family: 'Manrope';
  }



  @media (min-width:576px) {
  h1 {
    font-size: 22px;
  }
}

@media (min-width:768px) {
  h1 {
    font-size: 24px;
  }
}

@media (min-width:992px) {
  h1 {
    font-size: 34px;
  }
}
  

  body {
    font-family: 'Inter', Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Inter'
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;

export default {};
