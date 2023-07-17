import FilmCardWrapper from "@/components/FilmCardWrapper";
import Title from "@/components/Title";

export default async function page({ searchParams, params }: {
  searchParams: { page: string }, params : {endpoint: string}
}) {
    const page = +(searchParams?.page);
    const endpoint = params.endpoint || "";
    return (
      <>
        <Title title={endpoint} />
        <FilmCardWrapper
          page={page}
          endpoint={`/${endpoint}`}
          type=""
          query=""
        />
      </>
    )
}