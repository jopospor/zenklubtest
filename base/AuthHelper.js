import FileHelper from "../actions/FileHelper";

export default class AuthHelper {

    helper = new FileHelper();

    async accessInitialPage() {

      reporter.startStep("Abre o navegador e acessa. ");
      await page.goto(this.helper.urlBase() + '/auth/login', {waitUntil: "networkidle2"});
      reporter.endStep();
      
    }

    async login() {    

        reporter.startStep("Localiza se o formulario de login está sendo exibido");
        await page.waitForSelector('#login-form-email')
        reporter.endStep();

        reporter.startStep("Preenche o campo: Login");
        await page.type('#login-form-email', 'qa-automation@zenklub.com')
        reporter.endStep();

        reporter.startStep("Preenche o campo: Senha");
        await page.type('#login-form-password', 'qachallenge')
        reporter.endStep();

        reporter.startStep("Clica em: Entrar");
        await page.waitForSelector('[data-hs-cf-bound] div span')
        await page.click('[data-hs-cf-bound] div span')
        reporter.endStep();

        reporter.startStep("Localiza se o elemento logo 'Zenklub' está sendo exibido");
        await page.waitForTimeout(2500)
        await page.waitForSelector('.first-section > .dark-mode.logged.logo')
        reporter.endStep();
    }

    async logout() {

        reporter.startStep("Clica em: Perfil");
        await page.waitForSelector('#user_menu')
        await page.click('#user_menu')
        reporter.endStep();

        reporter.startStep("Clica em: Sair");
        await page.waitForSelector('.user-links [href="\#logout"]')
        await page.waitForTimeout(200)
        await page.click('.user-links [href="\#logout"]')
        reporter.endStep();
    }
}