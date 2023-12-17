import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import loader, { postQuery } from "./loader";

function usePost(id: number) {
    const initialData = useLoaderData() as Awaited<ReturnType<ReturnType<typeof loader>>>;
    const { data, error, isLoading } = useQuery({
        ...postQuery(id),
        initialData,
    });

    const post = {
        ...data.post,
        comments: data.comments,
        userName: data.user.name,
    };

    return { post, error, isLoading };
}

export default usePost;
