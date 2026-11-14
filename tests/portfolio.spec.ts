import { test, expect } from '@playwright/test';

test('real content, assets and all six desktop sections fit the viewport', async ({ page, request }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.goto('/');
  await expect(page.locator('main > section')).toHaveCount(6);
  await expect(page.locator('h1')).toContainText('SOFTWARE');
  await expect(page.locator('#experience')).toContainText('Anugerah Group Jambi');
  for (const id of ['hero', 'about', 'experience', 'projects', 'skills', 'contact']) {
    const size = await page.locator(`#${id}`).boundingBox();
    expect(size?.height, id).toBe(768);
  }
  for (const width of [320, 390, 640, 768, 900, 1024, 1366, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), String(width)).toBe(true);
  }
  const pdf = await request.get('/cv-robi-aulia-kurniawan.pdf');
  expect(pdf.status()).toBe(200);
  expect(pdf.headers()['content-type']).toContain('pdf');
  for (const name of ['sidomulyo', 'ppid', 'ayunda', 'nakertrans', 'dmd', 'siga', 'lpju', 'pasar', 'portofolio', 'jobtracker', 'ots']) expect((await request.get(`/projects/${name}.png`)).status()).toBe(200);
  expect(errors).toEqual([]);
});

test('history tabs work with mouse and keyboard', async ({ page }) => {
  await page.goto('/#experience');
  await page.getByRole('tab', { name: 'Education', exact: true }).click();
  await expect(page.getByRole('tabpanel')).toContainText('Universitas Dinamika Bangsa');
  await expect(page.getByRole('tabpanel')).toContainText('AWS Certified Cloud Practitioner');
  await page.keyboard.press('ArrowLeft');
  await expect(page.getByRole('tab', { name: 'Experience', exact: true })).toBeFocused();
  await expect(page.getByRole('tabpanel')).toContainText('Diskominfo Tebo');
});

test('carousel reaches every project and returns to the first', async ({ page }) => {
  await page.goto('/#projects');
  const next = page.getByRole('button', { name: 'Proyek berikutnya' });
  const prev = page.getByRole('button', { name: 'Proyek sebelumnya' });
  await expect(prev).toBeDisabled();
  for (let i = 0; i < 10; i++) { await next.click(); await page.waitForTimeout(150); }
  await expect(next).toBeDisabled();
  await expect(page.locator('.gallery-status')).toContainText('11');
  await expect(page.locator('.project-link')).toHaveCount(11);
  for (let i = 0; i < 10; i++) { await prev.click(); await page.waitForTimeout(150); }
  await expect(prev).toBeDisabled();
  await page.locator('#project-track').focus();
  await page.keyboard.press('ArrowRight');
  await expect(prev).toBeEnabled();
});

test('contact validation, safe draft, download and keyboard dismissal', async ({ page }) => {
  await page.goto('/#contact');
  await page.getByRole('button', { name: 'Siapkan pesan' }).click();
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await page.getByLabel('Nama', { exact: true }).fill('  ');
  await page.getByLabel('Email', { exact: true }).fill('test@example.com');
  await page.getByLabel('Tentang proyek Anda').fill('Pesan proyek');
  await page.getByRole('button', { name: 'Siapkan pesan' }).click();
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await page.getByLabel('Nama', { exact: true }).fill('Pengunjung');
  for (const service of ['Web Development', 'Mobile Development', 'Backend & API', 'Kolaborasi lainnya']) {
    await page.getByLabel('Jenis proyek').selectOption(service);
    await page.getByLabel('Tentang proyek Anda').fill('Website & API <script>contoh</script>');
    await page.getByRole('button', { name: 'Siapkan pesan' }).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.locator('dialog pre')).toContainText(service);
    const href = await page.getByRole('link', { name: 'Buka aplikasi email' }).getAttribute('href');
    expect(href).toContain('mailto:robiaulia.k@gmail.com?subject=');
    expect(decodeURIComponent(href!)).toContain('Website & API <script>contoh</script>');
    if (service === 'Web Development') {
      const downloaded = page.waitForEvent('download');
      await page.getByRole('link', { name: 'Unduh draf', exact: true }).click();
      expect((await downloaded).suggestedFilename()).toBe('pesan-untuk-robi.txt');
      await page.getByRole('button', { name: 'Tutup draf' }).click();
    } else await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).not.toBeVisible();
    await expect(page.getByRole('button', { name: 'Siapkan pesan' })).toBeFocused();
  }
});

test('mobile menu opens, navigates and closes using Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const menu = page.locator('.menu-toggle');
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await page.getByRole('navigation').getByRole('link', { name: 'Skills', exact: true }).click();
  await expect(page).toHaveURL(/#skills$/);
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await menu.click();
  await page.getByRole('navigation').getByRole('link', { name: 'Home', exact: true }).focus();
  await page.keyboard.press('Escape');
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await expect(menu).toBeFocused();
});
