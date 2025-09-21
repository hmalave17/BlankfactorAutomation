const { RetirementAndWealth } = require('../pages/retirement_and_wealth.page');

class Contact {
        constructor(page) {
        this.page = page;
        this.retirementAndWealth = new RetirementAndWealth(this.page); 
        this.text_tittle = this.page.locator('.h1-5');
    }

        async getTextTittle() {
        return await this.retirementAndWealth.getTextElement(this.text_tittle);
    }
}

module.exports = { Contact }; 
