const { test, expect } = require('@playwright/test');

test.describe('PixelsSuite UI Automation Test Suite', () => {
  const resizeUrl = 'https://www.pixelssuite.com/resize-image';
  const bulkResizeUrl = 'https://www.pixelssuite.com/bulk-resize';
  const enlargerUrl = 'https://www.pixelssuite.com/image-enlarger';

  async function visitPage(page, url) {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle');
    await expect(page.locator('body')).toBeVisible();
  }

  // reusable locator for supported formats
  const supportedFormats = /Supported:.*PNG.*JPG.*WEBP/i;

  test('TC_01 - Verify Resize Image Page UI', async ({ page }) => {
    await visitPage(page, resizeUrl);

    await expect(page.getByText('Resize Image')).toBeVisible();

    await expect(page.getByText('Drag and drop your file here')).toBeVisible();
    await expect(page.getByText('or click to browse from your device')).toBeVisible();
    await expect(page.getByText('Select files')).toBeVisible();

    await expect(page.getByText(supportedFormats)).toBeVisible();

    await expect(page.getByText('Resize').last()).toBeVisible();
    await expect(page.getByText(/Select an image to configure size/i)).toBeVisible();

    await expect(page.getByText('Preview')).toBeVisible();
    await expect(page.getByText(/No image yet/i)).toBeVisible();

    await page.screenshot({
      path: 'screenshots/TC_01_Resize_Image_UI.png',
      fullPage: true
    });
  });

  test('TC_02 - Verify Bulk Resize Page UI', async ({ page }) => {
    await visitPage(page, bulkResizeUrl);

    await expect(page.getByText('Bulk Resize')).toBeVisible();

    await expect(page.getByText('Files')).toBeVisible();
    await expect(page.getByText('Drag and drop your file here')).toBeVisible();
    await expect(page.getByText('or click to browse from your device')).toBeVisible();
    await expect(page.getByText('Select images')).toBeVisible();

    await expect(page.getByText(supportedFormats)).toBeVisible();
    await expect(page.getByText(/Select multiple images to resize/i)).toBeVisible();

    await expect(page.getByText('Options')).toBeVisible();
    await expect(page.locator('input[placeholder="Width"]')).toBeVisible();
    await expect(page.locator('input[placeholder="Height"]')).toBeVisible();

    await expect(page.locator('input[type="checkbox"]')).toBeVisible();
    await expect(page.getByText('Keep aspect')).toBeVisible();

    await expect(page.getByText('Process & Download')).toBeVisible();

    await page.screenshot({
      path: 'screenshots/TC_02_Bulk_Resize_UI.png',
      fullPage: true
    });
  });

  test('TC_03 - Verify Image Enlarger Page UI', async ({ page }) => {
    await visitPage(page, enlargerUrl);

    await expect(page.getByText('Image Enlarger')).toBeVisible();

    await expect(page.getByText('Drag and drop your file here')).toBeVisible();
    await expect(page.getByText('or click to browse from your device')).toBeVisible();
    await expect(page.getByText('Select files')).toBeVisible();

    await expect(page.getByText(supportedFormats)).toBeVisible();

    await expect(page.getByText('Enlarge').last()).toBeVisible();
    await expect(page.getByText(/Select an image to enlarge/i)).toBeVisible();

    await expect(page.getByText('Preview')).toBeVisible();
    await expect(page.getByText(/No image yet/i)).toBeVisible();

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