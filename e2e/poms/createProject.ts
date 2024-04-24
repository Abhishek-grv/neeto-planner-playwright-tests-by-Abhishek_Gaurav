import { Page, expect } from "@playwright/test";

interface ProjectData {
  name: string;
  description: string;
}

export default class ProjectPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async createProject(projectData: ProjectData) {
    const { name, description } = projectData;
    
    await this.page.click('button:has-text("Add new project")');
    await this.page.fill('[placeholder="Enter project name"]', name);
    await this.page.fill('[placeholder="Enter description"]', description);
    await this.page.click('button:has-text("Save changes")');
    // Wait for success message or confirmation of project creation
    await expect(this.page.getByText(name)).toBeVisible();
  };
}
