**Instalar dependências:** 

1º Via cmd ou via terminal de comandos do seu editor de código acesse a pasta puppeteer que fica em seu computador. 

2º Execute:

  `npm install`  

**Como executar o teste:** 

  `jest zenklub.test --zenklub.com.br`  
  
  
**Exemplo:** jest button.test --joslaine.softexpert.com.br 
**Observação:** Caso haja algum erro ao executar este comando, pode ter ocorrido alguma falha na instalação da dependência do jest, se este for o caso basta executar npm install -g jest e tentar rodar os testes novamente. 
   
**Os testes devem poder ser executados em dois modos:** 

**headless:** false (o navegador é aberto e se pode acompanhar a execução do testes); 

**headless:** true (o teste é executado um browser web sem uma interface gráfica). 

**Observação:** Para alterar a forma de execução basta alterar o arquivo jest-puppeteer.config.js. 

**Após a execução dos testes:** 

Validar se a imagens foram adicionadas na pasta: C:\puppeteerStuff\ScreenShots. 

**Debugar scripts do puppeteer usando o debugger:** 

**Usando o debugger com node.js**  

Isso permitirá que você depure o código de teste. Por exemplo, você pode passar **await page.click()** pelo script node.js e ver o clique acontecer no navegador de código do aplicativo. 

Observe que você não poderá executar **await page.click()** no console do DevTools devido a esse bug do Chromium . Portanto, se você quiser experimentar algo, precisará adicioná-lo ao seu arquivo de teste. 

1º Adicione debugger; ao seu teste, por exemplo: 

**debugger;** 

**await page.waitForSelector('#app')** 

2ª Defina headless como false 

3ª Executar:
   
   `node --inspect-brk node_modules/.bin/jest testName/path --ambiente` 
   
por exemplo: 

**node --inspect-brk ./node_modules/jest/bin/jest.js button.test.js --joslaine.softexpert.com.br** 

4º No Chrome, abra **chrome://inspect/#devices** clique em **inspect** 

5º No navegador de teste recém-aberto, digite **F8** para retomar a execução do teste 

6º Agora seu debugger será atingido e você poderá depurar no navegador de teste 

**Mais dicas e opções para debbug podem ser encontradas em:** https://developers.google.com/web/tools/puppeteer/debugging  
