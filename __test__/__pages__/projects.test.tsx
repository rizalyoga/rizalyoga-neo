import { expect, describe, it, beforeEach, afterEach } from "bun:test";
import { render, screen, fireEvent } from "@testing-library/react";
import Projects from "@/app/components/pages/Projects";
import { myProjects } from "@/app/data/projects";

// Mocking sessionStorage
const sessionStorageMock = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string) => {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, "sessionStorage", {
  value: sessionStorageMock,
});

describe("Projects section test", () => {
  beforeEach(() => {
    // Render the component before each test
    render(<Projects />);
  });

  afterEach(() => {
    // Clear session storage after each test
    window.sessionStorage.clear();
  });

  it("should render title, description, and initial projects", () => {
    // Check for title and description
    const title = screen.getByRole("heading", { name: /PROJECTS/i });
    const description = screen.getByText(
      /A showcase of my recent work and side projects/i
    );
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();

    // Check for the initial number of project cards (first 6)
    // The cards are divs with a specific structure, we can find them by looking for their titles
    const projectCards = screen.getAllByRole("heading", { level: 3 });
    expect(projectCards.length).toBe(6);

    // Check for the "VIEW ALL PROJECTS" button
    const viewAllButton = screen.getByRole("button", {
      name: /VIEW ALL PROJECTS/i,
    });
    expect(viewAllButton).toBeInTheDocument();
  });

  it('should show all projects when "VIEW ALL PROJECTS" is clicked', () => {
    // Initial state: 6 projects
    const projectCards = screen.getAllByRole("heading", { level: 3 });
    expect(projectCards.length).toBe(6);

    // Find and click the "VIEW ALL" button
    const viewAllButton = screen.getByRole("button", {
      name: /VIEW ALL PROJECTS/i,
    });
    fireEvent.click(viewAllButton);

    // After click: all projects should be visible
    const allProjectCards = screen.getAllByRole("heading", { level: 3 });
    expect(allProjectCards.length).toBe(myProjects.length);

    // The button text should change to "HIDE PROJECTS"
    const hideButton = screen.getByRole("button", { name: /HIDE PROJECTS/i });
    expect(hideButton).toBeInTheDocument();
  });

  it('should hide projects when "HIDE PROJECTS" is clicked', () => {
    // First, click to show all projects
    const viewAllButton = screen.getByRole("button", {
      name: /VIEW ALL PROJECTS/i,
    });
    fireEvent.click(viewAllButton);

    // Sanity check: all projects are shown
    const allProjectCards = screen.getAllByRole("heading", { level: 3 });
    expect(allProjectCards.length).toBe(myProjects.length);

    // Find and click the "HIDE" button
    const hideButton = screen.getByRole("button", { name: /HIDE PROJECTS/i });
    fireEvent.click(hideButton);

    // After click: only 6 projects should be visible again
    const initialProjectCards = screen.getAllByRole("heading", { level: 3 });
    expect(initialProjectCards.length).toBe(6);

    // The button text should change back to "VIEW ALL PROJECTS"
    const viewAllButtonAgain = screen.getByRole("button", {
      name: /VIEW ALL PROJECTS/i,
    });
    expect(viewAllButtonAgain).toBeInTheDocument();
  });

  it("should initialize with all projects visible if sessionStorage is set", () => {
    // Set sessionStorage before rendering
    window.sessionStorage.setItem("showAllProjects", "true");
    render(<Projects />);

    // Check that all projects are visible from the start
    const allProjectCards = screen.getAllByRole("heading", { level: 3 });
    expect(allProjectCards.length).toBe(myProjects.length);

    // Check that the button shows "HIDE PROJECTS"
    const hideButton = screen.getByRole("button", { name: /HIDE PROJECTS/i });
    expect(hideButton).toBeInTheDocument();
  });
});
