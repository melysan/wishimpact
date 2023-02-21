import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR']
})

test.describe("Testing on Home Page - iPhone XR", () => {
    test('Check to see if home page contain the image inside header', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        await expect(page.locator('h1 > img')).toHaveCount(1);
    })

    test('Check to see if wish container changes to 50% border radius', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const wishImpactBox = page.locator('#wishContainer');
        const checkBorderRadius = await wishImpactBox.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("border-radius");

        });
        console.log(checkBorderRadius)
        expect(checkBorderRadius).toBe('50%');
    })

})