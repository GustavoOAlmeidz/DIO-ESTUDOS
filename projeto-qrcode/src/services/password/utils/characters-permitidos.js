async function charactersPermitidos() {
    let permitidos = [];
    if(process.env.UPPERCASE_LETTERS === "true")
        permitidos.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    if(process.env.LOWERCASE_LETTERS === "true")
        permitidos.push(..."abcdefghijklmnopqrstuvwxyz");

    if(process.env.NUMBERS === "true")
        permitidos.push(..."1234567890");

    if(process.env.SPECIAL_CHARACTERS === "true")
        permitidos.push(..."!@#$%¨&*()-_+=^");

    return permitidos;
}

export default charactersPermitidos;