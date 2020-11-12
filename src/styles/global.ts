import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  html {
    --e-global-color-text: #333333;
    --e-global-color-text-secondary: #4F4F4F;
    --e-global-color-button-text: #ffffff;
    --e-global-color-background: #ffffff;
    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body, input, button {
    font-family: 'Space Mono', sans-serif;
    background: var(--e-global-color-background);
    color: var(--e-global-color-primary);
  }

  h1 {
    font-size: 3rem;
    letter-spacing: 0.84px;
    line-height: 71px;
    letter-spacing: -0.035em;
    color: var(--e-global-color-text);
    font-weight: 700;
  }

  p {
    font-size: 1.125rem;
    line-height: 27px;
    letter-spacing: -0.035em;
    color: var(--e-global-color-text-secondary);
  }

  button {
    cursor: pointer
  }

  a, button {
    opacity: 1;
    font-size: 0.875rem;
    line-height: 21px;
    letter-spacing: -0.035em;
    color: var(--e-global-color-button-text);
    transition: 0.4s ease-in-out opacity;
    text-transform: uppercase;

    &:hover {
      opacity: 0.8;
    }
  }

  strong {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.875rem;
    line-height: 17px;
    font-weight: 600;
    color: var(--e-global-color-text);
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 4rem;
      line-height: 95px;
    }
    p {
      font-size: 1.5rem;
      line-height: 36px;
    }
  }
`;
