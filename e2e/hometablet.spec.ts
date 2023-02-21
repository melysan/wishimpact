import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: { width: 820, height: 1180 }
})

test.describe("Testing on Home Page - iPad Air", () => {
    test("Check to see if footer contains name", async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const Footer = page.locator('#footer');

        const checkTextInsideFooter = await Footer.innerText();

        console.log(checkTextInsideFooter);
        expect(checkTextInsideFooter).toContain('© 2023 Melysa Nguyen');
    })

    test('Check to see if Make A Wish button text is font-weight 600', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const wishButton = page.locator('#gacha');
        const checkFontWeight = await wishButton.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("font-weight");

        });
        console.log(checkFontWeight)
        expect(checkFontWeight).toBe('600');
    })
})


