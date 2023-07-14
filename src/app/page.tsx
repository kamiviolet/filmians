"use client"

import { styled } from 'styled-components';

export default function Home() {
  const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem /* 24px */;
  background-color: #f00;
`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container>Next with styled components</Container>
    </main>
  )
}