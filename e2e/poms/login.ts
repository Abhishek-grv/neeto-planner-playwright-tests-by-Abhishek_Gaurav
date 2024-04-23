import { Page, expect } from "@playwright/test";

interface UserDetails {
    email: string;
    otp: string;
}

export class LoginPage {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

loginAndVerifyUser = async ({ email, otp }: UserDetails): Promise<void> => {
    await this.page.getByPlaceholder('Please enter your email').fill(email);
    await this.page.locator('[data-test-id="neeto-auth-login-button"]').click();
    await this.page.getByRole("textbox").fill(otp);
    
    // verifying logged in user
    await expect(this.page.getByTestId('main-header')).toBeVisible(({
        timeout: 50000,
    }))
}
}