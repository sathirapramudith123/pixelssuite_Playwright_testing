const { test, expect } = require('@playwright/test');

test.describe('PixelsSuite Image Converter UI Automation', () => {
  const pages = [
    { url: 'https://www.pixelssuite.com/convert-to-jpg', name: 'jpg' },
    { url: 'https://www.pixelssuite.com/convert-to-png', name: 'png' },
    { url: 'https://www.pixelssuite.com/convert-to-webp', name: 'webp' }
  ];

  async function openPage(page, url) {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('body')).toBeVisible();
    await page.waitForTimeout(2000);
  }

  for (const p of pages) {
    test(`TC_01 - Page Load - ${p.name}`, async ({ page }) => {
      await openPage(page, p.url);
      await expect(page.getByText('Convert Image', { exact: true })).toBeVisible();
    });

    test(`TC_02 - Upload Section - ${p.name}`, async ({ page }) => {
      await openPage(page, p.url);

      await expect(page.getByText('Drag and drop your file here', { exact: true })).toBeVisible();
      await expect(page.getByText('Select files', { exact: true })).toBeVisible();
      await expect(page.getByText(/Supported:/)).toBeVisible();

      await page.screenshot({
        path: `screenshots/TC_02_${p.name}.png`,
        fullPage: true
      });
    });

    test(`TC_03 - Panels - ${p.name}`, async ({ page }) => {
      await openPage(page, p.url);

      await expect(page.getByText('Convert', { exact: true }).last()).toBeVisible();
      await expect(page.getByText('Preview', { exact: true })).toBeVisible();
      await expect(page.getByText(/Select an image to convert/)).toBeVisible();
      await expect(page.getByText(/No image yet/)).toBeVisible();

      await page.screenshot({
        path: `screenshots/TC_03_${p.name}.png`,
        fullPage: true
      });
    });
  }
});