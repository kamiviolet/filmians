import FilmCardWrapper from "@/components/FilmCardWrapper";
import Pagination from "@/components/Pagination";
import { getTopRatedMovies } from "@/lib/api";
import { Movie } from "@/types/types";

export default async function page({ searchParams, params }: {
  searchParams: { page: string }, params : {category: string}
}) {
    const currentPage = +(searchParams.page);
    const {results}:{results: Movie[]} = await getTopRatedMovies(currentPage || 1);
    // const {total_pages}:{total_pages: number} = await discoverMovies(1);
    const listOfMovies = results;
    console.log(params);
  
    return (
      <>
        <FilmCardWrapper listOfMovies={listOfMovies} />
        <Pagination totalPages={10} currentPage={currentPage} />
      </>
    )
}