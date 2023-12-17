import { useLoaderData, useSearchParams } from "react-router-dom";
import loader, { dataQuery } from "./loader";
import { useQuery } from "@tanstack/react-query";

function usePostList() {
    const [searchParams] = useSearchParams();
    const userName = searchParams.get("s");

    const initialData = useLoaderData() as Awaited<ReturnType<ReturnType<typeof loader>>>;
    const { data, error } = useQuery({
        ...dataQuery(),
        initialData,
    });

    const posts = data.posts.map((p) => {
        const comments = data.comments.filter((c) => c.postId === p.id);
        const userName = data.users.find((u) => u.id === p.userId)?.name;

        return { ...p, userName, comments };
    });

    const filteredPosts = userName
        ? posts.filter((p) =>
              p.userName?.toLocaleLowerCase().includes(userName.toLocaleLowerCase())
          )
        : posts;

    return { posts: filteredPosts, error };
}

export default usePostList;
