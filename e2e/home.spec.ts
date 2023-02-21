import { test, expect } from '@playwright/test'


test.describe("Testing on Home Page", () => {
    test('Check to see if home page contains a blue button', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const wishButton = page.locator('#gacha');

        const checkButtonColour = await wishButton.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color")
        })

        console.log(checkButtonColour);
        expect(checkButtonColour).toBe("rgb(0, 0, 0)");
    })

    test('Check to see if home page contain Wish Impact image', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const wishImpactTitle = page.locator('#wishImpactLogo');
        const checkLogoTitle = await wishImpactTitle.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("flex-direction");

        });
        console.log(checkLogoTitle)
        expect(checkLogoTitle).toBe('row');
    })
})
