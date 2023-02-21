import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR']
})

test.describe("Testing on Character Page - iPhone XR", () => {
    test('Check to see if character page contains correct amount of h2', async ({ page }) => {
        await page.goto('http://localhost:3000/characters')

        await expect(page.locator('h2')).toHaveCount(7);
    })

    test("Check to see if character page title has text-shadow", async ({ page }) => {
        await page.goto('http://localhost:3000/characters')

        const characterPageTitle = page.locator('h1');
        const checkTextShadow = await characterPageTitle.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("text-shadow");

        });
        console.log(checkTextShadow)
        expect(checkTextShadow).toBe('rgb(32, 129, 219) 1px 1px 2px, rgb(221, 126, 255) 0px 0px 4px');
    })

})