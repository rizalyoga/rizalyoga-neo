import { expect, describe, it, beforeEach } from "bun:test";
import { render, screen } from "@testing-library/react";
import AboutMe from "@/app/components/pages/AboutMe";

describe("About me section test", () => {
  beforeEach(() => {
    render(<AboutMe />);
  });

  it("should render Title and description of About me section", () => {
    const title = screen.getByRole("heading", { level: 2 });
    const desc = screen.getByText(
      /My story, skillset, and career goals in tech/i
    );

    expect(title).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });

  it("should render description of rizalyoga", () => {
    const desc = screen.getByText(
      /graduate with a Bachelor's degree in Informatics from Universitas Muhammadiyah Malang./i
    );

    expect(desc).toBeInTheDocument();
  });
});
