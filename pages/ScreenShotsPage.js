const { By,WebDriver } = require('selenium-webdriver')
const { existsSync, writeFileSync, readFileSync } = require('fs')
const setupDriver = require('../utils/setupDriver')
const chai = require('chai')
const {chaiImage} = require('chai-image')
chai.use(chaiImage)
const {expect} = chai

class ScreenShotsPage{
    constructor(pageName, pageUrl){
        this.pageName = pageName
        this.pageUrl = pageUrl
    }
    async visualTesting(){
        const driver = await setupDriver()
        await driver.get(this.pageUrl)
        const baseScreenshotsPath = `screenshots/base/${this.pageName}.jpg`
        const actualScreenshotsPath = `screenshots/actual/${this.pageName}.jpg`
        const isBaseScreenshotExist = existsSync(baseScreenshotsPath)
    
        const pageScreenshots = await driver.takeScreenshot()
        const pageScreenshotsBuffer = Buffer.from(pageScreenshots,'base64')
    
        if(isBaseScreenshotExist){
            const baseScreenshotBuffer = readFileSync(baseScreenshotsPath)
    
            writeFileSync(actualScreenshotsPath, pageScreenshotsBuffer)
            expect(pageScreenshotsBuffer).to.matchImage(baseScreenshotBuffer)
        }else{
            writeFileSync(baseScreenshotsPath,pageScreenshotsBuffer)
        }
        await driver.close()
    }
}
module.exports = ScreenShotsPage