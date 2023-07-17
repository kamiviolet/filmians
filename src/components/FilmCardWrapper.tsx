"use client";

import { Result } from "@/types/types";
import { styled } from "styled-components";
import SummaryFilmCard from "@/components/SummaryFilmCard";
import useSWR from "swr";
import {fetcher} from "@/lib/api";
import Pagination from "./Pagination";
import EmblaCarousel from "./Carousel";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-block-start: 2em;
    padding-inline: .25em;
    gap: 1em;
    justify-content: space-evenly;
`;

export default function FilmCardWrapper({
    page,
    endpoint,
    type,
    query
}: {page: number, type: string, endpoint: string, query: string
}) {
    if (!page) {page = 1};
    const { data, error, isLoading } = useSWR<Result, Error>(`https://api.themoviedb.org/3${type}/movie${endpoint}?page=${page}${query?"&query="+query:query}`, fetcher)
    return (
        <>
            {
            (data && type === "/discover")
            ? <EmblaCarousel movies={data?.results} options={{loop: true}} pluginOptions={{delay: 10000, stopOnMouseEnter: true}}/>
            : <></>
            }
            <Container>
                {
                    (Array.isArray(data?.results))
                    ? data?.results.map((movie, i) => <SummaryFilmCard key={movie.id} index={i} movie={movie}/>)
                    : (isLoading)
                    ? <div>Loading...</div>
                    : <div>Error! HQ is not responding to our request.</div>
                }
            </Container>
            <Pagination
                totalPages={data?.total_pages||1}
                currentPage={data?.page||1}
            />
        </>
    )
}