"use client";

import Link from "next/link";
import { styled } from "styled-components"

const Article = styled.article`
    width: 100%;
    max-width: 1440px;
    padding: 1em;

    h2, p {
        margin-block: 1em;
    }

    @media (width >= 1024px) {
        padding: 2em;
        * {
            font-size: 1.25em
        }
    }
`;

const Anchor = styled(Link)`
    font-size: 1em;
    text-decoration: none;
    color: #F9A603;
`

export default function page() {
    return (
        <Article>
        <h2>About</h2>
        <p>This mock app is built with Next and Styled components.</p>
        <p>The source of data is from <Anchor href="https://www.themoviedb.org/?language=en-GB">The Movie Database</Anchor> (TMDB), a closed source free (for personal use) database with many amazing features to explore.</p>
        </Article>
    )
}

