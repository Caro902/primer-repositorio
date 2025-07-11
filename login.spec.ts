import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


test.use({ ignoreHTTPSErrors: true });

test('Procesar E2E flow', async ({ page }) => {

  test.setTimeout(150_000);
  

  const loginPage = new LoginPage(page);

  await loginPage.navegar();
  await loginPage.aceptarCookies();
  await loginPage.login('4050290226', '987654321');
});