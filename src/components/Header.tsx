import { styled } from "styled-components";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const HeaderDiv = styled.header`
  display: flex;
  justify-content: center;
  background-color: #eee
`;

const HeaderWrapper = styled.div`
  padding-block: 1em;
  display: flex;
  width: 100%;
  max-width: 1440px;
  justify-content: space-between;
`;

const Links = styled(Link)`
  margin-inline: 1em;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
`;

const Div = styled.div`
  min-width: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5em;
  font-weight: 700;
  margin-inline: .75em;
  text-decoration: none;
`;

export default function Header() {
  return (
    <HeaderDiv>
      <HeaderWrapper>
        <Div>
          <Links href="/" replace>Home</Links>
          <Links href="/about">About</Links>
        </Div>
        <Div>
          <ThemeToggle />
          <Logo href="/" replace>Filmians</Logo>
        </Div>
      </HeaderWrapper>
    </HeaderDiv>
  );
}