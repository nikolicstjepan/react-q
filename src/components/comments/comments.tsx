import useStrings from "@/hooks/use-strings";
import { type Comment } from "@/lib/types";

function Comment({ comments }: { comments: Comment[] }) {
    const strings = useStrings();
    return (
        <div className="comments">
            <h2 className="comments-title">{strings.comments}</h2>
            <ul className="comments-list">
                {comments.map((c, i) => (
                    <li key={i} className="comment">
                        <h3 className="comment-name">{c.name}</h3>
                        <p className="comment-body">{c.body}</p>
                        <div className="comment-email">{c.email}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Comment;
