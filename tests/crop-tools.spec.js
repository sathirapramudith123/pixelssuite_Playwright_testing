const { test, expect } = require('@playwright/test');

test.describe('Crop Tools UI Automation', () => {
  const cropPages = [
    { url: 'https://www.pixelssuite.com/crop-jpg', heading: 'Crop JPG' },
    { url: 'https://www.pixelssuite.com/crop-png', heading: 'Crop PNG' },
    { url: 'https://www.pixelssuite.com/crop-webp', heading: 'Crop WebP' }
  ];

  async function openPage(page, url) {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('body')).toBeVisible();
    await page.waitForTimeout(2000);
  }

  for (const cropPage of cropPages) {
    test(`TC_01 - Verify Page Load - ${cropPage.heading}`, async ({ page }) => {
      await openPage(page, cropPage.url);
      await expect(page.getByText(cropPage.heading, { exact: true })).toBeVisible();
    });

    test(`TC_02 - Verify Upload Section - ${cropPage.heading}`, async ({ page }) => {
      await openPage(page, cropPage.url);

      await expect(page.getByText(cropPage.heading, { exact: true })).toBeVisible();
      await expect(page.getByText('Drag and drop your file here', { exact: true })).toBeVisible();
      await expect(page.getByText(/click to browse from your device/)).toBeVisible();
      await expect(page.getByText('Select files', { exact: true })).toBeVisible();
      await expect(page.getByText(/Supported:/)).toBeVisible();

      await page.screenshot({
        path: `screenshots/TC_02_Upload_${cropPage.heading.replace(/\s+/g, '_')}.png`,
        fullPage: true
      });
    });

    test(`TC_03 - Verify Panels - ${cropPage.heading}`, async ({ page }) => {
      await openPage(page, cropPage.url);

      await expect(page.getByText('Crop', { exact: true }).last()).toBeVisible();
      await expect(page.getByText('Preview', { exact: true })).toBeVisible();
      await expect(page.getByText(/Select an image to crop/)).toBeVisible();
      await expect(page.getByText(/No image yet/)).toBeVisible();

      await page.screenshot({
        path: `screenshots/TC_03_Panels_${cropPage.heading.replace(/\s+/g, '_')}.png`,
        fullPage: true
      });
    });
  }
});