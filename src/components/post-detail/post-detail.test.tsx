import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import PostDetail from "@/components/post-detail";
import { Post } from "@/lib/types";

const post: Post = {
    body: "This is a test post",
    comments: [
        {
            body: "This is a test comment",
            email: "test@test.com",
            id: 1,
            name: "Test Comment",
            postId: 1,
        },
        {
            body: "This is a test comment 2",
            email: "test2@test.com",
            id: 2,
            name: "Test Comment 2",
            postId: 1,
        },
    ],
    id: 1,
    title: "Test Post",
    userId: 1,
    userName: "Test User",
};

describe("PostDetail", () => {
    test("renders without crashing", () => {
        const { container } = render(
            <Router>
                <PostDetail Sidebar={() => <div>Sidebar</div>} post={post} />
            </Router>
        );
        expect(container).toBeTruthy();
    });

    test("renders the post title", () => {
        render(
            <Router>
                <PostDetail Sidebar={() => <div>Sidebar</div>} post={post} />
            </Router>
        );
        const title = screen.getByText(post.title);
        expect(title).toBeInTheDocument();
    });

    test("renders the post author", () => {
        render(
            <Router>
                <PostDetail Sidebar={() => <div>Sidebar</div>} post={post} />
            </Router>
        );
        const author = screen.getByText(post.userName!);
        expect(author).toBeInTheDocument();
    });

    test("renders the post body", () => {
        render(
            <Router>
                <PostDetail Sidebar={() => <div>Sidebar</div>} post={post} />
            </Router>
        );
        const body = screen.getByText(post.body);
        expect(body).toBeInTheDocument();
    });
});
