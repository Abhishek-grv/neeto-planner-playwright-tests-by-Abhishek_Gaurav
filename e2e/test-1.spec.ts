import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.neetoauth.net/?login_organization_id=a5671f13-f6b9-4aa8-b7d8-2d6818795fee');
  await page.goto('https://app.neetoauth.net/login?login_organization_id=a5671f13-f6b9-4aa8-b7d8-2d6818795fee');
  await page.locator('[data-test-id="neeto-auth-email-input-field"]').click();
  await page.locator('[data-test-id="neeto-auth-email-input-field"]').fill('cpts9gnqty9-planner-abhishek_gaurav-iiit_bbsr@bigbinary.com');
  await page.locator('[data-test-id="neeto-auth-login-button"]').click();
  await page.getByPlaceholder('Enter 6 digit login code').fill('123456');
  await page.goto('https://abhishek-gaurav-iiit-bbsr.neetoplanner.net/');
  await page.goto('https://abhishek-gaurav-iiit-bbsr.neetoplanner.net/dashboard/active');
  await page.getByRole('button', { name: 'Add new project' }).click();
  await page.getByTestId('close-button').click();
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