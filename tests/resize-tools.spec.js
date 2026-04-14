const { test, expect } = require('@playwright/test');

test.describe('PixelsSuite UI Automation Test Suite', () => {
  const resizeUrl = 'https://www.pixelssuite.com/resize-image';
  const bulkResizeUrl = 'https://www.pixelssuite.com/bulk-resize';
  const enlargerUrl = 'https://www.pixelssuite.com/image-enlarger';

  async function visitPage(page, url) {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('body')).toBeVisible();
    await page.waitForTimeout(2000);
  }

  test('TC_01 - Verify Resize Image Page UI', async ({ page }) => {
    await visitPage(page, resizeUrl);

    await expect(page.getByText('Resize Image', { exact: true })).toBeVisible();

    await expect(page.getByText('Drag and drop your file here', { exact: true })).toBeVisible();
    await expect(page.getByText('or click to browse from your device', { exact: true })).toBeVisible();
    await expect(page.getByText('Select files', { exact: true })).toBeVisible();

    await expect(page.getByText('Supported: PNG, JPG, WEBP', { exact: true })).toBeVisible();

    await expect(page.getByText('Resize', { exact: true }).last()).toBeVisible();
    await expect(page.getByText(/Select an image to configure size/)).toBeVisible();

    await expect(page.getByText('Preview', { exact: true })).toBeVisible();
    await expect(page.getByText(/No image yet/)).toBeVisible();

    await page.screenshot({
      path: 'screenshots/TC_01_Resize_Image_UI.png',
      fullPage: true
    });
  });

  test('TC_02 - Verify Bulk Resize Page UI', async ({ page }) => {
    await visitPage(page, bulkResizeUrl);

    await expect(page.getByText('Bulk Resize', { exact: true })).toBeVisible();

    await expect(page.getByText('Files', { exact: true })).toBeVisible();
    await expect(page.getByText('Drag and drop your file here', { exact: true })).toBeVisible();
    await expect(page.getByText('or click to browse from your device', { exact: true })).toBeVisible();
    await expect(page.getByText('Select images', { exact: true })).toBeVisible();

    await expect(page.getByText('Supported: PNG, JPG, WEBP', { exact: true })).toBeVisible();
    await expect(page.getByText(/Select multiple images to resize/)).toBeVisible();

    await expect(page.getByText('Options', { exact: true })).toBeVisible();
    await expect(page.locator('input[placeholder="Width"]')).toBeVisible();
    await expect(page.locator('input[placeholder="Height"]')).toBeVisible();

    await expect(page.locator('input[type="checkbox"]')).toBeVisible();
    await expect(page.getByText('Keep aspect', { exact: true })).toBeVisible();

    await expect(page.getByText('Process & Download', { exact: true })).toBeVisible();

    await page.screenshot({
      path: 'screenshots/TC_02_Bulk_Resize_UI.png',
      fullPage: true
    });
  });

  test('TC_03 - Verify Image Enlarger Page UI', async ({ page }) => {
    await visitPage(page, enlargerUrl);

    await expect(page.getByText('Image Enlarger', { exact: true })).toBeVisible();

    await expect(page.getByText('Drag and drop your file here', { exact: true })).toBeVisible();
    await expect(page.getByText('or click to browse from your device', { exact: true })).toBeVisible();
    await expect(page.getByText('Select files', { exact: true })).toBeVisible();

    await expect(page.getByText('Supported: PNG, JPG, WEBP', { exact: true })).toBeVisible();

    await expect(page.getByText('Enlarge', { exact: true }).last()).toBeVisible();
    await expect(page.getByText(/Select an image to enlarge/)).toBeVisible();

    await expect(page.getByText('Preview', { exact: true })).toBeVisible();
    await expect(page.getByText(/No image yet/)).toBeVisible();

    await page.screenshot({
      path: 'screenshots/TC_03_Image_Enlarger_UI.png',
      fullPage: true
    });
  });

  test('TC_04 - Verify Direct URL Status Handling', async ({ page }) => {
    await visitPage(page, resizeUrl);
    await page.screenshot({
      path: 'screenshots/TC_04_Resize_URL_Check.png',
      fullPage: true
    });

    await visitPage(page, bulkResizeUrl);
    await page.screenshot({
      path: 'screenshots/TC_04_Bulk_Resize_URL_Check.png',
      fullPage: true
    });

    await visitPage(page, enlargerUrl);
    await page.screenshot({
      path: 'screenshots/TC_04_Image_Enlarger_URL_Check.png',
      fullPage: true
    });
  });
});