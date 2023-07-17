"use client";

import { Movie } from "@/types/types";
import Image from "next/image";
import { styled } from "styled-components";

const Card = styled.div`
    display: grid;
    place-items: start center;
    place-self: center;

    & > div {
        margin: 1.5em .5em;
    }
    
    @media (width >= 1024px) {
        grid-template-columns: 300px auto;
        max-width: 900px;
        width: 100%; 

        & > div {
            margin: 3.5em 1em;
        }
    }
`;

const Poster = styled.div`
    background-color: #ccc;
    width: 300px;
    height: 400px;
`;

const DetailsContainer = styled.div`    
    padding-block: 1em;
    div {
        display: grid;
        margin-block-end: 1em;
        p:first-of-type {
            font-weight: 800;
            text-transform: capitalize;
        }
    }

    @media (width >= 640px) {
        div {
            grid-template-columns: 200px auto;
        }
    }
`;
export default function DetailedFilmCard({
    movie
}:{
    movie: Movie
}) {
    return (
        <Card>
            <Poster>
                <Image
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path||movie.backdrop_path}`}
                    width="300"
                    height="400"
                    alt={movie.title}
                    style={{objectFit: "cover"}}
                    quality={35}
                />
            </Poster>
            <DetailsContainer>
                <div>
                    <p>title</p>
                    <p>{movie?.title}</p>
                </div>
                <div>
                    <p>original title</p>
                    <em>{movie?.original_title}</em>
                </div>
                <div>
                    <p>release date</p>
                    <p>{movie?.release_date}</p>
                </div>
                <div>
                    <p>vote average</p>
                    <p>{movie?.vote_average}</p>
                </div>
                <div>
                    <p>overview</p>
                    <p>{movie?.overview}</p>
                </div>
                <div>
                    <p>original language</p>
                    <p>{movie?.original_language}</p>
                </div>
            </DetailsContainer>
        </Card>
    )
}