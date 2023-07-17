import FilmCardWrapper from "@/components/FilmCardWrapper";
import Title from "@/components/Title";

export default async function page({ searchParams }: {
  searchParams: { page: string }
}) {
    const page = +(searchParams?.page);
  
    return (
      <>
        <Title title="discover" />
        <FilmCardWrapper
          page={page}
          endpoint=""
          type="/discover"
          query=""
        />
      </>
    )
}