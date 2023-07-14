import type { Metadata } from 'next';
import StyledComponentsRegistry from '../lib/registry';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Filmians',
  description: 'A mock IMDB site to perform CRUD and allow users to check information about movies and TV series. ',
}

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