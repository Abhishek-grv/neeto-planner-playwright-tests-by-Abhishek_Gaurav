import { test } from "../fixtures";
import { faker } from "@faker-js/faker";
import { EMAIL } from "../../contents/selector";
// import { LoginPage } from "../poms/login";
import { STORAGE_STATE } from "../../playwright.config";

import ProjectPage from "../poms/createProject";

test.describe("Create a new project ", () => {
  let projectName: string;
  let projectDescription: string;
  let randomOtp:string;

  test.beforeEach(() => {
    projectName = faker.word.words({ count: 5 });
    projectDescription = faker.lorem.paragraph();
    randomOtp=faker.string.numeric({ length: 6});
  });

  test("should create a new project", async ({ page,loginPage }) => {
    await page.goto("/");

    const projectPage = new ProjectPage(page);

    const projectData = {
      name: projectName,
      description: projectDescription,
    };
    await loginPage.loginAndVerifyUser({ EMAIL, otp: randomOtp});

    await projectPage.createProject(projectData);
    await page.context().storageState({path:STORAGE_STATE});
  });
});