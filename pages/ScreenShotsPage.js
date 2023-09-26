const { By,WebDriver } = require('selenium-webdriver')
const { existsSync, writeFileSync, readFileSync } = require('fs')
const setupDriver = require('../utils/setupDriver')
const chai = require('chai')
const {chaiImage} = require('chai-image')
const Page = require('./Page')
chai.use(chaiImage)
const {expect} = chai

class ScreenShotsPage extends Page{
    constructor(driver){
        super(driver)
    }
    /* constructor(pageName, pageUrl){
        this.pageName = pageName
        this.pageUrl = pageUrl
    } */
   
    async visualTesting(pageName, pageUrl){
        /* const driver = await setupDriver()
        await driver.get(this.pageUrl) */
        await this.openUrl(pageUrl)
        await this.driver.sleep(1000)
        const baseScreenshotsPath = `screenshots/base/${pageName}.jpg`
        const actualScreenshotsPath = `screenshots/actual/${pageName}.jpg`
        const isBaseScreenshotExist = existsSync(baseScreenshotsPath)
    
        const pageScreenshots = await this.driver.takeScreenshot()
        const pageScreenshotsBuffer = Buffer.from(pageScreenshots,'base64')
    
        if(isBaseScreenshotExist){
            const baseScreenshotBuffer = readFileSync(baseScreenshotsPath)
    
            writeFileSync(actualScreenshotsPath, pageScreenshotsBuffer)
            expect(pageScreenshotsBuffer).to.matchImage(baseScreenshotBuffer)
        }else{
            writeFileSync(baseScreenshotsPath,pageScreenshotsBuffer)
        }
        /* await driver.close() */
    }
}
module.exports = ScreenShotsPage