import { test } from "../fixtures/index";
import { STORAGE_STATE } from "../../playwright.config";
import { faker } from "@faker-js/faker";
import { EMAIL } from "../../contents/selector";

test.describe("Login page", () => {
    let randomOtp:string;

    test.beforeEach("Generating a random otp of 6 digit",async()=>{
        randomOtp=faker.string.numeric({ length: 6});
    });

    test("should login with the correct credentials",async({page,loginPage})=>{
        
        // Step 1: Navigate to the login page
        await page.goto("/");

        // Step 2: Fill in the email
        await loginPage.loginAndVerifyUser({ EMAIL, otp: randomOtp});
       
        // Step 3: Save the storage state
        await page.context().storageState({path:STORAGE_STATE});
    });   
});

