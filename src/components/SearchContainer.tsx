"use client";

import { Result } from "@/types/types";
import useSWR from "swr";
import { fetcher } from "@/lib/api";
import Pagination from "@/components/Pagination";
import EmblaCarousel from "@/components/Carousel";
import FilmCardWrapper from "@/components/FilmCardWrapper";
import { styled } from "styled-components";

const Container = styled.section`
  width: 100%;
  max-width: 1440px;
  justify-self: center;
  align-self: start;
  padding-block-start: 2em;
  display: grid;
`;

export default function SearchContainer({
    page,
    endpoint,
    type,
    query
}: {page: number, type: string, endpoint: string, query: string
}) {
    if (!page) {page = 1};
    const { data, error, isLoading } = useSWR<Result, Error>(`https://api.themoviedb.org/3${type}/movie${endpoint}?page=${page}${query?"&query="+query:query}`, fetcher)
    return (
        <Container>
            {
            (data && type === "/discover")
            ? <EmblaCarousel movies={data?.results} options={{loop: true}} pluginOptions={{delay: 5000, stopOnMouseEnter: true}}/>
            : <></>
            }
            {
                data
                ? <>
                <FilmCardWrapper data={data}/>
                <Pagination
                    totalPages={data?.total_pages||1}
                    currentPage={data?.page||1}
                />
                </>
                : <></>
            }
            
        </Container>
    )
}