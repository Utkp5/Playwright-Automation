const {test, expect} = require('@playwright/test')

test('Login test playwright', async({page}) => {         //test.only --> means it will run only this test

    await page.goto('https://demowebshop.tricentis.com/login');
    await page.locator('#Email').fill('utkp@temp.com');
    await page .locator("[type='password']").fill('6564568');
    await page.locator('.login-button').click();
    await expect(page.locator('.message-error li')).toContainText('The credentials provided are incorrect');

    //await page.pause();

})



test.only('Register-playwright', async({page}) => {

    
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator("#login-button").click();
    const titles = await page.locator('.inventory_item_label a').allTextContents();
    console.log(titles);

    await page.pause();


})