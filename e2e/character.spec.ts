import { test, expect } from '@playwright/test'


test.describe("Testing on Character Page", () => {
    test('Check to see if character page has correct favicon', async ({ page }) => {
        await page.goto('http://localhost:3000/characters')

        const wishImpactFavicon = page.locator('link[rel="icon"]');
        await expect(wishImpactFavicon).toHaveAttribute('href', '/Wish_Impact_Icon.svg')
    })
    test('Check to see if meta tag description is correct', async ({ page }) => {
        // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
        await page.goto('http://localhost:3000/characters')

        const metaTagDescription = page.locator('meta[name="description"]')
        await expect(metaTagDescription).toHaveAttribute("content", "View All Genshin Characters")
    })

})
