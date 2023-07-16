import FilmCardWrapper from "@/components/FilmCardWrapper";

export default async function page({ searchParams }: {
  searchParams: { page: string }
}) {
    const page = +(searchParams?.page);
  
    return (
      <>
        <FilmCardWrapper
          page={page}
          endpoint=""
          type="/discover"
          query=""
        />
      </>
    )
}