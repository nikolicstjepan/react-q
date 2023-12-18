import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "@/layout/base-layout/base-layout";

describe("BaseLayout", () => {
    test("renders without crashing", () => {
        const { container, asFragment } = render(
            <Router>
                <Layout>
                    <span>Hello, World!</span>
                </Layout>
            </Router>
        );
        expect(container).toBeTruthy();
        expect(asFragment()).toMatchSnapshot();
    });

    test("renders the correct child", () => {
        render(
            <Router>
                <Layout>
                    <span>Hello, World!</span>
                </Layout>
            </Router>
        );
        expect(screen.getByText("Hello, World!")).toBeInTheDocument();
    });

    test("renders multiple children correctly", () => {
        render(
            <Router>
                <Layout>
                    <span>Hello, World!</span>
                    <span>Goodbye, World!</span>
                </Layout>
            </Router>
        );
        expect(screen.getByText("Hello, World!")).toBeInTheDocument();
        expect(screen.getByText("Goodbye, World!")).toBeInTheDocument();
    });
});
