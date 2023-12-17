import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Comments from "@/components/comments";

const comments = [
    {
        body: "This is a test comment1",
        email: "test1@test.com",
        id: 1,
        name: "Test Comment 1",
        postId: 1,
    },

    {
        body: "This is a test comment2",
        email: "test2@test.com",
        id: 2,
        name: "Test Comment 2",
        postId: 1,
    },

    {
        body: "This is a test comment3",
        email: "test3@test.com",
        id: 3,
        name: "Test Comment 3",
        postId: 1,
    },
];

describe("Comments", () => {
    test("renders without crashing", () => {
        const { container } = render(
            <Router>
                <Comments comments={comments} />
            </Router>
        );
        expect(container).toBeTruthy();
    });

    test("renders the correct number of comments", () => {
        render(
            <Router>
                <Comments comments={comments} />
            </Router>
        );
        const renderedComments = screen.getAllByRole("listitem");
        expect(renderedComments).toHaveLength(comments.length);
    });

    comments.forEach((comment, index) => {
        test(`renders comment ${index + 1} correctly`, () => {
            render(
                <Router>
                    <Comments comments={comments} />
                </Router>
            );
            const name = screen.getByText(comment.name);
            const body = screen.getByText(comment.body);
            const email = screen.getByText(comment.email);
            expect(name).toBeInTheDocument();
            expect(body).toBeInTheDocument();
            expect(email).toBeInTheDocument();
        });
    });
});
