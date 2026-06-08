import createPassword from "./services/password/create.js"
import createQRCode from "./services/qr-code/create.js";
import mainPrompt from "./prompt/prompt-main.js"
import prompt from "prompt"
import chalk from "chalk";

async function main(){
    prompt.get(mainPrompt, async (err, choose)=>{
        if(choose.select == 1) await chalk.bold.bgGreen(createQRCode());
        if(choose.select == 2) await chalk.bold.bgRed(createPassword());

    });
    prompt.start()
}

main();