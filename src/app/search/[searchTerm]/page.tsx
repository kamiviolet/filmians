import FilmCardWrapper from "@/components/FilmCardWrapper";

export default function page({params, searchParams} : {params: {searchTerm: string}, searchParams: {page: string}}) {
    const page = +(searchParams?.page);

    return (
      <>
        <FilmCardWrapper
          page={page}
          endpoint=""
          type="/search"
          query={params?.searchTerm || ""}
        />
      </>
    )
}