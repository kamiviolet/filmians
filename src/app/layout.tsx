"use client";

import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '../lib/registry';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import "@/app/globals.css";
import { styled } from 'styled-components';

const Main = styled.main`
    width: 100%;
    max-width: 1440px;
    justify-self: center;
    align-self: start;
    padding-block-start: 2em;
    display: grid;
`

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" className={inter.className}>
      <StyledComponentsRegistry>
      <body>
          <Header />
          <Nav />
          <Main>{children}</Main>
          <Footer />
      </body>
      </StyledComponentsRegistry>
    </html>
  )
}