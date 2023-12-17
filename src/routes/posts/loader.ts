import { getData } from "@/api";
import { QueryClient } from "@tanstack/react-query";

export const dataQuery = () => ({
    queryKey: ["posts", "comments", "users"],
    queryFn: () => getData(),
});

const loader = (queryClient: QueryClient) => async () => {
    const query = dataQuery();

    return queryClient.ensureQueryData(query);
};

export default loader;
