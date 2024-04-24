import { defineConfig, devices } from '@playwright/test';

export const STORAGE_STATE = "./auth/session.json";

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  timeout:300000,
  use: {
    baseURL: 'https://abhishek-gaurav-iiit-bbsr.neetoplanner.net/',

    trace: 'on-first-retry',
    testIdAttribute : 'data-test-id'
  },

  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },
    {
      name: "login",
      use: { ...devices["Desktop Chrome"] },
      testMatch: "**/login.setup.ts",
    },
    {
      name: "teardown",
      use: { ...devices["Desktop Chrome"] },
      testMatch: "**/global.teardown.ts",
    },
    {
      name: "Logged In tests",
      use: { ...devices["Desktop Chrome"], storageState: STORAGE_STATE },
      dependencies: ["login"],
      teardown: "teardown",
      testMatch: "**/*.spec.ts",
      testIgnore:"**/.login.setup.ts",
      
    }

 
  ],
});

