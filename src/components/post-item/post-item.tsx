import { Post } from "@/lib/types";
import { Link } from "react-router-dom";
import PostAuthor from "../post-author";
import { MessageCircle } from "lucide-react";

function PostListItem({ post }: { post: Post }) {
    return (
        <Link to={`/posts/${post.id}`} className="post-list-item">
            <div className="post-list-item__content">
                <h2 className="post-list-item__title">{post.title}</h2>
                <div className="post-list-item__metadata">
                    <PostAuthor author={post.userName || ""} />
                    <div className="post-list-item__comments">
                        <span>{post.comments.length}</span>
                        <MessageCircle size={16} />
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default PostListItem;
