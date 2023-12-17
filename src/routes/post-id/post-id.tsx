import { useParams } from "react-router-dom";

import Layout from "@/layout/base-layout";
import PostDetail from "@/components/post-detail";

import usePost from "./usePost";
import Comments from "@/components/comments";

function Post() {
    const params = useParams();
    const { post } = usePost(parseInt(params.id!));

    return (
        <Layout>
            <PostDetail
                Sidebar={() => <Comments comments={post.comments} />}
                post={post}
            />
        </Layout>
    );
}

export default Post;
