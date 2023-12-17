import { Post } from "@/lib/types";
import useStrings from "@/hooks/use-strings";

type PostListProps = {
    children: (post: Post) => React.ReactNode;
    posts: Post[];
};

function PostList({ posts, children }: PostListProps) {
    const strings = useStrings();
    const hasPosts = posts.length > 0;

    return (
        <div className="post-list__container">
            <h1 className="post-list__title">{strings.posts}</h1>
            {hasPosts ? (
                <div className="post-list__items">
                    {posts.map((post) => children(post))}
                </div>
            ) : (
                <p>{strings.noPosts}</p>
            )}
        </div>
    );
}

export default PostList;
