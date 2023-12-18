import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import ErrorLayout from "@/layout/error-layout/error-layout";

describe("ErrorLayout", () => {
    test("renders without crashing", () => {
        const { container, asFragment } = render(
            <Router>
                <ErrorLayout>
                    <span>Hello, World!</span>
                </ErrorLayout>
            </Router>
        );
        expect(container).toBeTruthy();
        expect(asFragment()).toMatchSnapshot();
    });

    test("renders the correct child", () => {
        render(
            <Router>
                <ErrorLayout>
                    <span>Hello, World!</span>
                </ErrorLayout>
            </Router>
        );
        expect(screen.getByText("Hello, World!")).toBeInTheDocument();
    });

    test("wraps children with the error-layout class", () => {
        render(
            <Router>
                <ErrorLayout>
                    <span>Hello, World!</span>
                </ErrorLayout>
            </Router>
        );
        const child = screen.getByText("Hello, World!");
        expect(child.parentElement).toHaveClass("error-layout");
    });
});
