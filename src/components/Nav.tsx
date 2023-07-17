import Link from "next/link";
import { styled } from "styled-components";
import SearchBar from "./SearchBar";

const NavDiv = styled.nav`
    display: flex;
    justify-content: center;
    font-weight: 600;
`;

const NavContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    padding-block: .5em;
    padding-inline: 1em;
    display: grid;
    place-items: center;

    @media (width >= 960px) {
        grid-template-columns: auto max-content;
        place-items: center start;

        &:last-child {
            place-self: end;
        }
    }
`;

const Div = styled.div`
    min-width: 150px;
    margin-block: .5em;
    & > a {
        margin-inline-end: 1em;
        text-decoration: none;
        &:last-of-type {
            margin-inline-end: unset;
        }
    }
`;

export default function Nav() {
    
    return (
        <NavDiv>
            <NavContainer>
                <Div>
                    <Link href="/category/now_playing">Now Playing</Link>
                    <Link href="/category/top_rated">Top Rated</Link>
                    <Link href="/category/popular">Popular</Link>
                    <Link href="/category/upcoming">Upcoming</Link>
                </Div>
                <SearchBar />
            </NavContainer>
        </NavDiv>
    );
}