const {test} = require('@playwright/test');


// In these 2 both are different by their writing but doing same thing
//1. in 1st one we are writing 2 line extra to goto the specific page where as in 2nd onw we hve only written one to goto the specific page

test('Browser test', async({browser})=> {

    const Context = await browser.newContext();
    const page = await Context.newPage();
    await page.goto("https://www.globalsqa.com/demo-site/");
    const title = await page.title()
    console.log("Title of a website is  : ", title);

    // await page.pause();   // -> the line is used to hold or pause the screen 
})

test('Page playwright test', async({page})=> {
    
    await page.goto("https://demowebshop.tricentis.com/");
    await page.pause();
})