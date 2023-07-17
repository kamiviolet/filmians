import { styled } from "styled-components";
import SummaryFilmCard from "./SummaryFilmCard";
import { Result } from "@/types/types";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-block-start: 2em;
    gap: 1.75em;
    justify-content: space-evenly;
`;

export default function FilmCardWrapper({data}: {data: Result}) {
    return (
        <Container>
        {
            (Array.isArray(data?.results))
            ? data?.results.map((movie, i) => <SummaryFilmCard key={movie.id} index={i} movie={movie}/>)
            : <></>
        }
        </Container>
    )
}