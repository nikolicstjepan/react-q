import useStrings from "@/hooks/use-strings";

function PostAuthor({ author }: { author: string }) {
    const strings = useStrings();

    const shortName =
        author
            ?.split(" ")
            .map((name) => name[0])
            .join("")
            .toUpperCase()
            .slice(0, 2) || strings.anonymousShort;
    return (
        <div className="post-author">
            <div className="post-author__avatar">{shortName}</div>
            <h3 className="post-author__username">{author || strings.anonymous}</h3>
        </div>
    );
}

export default PostAuthor;
