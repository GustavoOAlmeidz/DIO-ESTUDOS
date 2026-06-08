import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.bold.yellow("Escolha a ferramenta (1 para QRcode) ou (2 para password)"),
        pattern: /^[1-2]+$/,
        message: chalk.bold.red("Escolha apenas entre 1 e 2"),
        require: true,
    }
]

export default mainPrompt;