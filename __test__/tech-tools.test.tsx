import { expect, describe, it, beforeEach } from "bun:test";
import { render, screen } from "@testing-library/react";
import Technologies from "@/app/components/pages/Technologies";

describe("Technologies section test", () => {
  beforeEach(() => {
    render(<Technologies />);
  });

  it("should render title and description section", () => {
    const title = screen.getByRole("heading", { level: 2 });
    const desc = screen.getByText(
      /Tools and technologies I use to bring ideas to life/i
    );

    expect(title).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });

  it("should render list of technologies ", () => {
    const tech1 = screen.getByText("React");
    const tech2 = screen.getByText("Next.js");
    const tech3 = screen.getByText("Vue.js");
    const tech4 = screen.getByText("React Native");

    expect(tech1).toHaveTextContent("React");
    expect(tech2).toHaveTextContent("Next.js");
    expect(tech3).toHaveTextContent("Vue.js");
    expect(tech4).toHaveTextContent("React Native");

    const teshnologiesContainerList = screen.getByTestId("tech-card-container");
    expect(teshnologiesContainerList.querySelectorAll("h3")).toHaveLength(24);
  });
});
