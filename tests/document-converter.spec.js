const { test, expect } = require('@playwright/test');

test.describe('PixelsSuite Document Converter UI Automation', () => {
  const imageToPdfUrl = 'https://www.pixelssuite.com/image-to-pdf';
  const pdfToWordUrl = 'https://www.pixelssuite.com/pdf-to-word';
  const wordToPdfUrl = 'https://www.pixelssuite.com/word-to-pdf';

  async function openPage(page, url) {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('body')).toBeVisible();
    await page.waitForTimeout(2000);
  }

  test('TC_01 - Verify Image to PDF Page UI', async ({ page }) => {
    await openPage(page, imageToPdfUrl);

    await expect(page.getByText('Image → PDF', { exact: true })).toBeVisible();
    await expect(page.getByText('Drag and drop your file here', { exact: true })).toBeVisible();
    await expect(page.getByText('Select Images', { exact: true })).toBeVisible();
    await expect(page.getByText('Selected Images', { exact: true })).toBeVisible();
    await expect(page.getByText('Preview', { exact: true })).toBeVisible();

    await page.screenshot({
      path: 'screenshots/TC_01_Image_to_PDF_UI.png',
      fullPage: true
    });
  });

  test('TC_02 - Verify PDF to Word Page UI', async ({ page }) => {
    await openPage(page, pdfToWordUrl);

    await expect(page.getByText('PDF → Word', { exact: true })).toBeVisible();
    await expect(page.getByText('Drag and drop your file here', { exact: true })).toBeVisible();
    await expect(page.getByText('Select PDF', { exact: true })).toBeVisible();
    await expect(page.getByText('Selected', { exact: true })).toBeVisible();

    await page.screenshot({
      path: 'screenshots/TC_02_PDF_to_Word_UI.png',
      fullPage: true
    });
  });

  test('TC_03 - Verify Word to PDF Page UI', async ({ page }) => {
    await openPage(page, wordToPdfUrl);

    await expect(page.getByText('Word → PDF', { exact: true })).toBeVisible();
    await expect(page.getByText('Drag and drop your file here', { exact: true })).toBeVisible();
    await expect(page.getByText('Select Word', { exact: true })).toBeVisible();
    await expect(page.getByText('Selected', { exact: true })).toBeVisible();

    await page.screenshot({
      path: 'screenshots/TC_03_Word_to_PDF_UI.png',
      fullPage: true
    });
  });
});