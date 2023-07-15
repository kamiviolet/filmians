import FilmCardWrapper from "@/components/FilmCardWrapper";
import Pagination from "@/components/Pagination";
import { discoverMovies } from "@/lib/api";
import { Movie } from "@/types/types";

export default async function page({ searchParams }: { searchParams: { page: string } }) {
  const currentPage = +(searchParams.page);
  const {results}:{results: Movie[]} = await discoverMovies(currentPage || 1);
  // const {total_pages}:{total_pages: number} = await discoverMovies(1);
  const listOfMovies = results;

  return (
    <>
      <FilmCardWrapper listOfMovies={listOfMovies} />
      <Pagination totalPages={10} currentPage={currentPage} />
    </>
  )
}