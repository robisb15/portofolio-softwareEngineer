import { test, expect } from '@playwright/test';
import { projects } from '../lib/content';

test('every project has its own case study and unknown slugs return 404', async ({ page, request }) => {
  for (const project of projects) {
    const response = await page.goto(`/projects/${project.slug}`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText(project.name);
    await expect(page).toHaveTitle(`${project.name} | Robi Aulia Kurniawan`);
    await expect(page.getByRole('link', { name: /Live Demo/ })).toHaveAttribute('href', project.url);
    await expect(page.locator('.compact-features li')).toHaveCount(project.features.length);
    await expect(page.getByRole('heading', { name: 'My contribution.' })).toHaveCount(0);
    await expect(page.getByRole('navigation', { name: 'Project lainnya' }).getByRole('link')).toHaveCount(2);
  }
  expect((await request.get('/projects/not-a-project')).status()).toBe(404);
});

test('home opens a case study, lightbox restores focus, and project navigation works', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/#projects');
  await page.locator('.project-link').first().click();
  await expect(page).toHaveURL(/\/projects\/web-desa-platform$/);
  const screenshot = page.getByRole('button', { name: /Perbesar:/ });
  await screenshot.click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Tutup gambar' })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(screenshot).toBeFocused();
  await screenshot.press('Enter');
  await page.getByRole('button', { name: 'Tutup gambar' }).click();
  await page.getByRole('navigation', { name: 'Project lainnya' }).getByRole('link', { name: /Next project/ }).click();
  await expect(page).toHaveURL(/\/projects\/ppid-tebo$/);
  await page.getByRole('link', { name: 'Back to Projects' }).click();
  await expect(page).toHaveURL(/\/#projects$/);
  expect(errors).toEqual([]);
});

test('detail layout reflows and mobile navigation returns to the homepage', async ({ page }) => {
  await page.goto('/projects/portofolio-pribadi');
  for (const width of [320, 390, 640, 768, 1024, 1366]) {
    await page.setViewportSize({ width, height: 900 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}px`).toBe(true);
    for (const image of await page.locator('.case-gallery img').all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveJSProperty('complete', true);
      expect(await image.evaluate(image => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator('.menu-toggle').click();
  await page.getByRole('navigation', { name: 'Navigasi utama' }).getByRole('link', { name: 'Skills' }).click();
  await expect(page).toHaveURL(/\/#skills$/);
});
