import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import PostList from "@/components/post-list";
import useStrings from "@/hooks/use-strings";
import { Post } from "@/lib/types";

describe("PostList", () => {
    test("renders without crashing", () => {
        const { container } = render(
            <Router>
                <PostList posts={[]}>
                    {(post) => (
                        <div key={post.id} className="post-list-item">
                            {post.title}
                        </div>
                    )}
                </PostList>
            </Router>
        );
        expect(container).toBeTruthy();
    });

    test("renders correct number of PostItem components", () => {
        const posts = [
            {
                id: 1,
                title: "Post 1",
                body: "This is post 1",
                userId: 1,
                userName: "User 1",
                comments: [],
            },
            {
                id: 2,
                title: "Post 2",
                body: "This is post 2",
                userId: 1,
                userName: "User 1",
                comments: [],
            },
        ];

        const { container } = render(
            <Router>
                <PostList posts={posts as Post[]}>
                    {(post) => (
                        <div key={post.id} className="post-list-item">
                            {post.title}
                        </div>
                    )}
                </PostList>
            </Router>
        );

        const postItems = container.querySelectorAll(".post-list-item");
        expect(postItems).toHaveLength(posts.length);
    });

    test("renders 'No posts' message when given an empty list of posts", () => {
        render(
            <Router>
                <PostList posts={[]}>
                    {(post) => (
                        <div key={post.id} className="post-list-item">
                            {post.title}
                        </div>
                    )}
                </PostList>
            </Router>
        );
        const noPostsMessage = screen.getByText(useStrings().noPosts);
        expect(noPostsMessage).toBeInTheDocument();
    });
});
