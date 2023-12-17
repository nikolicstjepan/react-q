import { createBrowserRouter, Navigate } from "react-router-dom";
import PostList, {
    loader as postsLoader,
    ErrorElement as PostListErrorElement,
} from "@/routes/posts";
import PostDetail, {
    loader as postLoader,
    ErrorElement as PostErrorElement,
} from "@/routes/post-id";
import queryClient from "@/lib/queryClient";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/posts" />,
    },
    {
        path: "/posts",
        element: <PostList />,
        loader: postsLoader(queryClient),
        errorElement: <PostListErrorElement />,
    },
    {
        path: "/posts/:id",
        element: <PostDetail />,
        loader: postLoader(queryClient),
        errorElement: <PostErrorElement />,
    },
    {
        path: "*",
        element: <h1>Not Found</h1>,
    },
]);

export default router;
