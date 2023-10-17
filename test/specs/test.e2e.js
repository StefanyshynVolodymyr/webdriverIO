import { expect, browser, $ } from '@wdio/globals'

describe('My Login application', () => {
    
    // it('should login with valid credentials', async () => {
    //     await browser.url(`https://the-internet.herokuapp.com/login`)

    //     await $('#username').setValue('tomsmith')
    //     await $('#password').setValue('SuperSecretPassword!')
    //     await $('button[type="submit"]').click()

    //     await expect($('#flash')).toBeExisting()
    //     await expect($('#flash')).toHaveTextContaining(
    //         'You logged into a secure area!')
    // })

    
    // it('should login with invalid credentials', async () => {
    //     await browser.url(`https://the-internet.herokuapp.com/login`)

    //     await $('#username').setValue('invalid_tomsmith')
    //     await $('#password').setValue('invalid_SuperSecretPassword!')
    //     await $('button[type="submit"]').click()

  
    //     await expect($('#flash')).toHaveTextContaining(
    //         'Your username is invalid!')
    // })  

    it("Check the title is correct", async () => {
        await browser.url("https://epam.com")
        const pageTitle = await browser.getTitle();

        expect(pageTitle).toEqual("EPAM | Software Engineering & Product Development Services")
    });
    
})