import SearchContainer from "@/components/SearchContainer";
import Title from "@/components/Title";

export default function Page({ searchParams }: {
    searchParams: { page: string }
  }) {
      const page = +(searchParams?.page);
    
      return (
        <>
          <Title title="discover" />
          <SearchContainer
            page={page}
            endpoint=""
            type="/discover"
            query=""
          />
        </>
      )
  }