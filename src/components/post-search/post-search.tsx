import useStrings from "@/hooks/use-strings";
import { Search } from "lucide-react";
import usePostSearch from "./use-post-search";

function PostSearch() {
    const strings = useStrings();
    const [search, setSearch] = usePostSearch();

    return (
        <div className="post-search__container">
            <label className="post-search__label" htmlFor="post-search">
                <Search aria-description="Search" size={24} />
            </label>
            <input
                placeholder={strings.search}
                className="post-search__input"
                type="text"
                id="post-search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

export default PostSearch;
