import { styled } from "styled-components";

export default function Header() {
  const Header = styled.header`
    background-color: #ff0;
  `;

  return (
    <>
    <Header>
      Logo
      ThemeToggle
      LinkWrapper: Home && About
    </Header>
    </>
  );
}