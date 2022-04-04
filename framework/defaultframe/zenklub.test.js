import AuthHelper from "../../base/AuthHelper";
import FileHelper from "../../actions/FileHelper";
import path from 'path';

describe('ZenKlub validations', () => {
    let fileHelper, authHelper, fileName;

    beforeAll(async () => {
        authHelper = new AuthHelper();
        fileHelper = new FileHelper();
        fileName = path.basename(__filename).replace('.js', '');
    });

    it('Accessing zenklub page.', async () => {
        reporter.startStep("Accessing zenklub page.");
        await authHelper.accessInitialPage();
        reporter.endStep(); 
    }) 
    
    it('Login', async () => {
        reporter.startStep("Login");
        await authHelper.login();
        reporter.endStep();
    })

    it('Not have any session scheduled ', async () => {
        reporter.startStep("Not have any session scheduled");
        await page.waitForTimeout(2000)
        const text = await page.$eval('.h5 > span', element => element.textContent)
        expect(text).toBe(' Você ainda não fez nenhuma sessão. Encontre o profissional perfeito para você ainda hoje ');
        reporter.endStep();
    })

    it('When user clicks on “NOSSOS ESPECIALISTAS” he will be redirected to /busca', async () => {
        reporter.startStep("When user clicks on “NOSSOS ESPECIALISTAS” he will be redirected to /busca");
        await page.waitForSelector('nav > .list-unstyled.logged-nav.m-0.ng-star-inserted')
        await page.click('nav > .list-unstyled.logged-nav.m-0.ng-star-inserted')
        reporter.endStep();
    })

    it('When user clicks on “Gostei quero saber mais” on the first professional that appear on the list heneeds to be redirected to professional page', async () => {
        reporter.startStep("When user clicks on “Gostei quero saber mais” on the first professional that appear on the list heneeds to be redirected to professional page");
        await page.waitForSelector('div:nth-of-type(1) > app-professional-search .col-12.d-flex.justify-content-center.professional-link')
        await page.click('div:nth-of-type(1) > app-professional-search .col-12.d-flex.justify-content-center.professional-link')
        await page.waitForTimeout(5000)
        reporter.endStep();
    })

    it('When the user is on the professional page, he needs to see more information about the professional he chose and select an hour.', async () => {
        reporter.startStep("When the user is on the professional page, he needs to see more information about the professional he chose and select an hour.");
        await page.waitForSelector('.ng-star-inserted:nth-of-type(2) .ng-star-inserted:nth-of-type(1) .slot-time')
        await page.click('.ng-star-inserted:nth-of-type(2) .ng-star-inserted:nth-of-type(1) .slot-time')
        await page.waitForTimeout(1000)
        reporter.endStep();
    })

    it('Limpar dados criados no teste', async () => {
        reporter.startStep("Limpar dados criados no teste");
        await page.goto(fileHelper.urlBase() + '/profile/sessions', {waitUntil: "networkidle2"});
        await page.waitForTimeout(2500)
        await page.waitForSelector('.btn-danger')
        await page.click('.btn-danger')
        await page.waitForSelector('.float-right')
        await page.click('.float-right')
        await page.waitForTimeout(1000)
        reporter.endStep();
    })

    it('Logout', async () => {
        reporter.startStep("Logout do SE Suite.");
        await authHelper.logout();
        reporter.endStep();
    })
})