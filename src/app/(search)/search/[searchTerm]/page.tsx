import SearchContainer from "@/components/SearchContainer";
import Title from "@/components/Title";

export default function Page({params, searchParams} : {params: {searchTerm: string}, searchParams: {page: string}}) {
    const page = +(searchParams?.page);
    const keyword = params.searchTerm.split("%20").join(" ");

    return (
      <>
        <Title title={`Search result: ${keyword}`} />
        <SearchContainer
          page={page}
          endpoint=""
          type="/search"
          query={params?.searchTerm || ""}
        />
      </>
    )
}