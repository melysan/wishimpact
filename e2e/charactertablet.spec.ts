import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: { width: 820, height: 1180 }
})

test.describe("Testing on Character Page - iPad Air", () => {
    test('Check to see if cryo h2 header is correct font family', async ({ page }) => {
        await page.goto('http://localhost:3000/characters')

        const elementTitle = page.locator('#cryoElement');
        const checkFontFamily = await elementTitle.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("font-family");

        });
        console.log(checkFontFamily)
        expect(checkFontFamily).toBe(`"Courier New", Courier, monospace`);
    })

    test('Check to see primogem counter position is correct', async ({ page }) => {
        await page.goto('http://localhost:3000/characters')

        const primogemCount = page.locator("#primogemCounter");
        const checkPosition = await primogemCount.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("position");

        });
        console.log(checkPosition)
        expect(checkPosition).toBe("absolute");
    })
})


