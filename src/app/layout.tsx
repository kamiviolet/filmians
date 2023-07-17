import Footer from "@/components/Footer"
import Nav from "@/components/Nav"
import { Metadata } from "next"
import "@/app/globals.css";
import Header from "@/components/Header";
import StyledComponentsRegistry from "@/lib/registry";
import { Inter } from "next/font/google";


export const metadata: Metadata = {
  title: "Filmians",
  description: "An mock project to find your movie, built in TypeScript with Next and Styled components."
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
                <main>{children}</main>
                <Footer />
        </body>
        </StyledComponentsRegistry>
    </html>
    )
  }