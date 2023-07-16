import FilmCardWrapper from "@/components/FilmCardWrapper";

export default async function page({ searchParams, params }: {
  searchParams: { page: string }, params : {endpoint: string}
}) {
    const page = +(searchParams?.page);
    const endpoint = params.endpoint || "";
    return (
      <>
        <FilmCardWrapper
          page={page}
          endpoint={`/${endpoint}`}
          type=""
          query=""
        />
      </>
    )
}