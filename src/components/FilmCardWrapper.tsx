"use client";

import { Movie } from "@/types/types";
import { styled } from "styled-components";
import SummaryFilmCard from "@/components/SummaryFilmCard";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-block-start: 2em;
    gap: 1em;
`;

export default function FilmCardWrapper({listOfMovies}: {listOfMovies: Movie[]}) {
    return (
        <Container>
            {
            listOfMovies.map((movie, i) => <SummaryFilmCard key={movie.id} index={i} movie={movie}/>)
            }
        </Container>
    )
}