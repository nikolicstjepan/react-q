import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Loader from "@/components/loader";

describe("Loader", () => {
    test("renders without crashing", () => {
        const { container } = render(
            <Router>
                <Loader />
            </Router>
        );
        expect(container).toBeTruthy();
    });

    test("renders the loader", () => {
        render(<Loader />);
        const loader = screen.getByRole("status");
        expect(loader).toBeInTheDocument();
    });

    test("renders the visually hidden text", () => {
        render(<Loader />);
        const hiddenText = screen.getByText("Loading...");
        expect(hiddenText).toBeInTheDocument();
    });
});
