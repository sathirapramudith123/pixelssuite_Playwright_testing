const { test, expect } = require('@playwright/test');

test.describe('PixelsSuite Compress Tools UI Automation', () => {
  const compressUrl = 'https://www.pixelssuite.com/compress-image';
  const pngUrl = 'https://www.pixelssuite.com/png-compressor';
  const gifUrl = 'https://www.pixelssuite.com/gif-compressor';

  async function openPage(page, url) {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('body')).toBeVisible();
    await page.waitForTimeout(2000);
  }

  test('TC_01 - Verify Compress Image Page UI', async ({ page }) => {
    await openPage(page, compressUrl);

    await expect(page.getByText('Compress Image', { exact: true })).toBeVisible();

    await expect(page.getByText('Drag and drop your file here', { exact: true })).toBeVisible();
    await expect(page.getByText('or click to browse from your device', { exact: true })).toBeVisible();
    await expect(page.getByText('Select files', { exact: true })).toBeVisible();

    await expect(page.getByText(/Supported:/)).toBeVisible();

    await expect(page.getByText('Compress', { exact: true }).last()).toBeVisible();
    await expect(page.getByText('Preview', { exact: true })).toBeVisible();

    await expect(page.getByText(/Select an image to compress/)).toBeVisible();
    await expect(page.getByText(/No image yet/)).toBeVisible();

    await page.screenshot({
      path: 'screenshots/TC_01_Compress_Image_UI.png',
      fullPage: true
    });
  });

  test('TC_02 - Verify PNG Compressor Page UI', async ({ page }) => {
    await openPage(page, pngUrl);

    await expect(page.getByText('PNG Compressor', { exact: true })).toBeVisible();

    await expect(page.getByText('Drag and drop your file here', { exact: true })).toBeVisible();
    await expect(page.getByText('Select files', { exact: true })).toBeVisible();

    await expect(page.getByText(/Supported:/)).toBeVisible();

    await expect(page.getByText('Compress', { exact: true }).last()).toBeVisible();
    await expect(page.getByText('Preview', { exact: true })).toBeVisible();

    await expect(page.getByText(/Select a PNG image to re-encode/)).toBeVisible();
    await expect(page.getByText(/No image yet/)).toBeVisible();

    await page.screenshot({
      path: 'screenshots/TC_02_PNG_Compressor_UI.png',
      fullPage: true
    });
  });

  test('TC_03 - Verify GIF Compressor Page UI', async ({ page }) => {
    await openPage(page, gifUrl);

    await expect(page.getByText('GIF Compressor', { exact: true })).toBeVisible();

    await expect(page.getByText('Drag and drop your file here', { exact: true })).toBeVisible();
    await expect(page.getByText('Select GIF', { exact: true })).toBeVisible();

    await expect(page.getByText(/Supported:/)).toBeVisible();

    await expect(page.getByText('Compress', { exact: true }).last()).toBeVisible();
    await expect(page.getByText('Preview', { exact: true })).toBeVisible();

    await expect(page.getByText(/Select a GIF to compress/)).toBeVisible();
    await expect(page.getByText(/No GIF yet/)).toBeVisible();

    await page.screenshot({
      path: 'screenshots/TC_03_GIF_Compressor_UI.png',
      fullPage: true
    });
  });

  test('TC_04 - Verify Direct URL Handling', async ({ page }) => {
    await openPage(page, compressUrl);
    await page.screenshot({
      path: 'screenshots/TC_04_Compress_URL.png',
      fullPage: true
    });

    await openPage(page, pngUrl);
    await page.screenshot({
      path: 'screenshots/TC_04_PNG_URL.png',
      fullPage: true
    });

    await openPage(page, gifUrl);
    await page.screenshot({
      path: 'screenshots/TC_04_GIF_URL.png',
      fullPage: true
    });
  });
});