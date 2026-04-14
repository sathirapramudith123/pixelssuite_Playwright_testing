const { test, expect } = require('@playwright/test');

test.describe('PixelsSuite Home Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.pixelssuite.com/', {
      waitUntil: 'domcontentloaded'
    });

    await expect(page.locator('body')).toBeVisible();
  });

  test('verifyHomePageLoadsSuccessfully', async ({ page }) => {
    await expect(page.locator('body')).toBeVisible();

    const title = await page.title();
    console.log('Page Title: ' + title);
    expect(title.trim()).not.toBe('');

    const currentUrl = page.url();
    console.log('Current URL: ' + currentUrl);
    expect(currentUrl).toContain('pixelssuite.com');
  });

  test('verifyHomePageContentDisplayed', async ({ page }) => {
    await expect(page.locator('body')).toBeVisible();

    const links = await page.locator('a').count();
    console.log('Total links found: ' + links);
    expect(links).toBeGreaterThan(0);
  });
});