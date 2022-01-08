import { fireEvent, render, screen } from "@testing-library/react";
import MediaPlan from "../components/MediaPlan";
import Home from "../pages/index";

describe("Home", () => {
	it("renders the media plan", () => {
		render(<Home />);
		const mediaPlan = screen.getByTestId("media-plan");
		expect(mediaPlan).toBeInTheDocument();
	});

	it("renders the spending chart", () => {
		render(<Home />);
		const spendingChart = screen.getByTestId("spending-chart");
		expect(spendingChart).toBeInTheDocument();
	});
});

describe("Media Plan", () => {
	it("updates the total budget", () => {
		render(<MediaPlan />);
		const SEA = screen.getByTestId("SEA-budget");
		fireEvent.change(SEA, { target: { value: "23.50" } });
		const remarketing = screen.getByTestId("Remarketing-budget");
		fireEvent.change(remarketing, { target: { value: "10.25" } });
		const total = screen.getByTestId("total-budget");
		expect(total.textContent).toBe("33.75");
	});

	it("requires USD formatted input", () => {
		render(<MediaPlan />);
		const SEA = screen.getByTestId("SEA-budget");
		fireEvent.change(SEA, { target: { value: "abc" } });
		const error = screen.getByTestId("format-error");
		expect(error).toBeInTheDocument();
		const total = screen.getByTestId("total-budget");
		expect(total.textContent).toBe("0.00");
	});

	it("does not add invalid input to the total", () => {
		render(<MediaPlan />);
		const SEA = screen.getByTestId("SEA-budget");
		fireEvent.change(SEA, { target: { value: "abc" } });
		const total = screen.getByTestId("total-budget");
		expect(total.textContent).toBe("0.00");
	});
});
