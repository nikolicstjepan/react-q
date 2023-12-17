import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import PostSearch from "@/components/post-search";
import usePostSearch from "@/components/post-search/use-post-search";

jest.mock("@/components/post-search/use-post-search", () => {
    return jest.fn(() => ["test", jest.fn()]);
});

describe("PostSearch", () => {
    test("renders without crashing", () => {
        const { container } = render(
            <Router>
                <PostSearch />
            </Router>
        );
        expect(container).toBeTruthy();
    });

    test("renders the search input", () => {
        render(
            <Router>
                <PostSearch />
            </Router>
        );
        const input = screen.getByRole("textbox");
        expect(input).toBeInTheDocument();
    });

    test("renders correct search value", () => {
        (usePostSearch as jest.Mock).mockReturnValue(["test23", jest.fn()]);

        render(
            <Router>
                <PostSearch />
            </Router>
        );
        const input = screen.getByRole("textbox");
        expect(input).toHaveValue("test23");
    });

    test("calls setSearch on change", async () => {
        const setSearch = jest.fn();
        (usePostSearch as jest.Mock).mockReturnValue(["test23", setSearch]);

        render(
            <Router>
                <PostSearch />
            </Router>
        );
        const input = screen.getByRole("textbox") as HTMLInputElement;
        fireEvent.change(input, { target: { value: "test" } });
        expect(setSearch).toHaveBeenCalledWith("test");
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});
