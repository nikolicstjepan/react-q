import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Post } from "@/lib/types";

import PostAuthor from "@/components/post-author";

function PostDetail({ post, Sidebar }: { post: Post; Sidebar: React.FC }) {
    return (
        <>
            <Link to="/posts" className="post-detail__back">
                <ArrowLeft size={24} />
                <span>All posts</span>
            </Link>
            <div className="post-detail__container">
                <div className="post-detail__content">
                    <PostAuthor author={post.userName || ""} />
                    <h1 className="post-detail__title">{post.title}</h1>
                    <p className="post-detail__body">{post.body}</p>
                </div>

                <Sidebar />
            </div>
        </>
    );
}

export default PostDetail;
