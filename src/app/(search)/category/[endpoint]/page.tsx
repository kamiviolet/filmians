import SearchContainer from "@/components/SearchContainer";
import Title from "@/components/Title";

export default function Page({ searchParams, params }: {
  searchParams: { page: string }, params : {endpoint: string}
}) {
    const page = +(searchParams?.page);
    const endpoint = params.endpoint || "";
    return (
      <>
        <Title title={endpoint} />
          <SearchContainer
            page={page}
            endpoint={`/${endpoint}`}
            type=""
            query=""
          />
      </>
    )
}