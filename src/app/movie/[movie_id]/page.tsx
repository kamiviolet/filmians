"use client";

import DetailedFilmCard from "@/components/DetailedFilmCard";
import BackBtn from "@/components/BackBtn";

export default function Page({ params }: {
  params: {movie_id: number}
}) {
  const movieId = params.movie_id;
  
  return (
    <>
      <DetailedFilmCard movieId={movieId}/>
      <BackBtn />
    </>
  )
}