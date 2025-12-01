import { expect, describe, it, beforeEach } from "bun:test";
import { render, screen } from "@testing-library/react";
import ProjectCard from "@/app/components/cards/ProjectCard";

describe("Project card test", () => {
  beforeEach(() => {
    render(
      <ProjectCard
        id="test-project"
        color="#000"
        cover="/assets/portofolio-cover/github.png"
        title="Test Project"
        description="Test description project"
        githubUrl="https://demo-github.app"
        demoUrl="https://demo-vercel.app"
        videoUrl="https://demo-vercel.video"
        technologies={["jwt", "project"]}
        features={["responsive"]}
      />
    );
  });

  it("should render card", async () => {
    const projectCardContainer = screen.getAllByTestId("project-card");

    await expect(projectCardContainer).toHaveRole("heading");
  });
});
