const { test, expect } = require('@playwright/test');

test.describe('PixelsSuite More Tools UI Automation', () => {
  async function openPage(page, url) {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('body')).toBeVisible();
    await page.waitForTimeout(2000);
  }

  test('TC_01 - Meme Generator', async ({ page }) => {
    await openPage(page, 'https://www.pixelssuite.com/meme-generator');

    await expect(page.getByText('Meme Generator', { exact: true })).toBeVisible();
    await expect(page.getByText('Select files', { exact: true })).toBeVisible();
    await expect(page.getByText('Text & Style', { exact: true })).toBeVisible();
    await expect(page.getByText('Preview', { exact: true })).toBeVisible();

    await page.screenshot({
      path: 'screenshots/TC_01_Meme.png',
      fullPage: true
    });
  });

  test('TC_02 - Color Picker', async ({ page }) => {
    await openPage(page, 'https://www.pixelssuite.com/color-picker');

    await expect(page.getByText('Color Picker', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('RGB', { exact: true })).toBeVisible();
    await expect(page.getByText('HEX', { exact: true })).toBeVisible();

    await page.screenshot({
      path: 'screenshots/TC_02_Color.png',
      fullPage: true
    });
  });

  test('TC_03 - Rotate Image', async ({ page }) => {
    await openPage(page, 'https://www.pixelssuite.com/rotate-image');

    await expect(page.getByText('Rotate Image', { exact: true })).toBeVisible();
    await expect(page.getByText('Select files', { exact: true })).toBeVisible();
    await expect(page.getByText('Preview', { exact: true })).toBeVisible();

    await page.screenshot({
      path: 'screenshots/TC_03_Rotate.png',
      fullPage: true
    });
  });

  test('TC_04 - Flip Image', async ({ page }) => {
    await openPage(page, 'https://www.pixelssuite.com/flip-image');

    await expect(page.getByText('Flip Image', { exact: true })).toBeVisible();
    await expect(page.getByText('Select files', { exact: true })).toBeVisible();
    await expect(page.getByText('Preview', { exact: true })).toBeVisible();

    await page.screenshot({
      path: 'screenshots/TC_04_Flip.png',
      fullPage: true
    });
  });

  test('TC_05 - Image to Text', async ({ page }) => {
    await openPage(page, 'https://www.pixelssuite.com/image-to-text');

    await expect(page.getByText('Image → Text (OCR)', { exact: true })).toBeVisible();
    await expect(page.getByText('Select image', { exact: true })).toBeVisible();
    await expect(page.getByText('Preview', { exact: true })).toBeVisible();

    await page.screenshot({
      path: 'screenshots/TC_05_Image_Text.png',
      fullPage: true
    });
  });
});