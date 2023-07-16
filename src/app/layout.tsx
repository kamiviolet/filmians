"use client";

import { Inter } from "next/font/google"
import { useState } from "react";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SWRConfig } from "swr";
import { styled, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@/Theme";
import { GlobalStyles } from "@/components/GlobalStyle";
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
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  console.log(theme)

  return (
    <html lang="en" className={inter.className}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <StyledComponentsRegistry>
      <SWRConfig value={{
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
          if (error.status === 404) return
          if (retryCount >= 10) return
          setTimeout(() => revalidate({ retryCount }), 10000)
        }
      }}>
          <body>
        <GlobalStyles />
            <Header themeToggler={themeToggler} theme={theme} />
            <Nav />
            <Main>{children}</Main>
            <Footer />
          </body>
      </SWRConfig>
      </StyledComponentsRegistry>
      </ThemeProvider>
    </html>
  )
}