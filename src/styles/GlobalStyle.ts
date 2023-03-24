import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   :root {
    font-size: 62.5%; // 62.5% = 10px
    --red: #F00001;
    --white: #fff;
    --black: #000;
    --dark-grey: #1e1e1e;
  }

   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    width: 100vw;
    height: 100vh;
    background: var(--black);

    /* scrollbar */
    &::-webkit-scrollbar {
      width: 7px;
      background: none;
      border: none;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--white);
      border-radius: 4px;
    }         
  }
  
  html {
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    overflow-x: hidden;
  }

  h1, p, a {
    color: var(--white);
    text-decoration: none;
  } 
`;