"use client";

import BackBtn from "@/components/BackBtn";
import Link from "next/link";
import { styled } from "styled-components"

const Article = styled.section`
    place-self: center;
    width: 100%;
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2, p {
        margin-block-end: .75em;
        text-align: center;
    }

    button {
        margin-block: 2.75em;
    }

    @media (width >= 1024px) {
        h2, p {
            text-align: justify;
        }
        p {
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
        <article>
            <h2>About</h2>
            <p>This mock app is built in TypeScript with Next and Styled components.</p>
            <p>The source of data is from <Anchor href="https://www.themoviedb.org/?language=en-GB">The Movie Database</Anchor> (TMDB), a closed source free (for personal use) database with many amazing features to explore.</p>
            <p>Note:</p>
            <p>This project is the very first one with multipages I made with Next. Along journey, I gradually grasping the essence of Next and the reason for its popularity. Yet, there are lots still needed to be refactor and rethink to make it proper. If you come across this site by accident, here is my sincere apology :)</p>
        </article>
        <BackBtn />
        </Article>
    )
}

