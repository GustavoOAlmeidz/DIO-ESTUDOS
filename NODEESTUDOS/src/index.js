const PLAYERS = [
    { NOME: "Mario", VELOCIDADE: 4, MANOBRABILIDADE: 3, PODER: 3 },
    { NOME: "Peach", VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 2 },
    { NOME: "Yoshi", VELOCIDADE: 2, MANOBRABILIDADE: 4, PODER: 3 },
    { NOME: "Bowser", VELOCIDADE: 5, MANOBRABILIDADE: 2, PODER: 5 },
    { NOME: "Luigi", VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 4 },
    { NOME: "Donkey Kong", VELOCIDADE: 2, MANOBRABILIDADE: 2, PODER: 5 },
];
function drawRandomPlayers() {
    const shuffled = [...PLAYERS].sort(() => Math.random() - 0.5);
    const [p1, p2] = shuffled.slice(0, 2);

    return [
        { ...p1, PONTOS: 0 },
        { ...p2, PONTOS: 0 },
    ];
}
async function  rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock(){
    let random = Math.random()
    let result
    switch (true){
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "COMBATE";
            break;
    }
    return result;
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁  Rodada ${round}`);

        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

        let diceResults1 = await rollDice();
        let diceResults2 = await rollDice();

        let totalSkill1 = 0;
        let totalSkill2 = 0;
        let roundWinner = null;

        if (block === "RETA") {
            totalSkill1 = diceResults1 + character1.VELOCIDADE;
            totalSkill2 = diceResults2 + character2.VELOCIDADE;

            await logRollResult(character1.NOME, "velocidade", diceResults1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, "velocidade", diceResults2, character2.VELOCIDADE);
        }

        if (block === "CURVA") {
            totalSkill1 = diceResults1 + character1.MANOBRABILIDADE
            totalSkill2 = diceResults2 + character2.MANOBRABILIDADE

            await logRollResult(character1.NOME, "manobrabilidade", diceResults1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "manobrabilidade", diceResults2, character2.MANOBRABILIDADE);
        }

        if (block === "COMBATE") {
            let powerResult1 = diceResults1 + character1.PODER;
            let powerResult2 = diceResults2 + character2.PODER;

            console.log(`${character1.NOME} confrontou com ${character2.NOME} !🥊`);
            await logRollResult(character1.NOME, "poder", diceResults1, character1.PODER);
            await logRollResult(character2.NOME, "poder", diceResults2, character2.PODER);

            if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
                console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto`);
                character2.PONTOS--;
                roundWinner = character1.NOME;
            }
            if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
                console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto`);
                character1.PONTOS--;
                roundWinner = character2.NOME;
            }
            if (powerResult1 === powerResult2) {
                roundWinner = null;
            }
        }

        if (block !== "COMBATE") {
            if (totalSkill1 > totalSkill2) {
                console.log(`${character1.NOME} marcou um ponto !`);
                character1.PONTOS++;
                roundWinner = character1.NOME;
            } else if (totalSkill2 > totalSkill1) {
                console.log(`${character2.NOME} marcou um ponto !`);
                character2.PONTOS++;
                roundWinner = character2.NOME;
            }
        }

        if (roundWinner) {
            console.log(`🏆 Vencedor da rodada: ${roundWinner}`);
        } else {
            console.log("🤝 Rodada empatada!");
        }
        console.log("---------------------------------")
    }


    async function logRollResult(characterName, block, diceResult, attribute) {
        console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
    }

}

async function declareWinner(character1,character2){
    console.log("Resultado Final:")
    console.log(`${character1.NOME} : ${character1.PONTOS} `)
    console.log(`${character2.NOME} : ${character2.PONTOS} `)

    if(character1.PONTOS > character2.PONTOS){
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns!`)
    } else if(character2.PONTOS> character1.PONTOS){
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`)
    } else {
        console.log("A corrida terminou em empate")
    }

}
(async function main() {
    const [player1, player2] = drawRandomPlayers();

    console.log(`🏁 🚨 corrida entre ${player1.NOME} e ${player2.NOME} começando...`);
    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})();
