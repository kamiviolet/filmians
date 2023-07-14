"use client";

import StyledComponentsRegistry from '../lib/registry';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import "@/app/globals.css";

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
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}