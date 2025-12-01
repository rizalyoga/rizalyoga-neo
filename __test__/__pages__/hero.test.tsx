import { expect, describe, it, beforeEach } from "bun:test";
import { render, screen } from "@testing-library/react";
import HeroSection from "@/app/components/pages/Hero";

describe("Hero section test", () => {
  beforeEach(() => {
    render(<HeroSection />);
  });

  it("should render greeting, name, and description of Rizalyoga", () => {
    const greeting = screen.getByRole("heading", { level: 2 });
    const name = screen.getByRole("heading", { level: 1 });
    const desc = screen.getByText(/Passionate about creating beautiful/);

    expect(greeting).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });

  it("should render child components", async () => {
    // Test for TextAnimationHero, waits for the text to be typed
    const animatedText = await screen.findByText(
      "Frontend Developer",
      {},
      { timeout: 3000 }
    );
    expect(animatedText).toBeInTheDocument();

    // Test for TechGrid, finds one of the technology titles
    const techGridElement = await screen.findByTitle("React");
    expect(techGridElement).toBeInTheDocument();
  });

  describe("CTA and Social Links", () => {
    it("should have correct 'Download CV' links for both desktop and mobile", () => {
      const downloadCvLinks = screen.getAllByRole("link", {
        name: /Download CV/i,
      });
      // checks for both the text button and the icon-only button
      expect(downloadCvLinks).toHaveLength(2);

      // Explicitly test each link to avoid loop context issues
      expect(downloadCvLinks[0].getAttribute("href")).toBe(
        "https://drive.google.com/file/d/13ooAoP6iAoM9aCtm1AivANafl9Wb8Lkw/view?usp=drive_link"
      );
      expect(downloadCvLinks[0].getAttribute("target")).toBe("_blank");
      expect(downloadCvLinks[0].getAttribute("rel")).toBe(
        "noopener noreferrer"
      );

      expect(downloadCvLinks[1].getAttribute("href")).toBe(
        "https://drive.google.com/file/d/13ooAoP6iAoM9aCtm1AivANafl9Wb8Lkw/view?usp=drive_link"
      );
      expect(downloadCvLinks[1].getAttribute("target")).toBe("_blank");
      expect(downloadCvLinks[1].getAttribute("rel")).toBe(
        "noopener noreferrer"
      );
    });

    it("should have a 'Contact Me' link that navigates to the contact section", () => {
      const contactMeLink = screen.getByRole("link", { name: /Contact Me/i });
      expect(contactMeLink).toHaveAttribute("href", "#contact");
      expect(contactMeLink).toHaveAttribute("target", "_self");
      expect(contactMeLink).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("should have a social link to GitHub", () => {
      const githubLink = screen.getByRole("link", { name: /github/i });
      expect(githubLink).toBeInTheDocument();
      expect(githubLink).toHaveAttribute(
        "href",
        "https://github.com/rizalyoga"
      );
      expect(githubLink).toHaveAttribute("target", "_blank");
    });

    it("should have a social link to LinkedIn", () => {
      const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
      expect(linkedinLink).toBeInTheDocument();
      expect(linkedinLink).toHaveAttribute(
        "href",
        "https://linkedin.com/in/rizalyoga"
      );
      expect(linkedinLink).toHaveAttribute("target", "_blank");
    });
  });
});
