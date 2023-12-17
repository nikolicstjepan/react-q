import { getPost } from "@/api";
import { QueryClient } from "@tanstack/react-query";
import { LoaderFunctionArgs } from "react-router-dom";

export const postQuery = (id: number) => ({
    queryKey: ["post", "detail", id],
    queryFn: () => getPost(id),
});

const loader =
    (queryClient: QueryClient) =>
    async ({ params }: LoaderFunctionArgs) => {
        const query = postQuery(parseInt(params.id!));

        return queryClient.ensureQueryData(query);
    };

export default loader;
