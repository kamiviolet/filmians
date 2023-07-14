import Link from "next/link";
import { styled } from "styled-components";

const NavDiv = styled.nav`
    background-color: #ccc;
    display: flex;
    justify-content: center;
`;

const NavContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    padding-block: .5em;
    padding-inline: 1em;
    display: grid;
    place-items: center;

    @media (width >= 1440px) {
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

const Input = styled.input`
    font-size: 1em;
    width: 200px;
    padding: .5em .5em;
`;

const Submit = styled(Input)`
    width: 100px;
    margin-inline-start: 1.5em;
    text-transform: capitalize;
    cursor: pointer;
`;

export default function Nav() {
    return (
        <NavDiv>
            <NavContainer>
                <Div>
                    <Link href="/" replace>Latest</Link>
                    <Link href="/">Top Rated</Link>
                    <Link href="/">Top Trending</Link>
                </Div>
                <Div>
                    <Input type="text" placeholder="Please enter any keywords"/>
                    <Submit type="submit" value="search"/>
                </Div>
            </NavContainer>
        </NavDiv>
    );
}