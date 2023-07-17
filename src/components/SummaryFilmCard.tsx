"use client";

import { getReleaseYear } from "@/lib/utils";
import { Movie } from "@/types/types";
import Image from "next/image";
import { styled } from "styled-components";
import { BsStarFill } from "react-icons/bs";
import Link from "next/link";

const Card = styled.div`
    width: 100%;
    font-size: .95em;

    @media (width >= 640px) {
        width: min-content;
    }
`;

const Wrapper = styled(Link)`
    min-width: inherit;
    display: grid;
    grid-template-columns: min-content auto;
    place-items: center;
    text-decoration: none;

    @media (width >= 640px) {
        width: min-content;
        place-items: start center;
        grid-template-columns: unset;

        & > div {
            min-width: 200px;
        }
    }
`;

const Poster = styled.div`
    width: 150px;
    height: 200px;
    position: relative;
    display: grid;
    place-items: center;
    background-color: #888
`;

const DetailsContainer = styled.div`    
    place-self: start;
    display: grid;
    padding: 1em;

    @media (width >= 640px) {
        padding: .5em;
        min-height: 75px;
    }
`;

const Star = styled(BsStarFill)`
    color: #FFE900;
    transform: translateY(2px);
`;


export default function SummaryFilmCard({
    movie, index
}:{
    movie: Movie,
    index: number
}) {
    return (
        <Card className="card">
            <Wrapper href={`/movie/${movie.id}`} replace>
            <Poster>
            {
                movie.poster_path||movie.backdrop_path
                ? <>
                    <Image
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path||movie.backdrop_path}`}
                        fill
                        sizes="10%"
                        alt={movie.title}
                        style={{objectFit: "cover"}}
                        quality={35}
                        priority={index < 10? true: false}
                    />
                </>
                :<div>
                    <Image
                        src="/default_image.png"
                        alt={movie.title}
                        width="100"
                        height="100"
                    />
                </div>
            }
            </Poster>
            <DetailsContainer>
                <p>
                    <strong>{movie?.title}</strong>{" "}
                    ({getReleaseYear(movie?.release_date)})
                </p>
                <p><Star />{" "}{movie?.vote_average} / 10</p>
            </DetailsContainer>
            </Wrapper>
        </Card>
    )
}