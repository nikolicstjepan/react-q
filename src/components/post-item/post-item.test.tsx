import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import PostListItem from "@/components/post-item";
import { Post } from "@/lib/types";

const post: Post = {
    body: "This is a test post",
    comments: [],
    id: 1,
    title: "Test Post",
    userId: 1,
    userName: "Test User",
};

describe("PostListItem", () => {
    test("renders without crashing", () => {
        const { container, asFragment } = render(
            <Router>
                <PostListItem post={post} />
            </Router>
        );
        expect(container).toBeTruthy();
        expect(asFragment()).toMatchSnapshot();
    });

    // Test to check if the component renders the post title correctly
    test("renders the post title", () => {
        render(
            <Router>
                <PostListItem post={post} />
            </Router>
        );
        const title = screen.getByText(post.title);
        expect(title).toBeInTheDocument();
    });

    // Test to check if the component renders the post author correctly
    test("renders the post author", () => {
        render(
            <Router>
                <PostListItem post={post} />
            </Router>
        );
        const author = screen.getByText(post.userName!);
        expect(author).toBeInTheDocument();
    });

    // Test to check if the component renders the comments count correctly
    test("renders the comments count", () => {
        render(
            <Router>
                <PostListItem post={post} />
            </Router>
        );
        const commentsCount = screen.getByText(post.comments.length.toString());
        expect(commentsCount).toBeInTheDocument();
    });

    // Test to check if the component links to the correct URL
    test("links to the correct URL", () => {
        render(
            <Router>
                <PostListItem post={post} />
            </Router>
        );
        const link = screen.getByRole("link") as HTMLAnchorElement;
        expect(link.href).toBe(`http://localhost/posts/${post.id}`);
    });
});
