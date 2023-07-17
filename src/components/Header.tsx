"use client";

import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { BiSolidHomeAlt2, BiSolidInfoCircle } from "react-icons/bi";
import { useState } from "react";
import { styled, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@/Theme";
import { GlobalStyles } from "./GlobalStyle";

const HeaderDiv = styled.header`
  display: flex;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  padding-block: 1em;
  display: flex;
  width: 100%;
  max-width: 1440px;
  justify-content: space-between;
`;

const Div = styled.div`
  min-width: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Links = styled(Link)`
  text-decoration: none;
  margin-inline: .5em;

  svg {
    font-size: 1.25em;
  }
  span {
    display: none;
  }

  @media (width >= 640px) {
    svg {
      display: none;
    }
    span {
      display: inline;
      text-transform: uppercase;
      font-weight: 600;
      margin-inline: 1em;
    }
  }
`;

const Logo = styled(Link)`
  font-size: 1.5em;
  font-weight: 700;
  margin-inline: .75em;
  text-decoration: none;
`;

export default function Header() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <HeaderDiv>
        <HeaderWrapper>
          <Div>
            <Links href="/" replace><span>Home</span><BiSolidHomeAlt2 /></Links>
            <Links href="/about"><span>About</span><BiSolidInfoCircle /></Links>
          </Div>
          <Div>
            <ThemeToggle theme={theme} themeToggler={themeToggler}/>
            <Logo href="/" replace>Filmians</Logo>
          </Div>
        </HeaderWrapper>
      </HeaderDiv>
    </ThemeProvider>
  );
}