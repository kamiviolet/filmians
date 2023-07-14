import { styled } from "styled-components";

export default function Nav() {
    const Nav = styled.nav`
        background-color: #ccc;
    `;

    return (
        <nav>
            Search Engine
            Link: Latest && Top Rated && Trending
        </nav>
    );
}