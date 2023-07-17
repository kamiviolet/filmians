import DetailedFilmCard from "@/components/DetailedFilmCard";

async function getMovie(movieId:number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`
  );
  return await res.json();
}

export default async function page({ params }: {params: {id: number}}) {
  const movieId = params.id;
  const movie = await getMovie(movieId);

    return (
        <>
            <DetailedFilmCard
                movie={movie}
            />
        </>
    )
}