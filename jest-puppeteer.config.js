module.exports = {
    launch: {
        headless: true,
        slowMo: 50,
        executablePath: process.env.CHROME_BIN,
        defaultViewport: {                           
            width: 1035,
            height: 768
        },
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignore-certificate-errors'],
        ignoreDefaultArgs: ["--hide-scrollbars"]
    },
    browserContext:"incognito",
};