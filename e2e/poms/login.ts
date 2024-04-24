interface UserDetails {
    email: string;
    otp: string;
}
export class LoginPage {
    private page: any; 

    constructor(page: any) {
        this.page = page;
    }

    async loginAndVerifyUser({ email, otp }: UserDetails): Promise<void> {
        await this.page.getByTestId("neeto-auth-email-input-field").fill(email);
        await this.page.getByTestId("neeto-auth-login-button").click();
        await this.page.getByRole("textbox").fill(otp);
        
    }
}
