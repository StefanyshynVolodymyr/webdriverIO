import { expect, browser, $ } from '@wdio/globals'
import { async, timeout } from 'rxjs';

describe('Epam hometasks', () => {
    before(() => {
        browser.url("https://epam.com");
    });
    //Me
     it("1) Check the title is correct", async () => {
        const pageTitle = await browser.getTitle();
        
        expect(pageTitle).toEqual("EPAM | Software Engineering & Product Development Services")
    });

    //Me
    it("2) Check theme is changed to opposite", async () => {
        await $('.header__content > .theme-switcher-ui > .theme-switcher').click()

        await expect($('.light-mode').isExisting())

    });
    
    //Me and 30% gpt
    it("3) Check that allow to change language to UA", async () => {
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

    // it.only( 4) "Check the policies list') 

    
    //it.only('5) Check that allow to switch location list by region', async () => {


    //it.("6) Check the search function", async () => {
      //  const button = $('//button[@class="header-search__button header__icon"]');
       // button.waitForClickable();
       // button.click();

       // await $('.search-results__input-holder').waitForDisplayed();
       // await $('.search-results__input-holder').click();
       // await  $('input#new_form_search').setValue('AI')
       // await $('.custom-button').click();

    //});
    
    
   // it.only("7) Check form's fields validation", async () => {
     
       
//});


    it("8) Check the Company logo on the header lead to the main page", async () => {
        
    await browser.url("https://www.epam.com/about");
    
    const companyLogo = $(".desktop-logo.header__logo-container > img:nth-of-type(3)");
    await companyLogo.click();
    
    const browserUrl =  await browser.getUrl()
    expect(browserUrl).toEqual('https://www.epam.com/');
    

});

//it.only("9) Check that allows to download report ", async () => {
        
   //await browser.url("https://www.epam.com/about");
    
    //const downloadLink = $("//a[@href='https://www.epam.com/content/dam/epam/free_library/EPAM_Corporate_Overview_2023.pdf']");
   // await downloadLink.click();
   // await browser.pause(10000);

//});


});
