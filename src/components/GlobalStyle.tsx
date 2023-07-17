import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  
  a {
    color: ${({ theme }) => theme.text};
  }

  header, footer {
    background: ${({ theme }) => theme.background};
    
    button {
      color: ${({ theme }) => theme.text};
    }
  }

  nav {
    background: ${({theme}) => theme.navBg};

    a:hover,
    a:focus {
      color: ${({theme}) => theme.navHover};
    }
  }

  button {
    cursor: pointer;
    background-color: transparent;
    color: ${({theme}) => theme.text};

    * {
      pointer-events: none;
      fill: ${({ theme }) => theme.text};
    }
  }

  button[disabled] {
    cursor: unset;
    * {
      fill: ${({ theme }) => theme.text_contrast};
    }
  }

  .caurosel_description,
  .card {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    box-shadow: ${({ theme }) => theme.navHover} 0 5px 0;

    a {
      color: ${({ theme }) => theme.text};
    }
  }

  .card:hover,
  .card:focus {
    background: ${({ theme }) => theme.background_contrast};
    color: ${({ theme }) => theme.text_contrast};

    a {
      color: ${({ theme }) => theme.text_contrast};
    }
  }
  `