🎭 Playwright Setup Guide

This guide will help you install, set up, and run Playwright tests step by step.

---

📌 Prerequisites

Make sure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn

Check versions:

node -v
npm -v

---

🚀 Step 1: Initialize Project

Create a new project folder and initialize:

mkdir playwright-project
cd playwright-project
npm init -y

---

📦 Step 2: Install Playwright

Install Playwright test framework:

npm init playwright@latest

Follow the prompts:

- Choose language: JavaScript / TypeScript
- Choose test folder
- Add GitHub Actions (optional)
- Install browsers (Yes ✅ recommended)

---

📁 Project Structure

After setup, your project will look like:

playwright-project/
│
├── tests/
│   └── example.spec.js
├── playwright.config.js
├── package.json
└── node_modules/

---

🧪 Step 3: Write Your First Test

Edit "tests/example.spec.js":

const { test, expect } = require('@playwright/test');

test('homepage has title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});

---

▶️ Step 4: Run Tests

Run all tests:

npx playwright test

---

👀 Step 5: Run in UI Mode (Recommended)

npx playwright test --ui

This opens an interactive test runner.

---

🌐 Step 6: Run in Headed Mode

To see browser while running:

npx playwright test --headed

---

📸 Step 7: View HTML Report

After running tests:

npx playwright show-report

---

🔄 Step 8: Run Specific Test File

npx playwright test tests/example.spec.js

---

⚙️ Useful Commands

Command| Description
"npx playwright test"| Run all tests
"npx playwright test --ui"| Run with UI
"npx playwright test --headed"| Run with browser visible
"npx playwright codegen"| Generate test code
"npx playwright show-report"| View report

---

🧠 Tips

- Use "codegen" to record actions:
  npx playwright codegen https://example.com
- Keep tests inside "/tests" folder
- Use "await" properly for async actions

---

❗ Troubleshooting

Install Browsers Manually

npx playwright install

Clear Cache

rm -rf node_modules
npm install

---

📚 Resources

- Official Docs: https://playwright.dev
- GitHub: https://github.com/microsoft/playwright

---

✅ You're Ready!

Now you can automate browser testing using Playwright 🚀