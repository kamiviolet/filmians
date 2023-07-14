"use client";

import { Movie } from "@/types/types";
import Image from "next/image";
import { styled } from "styled-components";

const Card = styled.div`
    display: grid;
    grid-template-columns: min-content auto;
    place-items: center;
    width: 100%;
    margin: 1em;
    font-size: .95em;
    background-color: #eee;
    gap: .5em;


    @media (width >= 640px) {
        width: fit-content;
        padding: .5em;
        grid-template-columns: unset;
    }
`;

const Poster = styled.div`
    background-color: #ccc;
    width: 150px;
    height: 200px;

    @media (width >= 640px) {
        width: 100%;
        height: 275px;
    }
`;

const DetailsContainer = styled.div`    
    display: grid;
    width: 100%;
`;
export default function SummaryFilmCard({
    movie
}:{
    movie: Movie
}) {
    return (
        <Card>
            <Poster>
                <Image src="" width="300" height="400" alt="test" />
            </Poster>
            <DetailsContainer>
                <p>{movie?.title}</p>
                <p>{movie?.release_date}</p>
                <p>{movie?.vote_average}</p>
            </DetailsContainer>
        </Card>
    )
}