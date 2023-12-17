import { useSearchParams } from "react-router-dom";

function usePostSearch() {
    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("s") ?? "";
    const setSearch = (value: string) => {
        setSearchParams({ s: value });
    };

    return [search, setSearch] as const;
}

export default usePostSearch;
