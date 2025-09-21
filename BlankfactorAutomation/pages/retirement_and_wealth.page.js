const { EXPECTED_TEXTS } = require('../config/constants');

class RetirementAndWealth {
    constructor(page) {
        this.page = page;
        this.sectionMachineLearning = this.page.locator('.card-text', {
            hasText: /AI\s*&\s*Machine learning/i
        });
        this.lastCard = this.page.locator('.card-text.small').last();
        this.button_lets_get_stared = this.page.locator('.hover-color-aqua');
    }

    async scrollToPoweringInnovationInRetirementServices() {
        await this.sectionMachineLearning.scrollIntoViewIfNeeded();
        await this.sectionMachineLearning.hover();
        const textSectionMachineLearning = await this.getLastCardText();
        await this.compareTexts(textSectionMachineLearning, EXPECTED_TEXTS.TEXT_CARD_AI_MACHINE_LEARNING);
    }

    async selectOptionMenuLetsGetStared() {
        await this.button_lets_get_stared.hover();
        await this.button_lets_get_stared.click();
    }

        async getLastCardText() {
        return await this.getTextElement(this.lastCard);
    }

        async getTextElement(locator) {
        await locator.waitFor({ state: 'visible', timeout: 30000 });
        const raw = await locator.innerText();
        return raw.replace(/\s+/g, ' ').trim();
    }

        async compareTexts(actual, expected) {
        const normalizedActual = actual.replace(/\s+/g, ' ').trim();
        const normalizedExpected = expected.replace(/\s+/g, ' ').trim();
        if (normalizedActual !== normalizedExpected) {
            throw new Error('Texts do not match!')
        }
    }
}

module.exports = { RetirementAndWealth }; 