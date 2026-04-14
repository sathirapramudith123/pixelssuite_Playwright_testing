const { test, expect } = require('@playwright/test');

test.describe('PixelsSuite PDF Editor UI Automation', () => {
  const pdfEditorUrl = 'https://www.pixelssuite.com/pdf-editor';

  async function openPage(page) {
    await page.goto(pdfEditorUrl, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('body')).toBeVisible();
    await expect(page).toHaveURL(/pdf-editor/);
    await page.waitForTimeout(2000);
  }

  test('TC_01 - Verify PDF Editor Page Loads Successfully', async ({ page }) => {
    await openPage(page);

    const title = await page.title();
    expect(title.trim()).not.toBe('');

    await expect(page).toHaveURL(/pdf-editor/);

    await page.screenshot({
      path: 'screenshots/TC_01_PDF_Editor_Page_Load.png',
      fullPage: true
    });
  });

  test('TC_02 - Verify PDF Editor UI Elements Displayed', async ({ page }) => {
    await openPage(page);

    await expect(page.locator('body')).toBeVisible();
    await expect(page.locator('input[type="file"]')).toBeVisible();

    const buttonCount = await page.locator('button').count();
    console.log(`Total buttons found: ${buttonCount}`);
    expect(buttonCount).toBeGreaterThan(0);

    await page.screenshot({
      path: 'screenshots/TC_02_PDF_Editor_UI_Elements.png',
      fullPage: true
    });
  });

  test('TC_03 - Verify Toolbar Options Displayed', async ({ page }) => {
    await openPage(page);

    const selectCount = await page.locator('select').count();
    console.log(`Select count: ${selectCount}`);

    const rangeCount = await page.locator('input[type="range"]').count();
    console.log(`Range input count: ${rangeCount}`);

    const buttonCount = await page.locator('button').count();
    console.log(`Button count: ${buttonCount}`);
    expect(buttonCount).toBeGreaterThan(0);

    await page.screenshot({
      path: 'screenshots/TC_03_PDF_Editor_Toolbar.png',
      fullPage: true
    });
  });
});