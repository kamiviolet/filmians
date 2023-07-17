"use client";

import DetailedFilmCard from "@/components/DetailedFilmCard";
import BackBtn from "@/components/BackBtn";
import { fetcher } from "@/lib/api";
import { Movie } from "@/types/types";
import useSWR from "swr";

export default function Page({ params }: {params: {movie_id: number}}) {
  const movieId = params.movie_id;
  const { data, error, isLoading } = useSWR<Movie, Error>(`https://api.themoviedb.org/3/movie/${movieId}`, fetcher)
  
  return (
    <>
    {
      data
      ? <DetailedFilmCard movie={data}/>
      : isLoading
      ? <div>Loading...</div>
      : <div>Error! HQ is not responding to our request.</div>
    }
    <BackBtn />
    </>
  )
}