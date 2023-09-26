const {By,WebDriver} = require('selenium-webdriver')
const {expect}= require('chai')
const setupDriver = require('../utils/setupDriver')
const ScreenShotsPage = require('../pages/ScreenShotsPage')

describe('visual-testing', function(){
            /** @type {WebDriver} */ 
            let driver
            /** @type {ScreenShotsPage} */ 
            let screenshotsPage
            before(async function(){
                driver = await setupDriver()
                screenshotsPage = new ScreenShotsPage(driver)
            })
            describe('VT_001 visual testing login page', function(){
                it('screenshot login page base dan actual sama', async function(){
                    await screenshotsPage.visualTesting('login','/')
                    /* let screenshotLoginPage = new ScreenShotsPage('login','https://www.saucedemo.com/v1')
                    await screenshotLoginPage.visualTesting() */
                })
            })
            describe('VT_002 visual testing list products page', function(){
                it('screenshot list products page base dan actual sama', async function(){
                    await screenshotsPage.visualTesting('listProducts','/inventory.html')
                    /* let screenshotListProductsPage = new ScreenShotsPage('listProducts','https://www.saucedemo.com/v1/inventory.html')
                    await screenshotListProductsPage.visualTesting() */
                })
            })
            describe('VT_003 visual testing cart page', function(){
                it('screenshot cart page base dan actual sama', async function(){
                    await screenshotsPage.visualTesting('cart','/cart.html')
                    /* let screenshotCartPage = new ScreenShotsPage('cart','https://www.saucedemo.com/v1/cart.html')
                    await screenshotCartPage.visualTesting() */
                })
            })
            describe('VT_004 visual testing checkout step 1 page', function(){
                it('screenshot checkout step 1 page base dan actual sama', async function(){
                    await screenshotsPage.visualTesting('checkoutStep1','/checkout-step-one.html')
                    /* let screenshotCheckoutStep1Page = new ScreenShotsPage('checkoutStep1','https://www.saucedemo.com/v1/checkout-step-one.html')
                    await screenshotCheckoutStep1Page.visualTesting() */
                })
            })
            describe('VT_005 visual testing checkout step 2 page', function(){
                it('screenshot checkout step 2 page base dan actual sama', async function(){
                    await screenshotsPage.visualTesting('checkoutStep2','/checkout-step-two.html')
                    /* let screenshotCheckoutStep2Page = new ScreenShotsPage('checkoutStep2','https://www.saucedemo.com/v1/checkout-step-two.html')
                    await screenshotCheckoutStep2Page.visualTesting() */
                })
            })
            after(async function () {
                await driver.sleep(2000)
                await driver.close()
            })
})