import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.mercadolibre.com');
  }

  async selectCountry(countryName: string) {

    // Esperar a que se vea el enlace del país
    const countryOption = this.page.getByRole('link', { name: countryName });
    await countryOption.waitFor({ state: 'visible' });

    // Hacer clic en el país
    await countryOption.click();
  }
}






























