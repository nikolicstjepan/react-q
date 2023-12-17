import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import PostAuthor from "@/components/post-author";

describe("PostAuthor", () => {
    test("renders without crashing", () => {
        const { container } = render(
            <Router>
                <PostAuthor author="Author Man" />
            </Router>
        );
        expect(container).toBeTruthy();
    });

    test("renders the author's name", () => {
        render(
            <Router>
                <PostAuthor author="Author Man" />
            </Router>
        );
        const authorName = screen.getByText("Author Man");
        expect(authorName).toBeInTheDocument();
    });

    test("generates the correct avatar text", () => {
        render(
            <Router>
                <PostAuthor author="Author Man" />
            </Router>
        );
        const avatarText = screen.getByText("AM");
        expect(avatarText).toBeInTheDocument();
    });

    test("handles the case where the author name is empty string", () => {
        render(
            <Router>
                <PostAuthor author="" />
            </Router>
        );
        const authorName = screen.getByText("Anonymous");
        expect(authorName).toBeInTheDocument();
    });

    test("handles the case where the author name is only one word", () => {
        render(
            <Router>
                <PostAuthor author="Author" />
            </Router>
        );
        const authorName = screen.getByText("Author");
        expect(authorName).toBeInTheDocument();
    });
});
