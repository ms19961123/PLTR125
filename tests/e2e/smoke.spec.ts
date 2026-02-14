import { expect, test } from '@playwright/test';

test('landing page renders CommunityCircle heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /local, family-friendly meetups/i })).toBeVisible();
});
