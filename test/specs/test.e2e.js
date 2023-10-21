import { expect, browser, $ } from '@wdio/globals'

describe('Epam hometasks', () => {
    before(() => {
        browser.url("https://epam.com");
    });
    //Me
     it("Check the title is correct", async () => {
        const pageTitle = await browser.getTitle();
        
        expect(pageTitle).toEqual("EPAM | Software Engineering & Product Development Services")
    });

    //Me
    it("Check theme is changed to opposite", async () => {
        await $('.header__content > .theme-switcher-ui > .theme-switcher').click()

        await expect($('.light-mode').isExisting())

    });
    
    //Me and 30% gpt
    it("Check that allow to change language to UA", async () => {
       await $('.location-selector-ui-23').click();
       await browser.setTimeout({ 'implicit': 10000 });
       await $('.location-selector__title').isDisplayed();
       await $('li:nth-of-type(6) > .location-selector__link').click();
       
       await browser.waitUntil(
        async () => {
            const currentURL = await browser.getUrl();
            return currentURL === "https://careers.epam.ua/";
        },
        {
            timeout: 10000, // Adjust the timeout as needed
            timeoutMsg: "URL did not change to 'https://careers.epam.ua/' within the expected time.",
        }) 
       
    });
    
    
    
});


    

