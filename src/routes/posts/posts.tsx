import Layout from "@/layout/base-layout";
import PostList from "@/components/post-list";
import PostSearch from "@/components/post-search";

import usePostList from "./usePostList";
import PostItem from "@/components/post-item";

function Posts() {
    const { posts } = usePostList();

    return (
        <Layout>
            <PostSearch />
            <PostList posts={posts}>
                {(post) => <PostItem post={post} />}
            </PostList>
        </Layout>
    );
}

export default Posts;
