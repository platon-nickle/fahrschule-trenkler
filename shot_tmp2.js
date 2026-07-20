const { chromium } = require('playwright-core');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  const dir = 'C:/Users/plato/AppData/Local/Temp/claude/c--Users-plato-Documents-nickle-Fahrschule-Trenkler-Website-fahrschule-website/e7ad8617-f17f-45b0-8b03-2ee53484e4ef/scratchpad';
  await page.screenshot({ path: dir + '/mid1.png', clip: { x: 0, y: 900, width: 1440, height: 900 } });
  await page.screenshot({ path: dir + '/mid2.png', clip: { x: 0, y: 2500, width: 1440, height: 900 } });
  await page.screenshot({ path: dir + '/mid3.png', clip: { x: 0, y: 4500, width: 1440, height: 900 } });
  await browser.close();
  console.log('Done');
})();
