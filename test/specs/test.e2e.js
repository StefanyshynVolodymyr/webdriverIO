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

    
    // Me using the gpt 
    it("4) Check the policies list", async () => {
        browser.url("https://epam.com");

    const policiesList = await $('.policies-links-wrapper');
    await policiesList.scrollIntoView();

    // Define the expected list of policy items
    const expectedPolicies = [
        "INVESTORS",
        "COOKIE POLICY",
        "OPEN SOURCE",
        "APPLICANT PRIVACY NOTICE",
        "PRIVACY POLICY",
        "WEB ACCESSIBILITY"
    ];

    // Fetch the actual policy items from the web page
    const actualPolicies = await $$('.policies-links-wrapper .fat-links').map(item => item.getText());

    // Sort the expected and actual arrays
    expectedPolicies.sort();
    actualPolicies.sort();

    // Compare the actual policies with the expected list
    expect(actualPolicies).toEqual(expectedPolicies);

});


    // me without GPT
    it('5) Check that allow to switch location list by region', async () => {

    const tabsList = await $('.tabs-23__ul.js-tabs-links-list');
    await tabsList.scrollIntoView({block: 'center', inline: 'center'});
    
    const americasRegion = await $("//div[@role='tablist']/div[1]/a[@role='tab']").getText()
    const emeaRegion = await $("//div[@role='tablist']/div[2]/a[@role='tab']").getText()
    const apacRegion = await $("//div[@role='tablist']/div[3]/a[@role='tab']").getText()
    
    expect (americasRegion).toEqual('AMERICAS');
    expect (emeaRegion).toEqual('EMEA');
    expect (apacRegion).toEqual('APAC');

    let americasStatus = await $("//div[@role='tablist']/div[1]/a[@role='tab']").getAttribute('aria-selected');
    expect (americasStatus).toEqual('true');
    
    let emeaRegionStatus = await $("//div[@role='tablist']/div[2]/a[@role='tab']").getAttribute('aria-selected');
    expect (emeaRegionStatus).toEqual('false');

    let apacRegionStatus = await $("//div[@role='tablist']/div[3]/a[@role='tab']").getAttribute('aria-selected');
    expect (apacRegionStatus).toEqual('false');

    await tabsList.scrollIntoView({ block: 'center', inline: 'center' });
    await $("//div[@role='tablist']/div[2]/a[@role='tab']").click()
    let emeaRegionStatusAfterClick = await $("//div[@role='tablist']/div[2]/a[@role='tab']").getAttribute('aria-selected');
    await expect (emeaRegionStatusAfterClick).toEqual('true');

    await tabsList.scrollIntoView({ block: 'center', inline: 'center' });
    await $("//div[@role='tablist']/div[3]/a[@role='tab']").click()
    let apacRegionStatusAfterClick = await $("//div[@role='tablist']/div[3]/a[@role='tab']").getAttribute('aria-selected');
    await expect (apacRegionStatusAfterClick).toEqual('true');
    

});


    //me +gpt
    it("6) Check the search function", async () => {
       const button = $('//button[@class="header-search__button header__icon"]');
       button.waitForClickable();
       button.click();

       await $('.search-results__input-holder').waitForDisplayed();
       await $('.search-results__input-holder').click();
       await $('input#new_form_search').setValue('AI');
       await $('.custom-button').click();

        // Find the parent element with class "search-results__items"
       const searchResultsContainer = await $('.search-results__items');

        // Find all child elements with the class "search-results__item"
       const searchResultItems = await searchResultsContainer.$$('.search-results__item');

       // Check if articles are present using an 'if' statement
        if (searchResultItems.length === 0) {
              throw new Error('No results found.');
    }

});

    it("7) Check form's fields validation", async () => {
        browser.url('https://www.epam.com/about/who-we-are/contact')

        const submitButton = await $('.button-ui');
        await submitButton.scrollIntoView({block: 'center', inline: 'center'});
        await submitButton.click();

        const firstNameInput = $('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name');
        const lastNameInput = $('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_last_name');

        const firstNameError = await $('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name-error').getText();
        const lastNameError = await $('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_last_name-error').getText();

        expect(firstNameError).toEqual('This is a required field');
        expect(lastNameError).toEqual('This is a required field');

});


    it("8) Check the Company logo on the header lead to the main page", async () => {
        
        await browser.url("https://www.epam.com/about");
    
        const companyLogo = $(".desktop-logo.header__logo-container > img:nth-of-type(3)");
        await companyLogo.click();
    
       const browserUrl =  await browser.getUrl()
       expect(browserUrl).toEqual('https://www.epam.com/');
    

});

   
});




