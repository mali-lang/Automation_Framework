const { I  } = inject();
const { getWaitTime } = require('../../../src/configs/suiteConstants');


module.exports = {
    clickOnSearchIconOnHomepage()
    {
        const searchIcon = '//*[@class="search-box"]';
        I.waitForElement(searchIcon, getWaitTime().waitForElement);
        I.click(searchIcon);

    },

    enterTextInSearchBox(dramaName)
    {
        const searchBox = "//*[@placeholder = 'Search...']";
        I.waitForElement(searchBox, getWaitTime().waitForElement);
        I.fillField(searchBox, dramaName);
    },
    clickOnSearchButton()
    {
        const searchButton = "//*[@placeholder = 'Search...']";
        I.waitForElement(searchButton, getWaitTime().waitForElement);
        I.click(searchButton);
    }

}