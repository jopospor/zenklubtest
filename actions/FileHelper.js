import fileSystem from 'fs';
import shell from "shelljs"

export default class FileHelper {
    urlBase() {
        return 'https://' + process.argv[process.argv.length - 1].replace('--', '');
    }

    createNewDir(fileName) {
        const dirTestName = fileName;
        const dirBranchName = this.getSavePath() + process.argv[process.argv.length - 2].replace('--branch=', '');
        const fullDir = dirBranchName + "/" + dirTestName;

        if (!fileSystem.existsSync(fullDir)) {
            if (!shell.mkdir('-p', fullDir)) {
                console.log("Erro ao criar diretório");
            }
        }

        return fullDir;
    }

    getSavePath() {
        return "/puppeteerStuff/ScreenShots/Branchs/";
    }
}