import { test, expect } from '@playwright/test';
import { STORAGE_STATE } from "../../playwright.config";

test('test', async ({ page }) => {
  await page.goto('https://app.neetoauth.net/?login_organization_id=a5671f13-f6b9-4aa8-b7d8-2d6818795fee');
  await page.locator('[data-test-id="neeto-auth-email-input-field"]').click();
  await page.locator('[data-test-id="neeto-auth-email-input-field"]').fill('cpts9gnqty9-planner-abhishek_gaurav-iiit_bbsr@bigbinary.com');
  await page.locator('[data-test-id="neeto-auth-login-button"]').click();
  await page.getByPlaceholder('Enter 6 digit login code').fill('123456');
  await page.getByTestId('navlink-projects').click();
  await page.getByRole('button', { name: 'Add new project' }).click();
  await page.getByPlaceholder('Enter project name').fill('task2');
  await page.getByPlaceholder('Enter description').click();
  await page.getByPlaceholder('Enter description').fill('this is task 2 description');
  await page.locator('[data-test-id="save-changes-button"]').click();
  await page.getByTestId('navlink-projects').click();
  await page.getByTestId('neeto-molecules-header').click();
  await page.context().storageState({path:STORAGE_STATE});
});