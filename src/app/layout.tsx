"use client";

import { Inter } from 'next/font/google'
import { useState } from 'react';
import StyledComponentsRegistry from '../lib/registry';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SWRConfig } from 'swr';
import { ThemeContext } from '@/contexts/themeContext';
import { ThemeContextType } from '@/types/types';
import { styled } from 'styled-components';
import "@/app/globals.css";

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
  const [theme, setTheme] = useState<ThemeContextType>("light");
  
  return (
    <html lang="en" className={inter.className}>
      <SWRConfig value={{
          onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
            if (error.status === 404) return
            if (retryCount >= 10) return
            setTimeout(() => revalidate({ retryCount }), 10000)
          }
      }}>
        <ThemeContext.Provider value={theme}>
          <StyledComponentsRegistry>
          <body>
            <Header />
            <Nav />
            <Main>{children}</Main>
            <Footer />
          </body>
          </StyledComponentsRegistry>
        </ThemeContext.Provider>
      </SWRConfig>
    </html>
  )
}