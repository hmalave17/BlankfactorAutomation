class HomePage {
    constructor(page) {
        this.page = page;
        this.acceptPolicyButton = this.page.getByText('policy', { exact: false });
        this.option_menu_industries = this.page.locator('#menu-item-4871');
        this.option_submenu_retirement_and_wealth = this.page.locator('[title="Retirement and wealth"]');
    }

    async acceptPolicyIfNeeded() {
        let policyFound = false;
        const cookies = await this.page.context().cookies();
        const policyCookie = cookies.find(cookie => cookie.name.toLowerCase().includes('policy'));
        if (policyCookie) {
            policyFound = true;
        }

        const localPolicy = await this.page.evaluate(() => localStorage.getItem('policyAccepted'));
        if (localPolicy) {
            policyFound = true;
        }

        const sessionPolicy = await this.page.evaluate(() => sessionStorage.getItem('policyAccepted'));
        if (sessionPolicy) {
            policyFound = true;
        }

        if (policyFound && await this.acceptPolicyButton.count() > 0) {
            await this.acceptPolicyButton.click();
            await this.page.waitForTimeout(1000);
        } else {
            console.log('No se requiere aceptación de política');
        }
    }

    async selectOptionMenuRetirementAndWealth() {
        await this.option_menu_industries.hover();
        await this.option_submenu_retirement_and_wealth.click();
    }
}

module.exports = { HomePage };
