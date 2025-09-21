const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { HomePage } = require('../pages/home.page');
const { RetirementAndWealth } = require('../pages/retirement_and_wealth.page');
const { Contact } = require('../pages/contact.page'); 
const { EXPECTED_TEXTS } = require('../config/constants');

Given('user opens the URL', async function () {
    await this.page.goto('/');
});

Given('user navigates to Industries and opens the Retirement and Wealth section', async function () {
    this.homePage = new HomePage(this.page);
    this.retirementAndWealth = new RetirementAndWealth(this.page);
    this.contact = new Contact(this.page); 
    await this.homePage.acceptPolicyIfNeeded(); 
    await this.homePage.selectOptionMenuRetirementAndWealth();
    await this.retirementAndWealth.scrollToPoweringInnovationInRetirementServices();
});

When('user clicks on the Let\'s get started button', async function () {
    await this.retirementAndWealth.selectOptionMenuLetsGetStared();
});

Then('user verifies the page URL and the title', async function () {
    const currentURL = this.page.url();
    const titlePage = await this.contact.getTextTittle();
    expect(currentURL).toBe(EXPECTED_TEXTS.TEXT_URL_EXPECTED); 
    expect(titlePage).toBe(EXPECTED_TEXTS.TEXT_TITLE_EXPECTED); 
});

