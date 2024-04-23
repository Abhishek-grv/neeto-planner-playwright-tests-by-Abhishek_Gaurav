import { test } from "../fixtures/index";
import { STORAGE_STATE } from "../../playwright.config";
import { faker } from "@faker-js/faker";

test.describe("Login page", () => {
    let randomOtp:string;

    test.beforeEach("Generating a random otp of 6 digit",async()=>{
        randomOtp=faker.string.numeric({ length: 6});
    });

    test("should login with the correct credentials",async({page,loginPage})=>{
        await page.goto("https://app.neetoauth.net/login");

        await loginPage.loginAndVerifyUser({ email: "cpts9gnqty9-planner-abhishek_gaurav-iiit_bbsr@bigbinary.com", otp: randomOtp});

        await page.context().storageState({path:STORAGE_STATE});
    });   
});


