import { styled } from "styled-components";

const FooterDiv = styled.footer`
  padding-block: 2.5em;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterDiv>
      Designed and created by Kami Lam 2023
    </FooterDiv>
  );
}