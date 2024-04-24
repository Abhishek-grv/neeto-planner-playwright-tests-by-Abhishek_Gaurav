
import { EMAIL, INPUT_SELECTOR, TEXT_SELECTOR } from "../../contents/selector";
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

        await this.page.getByTestId(INPUT_SELECTOR.emailInput).fill(email);
        await this.page.getByTestId(TEXT_SELECTOR.loginBtn).click();
        await this.page.locator(`[placeholder="${INPUT_SELECTOR.otpInput}"]`).fill(otp);


    }
}
