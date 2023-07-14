"use client";

import StyledComponentsRegistry from '../lib/registry';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import "@/app/globals.css";
import { styled } from 'styled-components';

const Main = styled.main`
    display: grid;
    place-items: start center;
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Header />
          <Nav />
          <Main>{children}</Main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}