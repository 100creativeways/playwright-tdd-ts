import { test, expect } from "../../utilities/sep-test-utilities";
import { StartApplicationPage } from "../../pages/StartApplicationPage";
import { LeftMainPage } from "../../pages/LeftMainPage";


test.describe('User Story 2', () => {
 let startApplicationPage: StartApplicationPage;
 let leftMainPage: LeftMainPage;

test.beforeEach(async ({ page }) => {
    startApplicationPage = new StartApplicationPage(page);
});


    test('Test case 1', async ({ page }) => {
       startApplicationPage.enterEmail('test@example.com');
    });

    test('Test case 2', async ({ page }) => {
        startApplicationPage.enterPhoneNumber('1234567890');
    });

    test('Test case 3', async ({ page }) => {
        startApplicationPage.enterFirstName('John');

    });
    test('Test case 4', async ({ page }) => {
        startApplicationPage.enterLastName('Smith');
    });
});