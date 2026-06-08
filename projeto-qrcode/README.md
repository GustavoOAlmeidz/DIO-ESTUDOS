# projeto-qrcode

Kit de utilidades em Node.js com duas ferramentas de terminal:

1. Gerador de **QR Code** (ASCII no terminal)
2. Gerador de **senha aleatoria** configuravel por variaveis de ambiente

---

## Objetivo

Este projeto foi criado para praticar:

- modularizacao com ES Modules (`type: module`)
- entrada interativa via terminal com `prompt`
- saida colorida com `chalk`
- geracao de QR Code no terminal com `qrcode-terminal`
- leitura de configuracao por `.env` usando `node --env-file`

---

## Funcionalidades

### 1) QR Code

- solicita um link/URL
- permite escolher o tipo de exibicao
- gera o QR Code diretamente no terminal

### 2) Password

- gera senha com tamanho configuravel
- permite habilitar/desabilitar grupos de caracteres:
  - letras maiusculas
  - letras minusculas
  - numeros
  - caracteres especiais

---

## Tecnologias e Dependencias

- Node.js (ESM)
- [`chalk`](https://www.npmjs.com/package/chalk)
- [`prompt`](https://www.npmjs.com/package/prompt)
- [`qrcode-terminal`](https://www.npmjs.com/package/qrcode-terminal)

`package.json` principal:

- script de execucao: `npm start`
- entrada da aplicacao: `src/index.js`

---

## Estrutura de Pastas

```text
projeto-qrcode/
  package.json
  .env
  src/
    index.js
    prompt/
      prompt-main.js
      prompt-qrcode.js
    services/
      password/
        create.js
        handle.js
        utils/
          characters-permitidos.js
      qr-code/
        create.js
        handle.js
        utils/
```

### Papel de cada modulo

- `src/index.js`: menu principal e roteamento da opcao escolhida
- `src/prompt/prompt-main.js`: schema de validacao do menu principal
- `src/prompt/prompt-qrcode.js`: schema de entrada para URL e tipo de QR
- `src/services/qr-code/create.js`: inicia prompt da feature de QR Code
- `src/services/qr-code/handle.js`: processa entrada e imprime QR no terminal
- `src/services/password/create.js`: aciona geracao e imprime senha
- `src/services/password/handle.js`: gera senha com base no `.env`
- `src/services/password/utils/characters-permitidos.js`: monta o conjunto de caracteres validos

---

## Pre-requisitos

- Node.js instalado (recomendado Node 20+)
- npm (normalmente ja vem com Node)

Para validar versoes:

```powershell
node -v
npm -v
```

---

## Instalacao

No diretorio do projeto:

```powershell
cd C:\Users\usuario\WebstormProjects\NODEESTUDOS\projeto-qrcode
npm install
```

---

## Configuracao (`.env`)

Crie/ajuste o arquivo `.env` na raiz do projeto:

```dotenv
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=10
```

### Significado das variaveis

- `UPPERCASE_LETTERS`: inclui `A-Z`
- `LOWERCASE_LETTERS`: inclui `a-z`
- `NUMBERS`: inclui `0-9`
- `SPECIAL_CHARACTERS`: inclui simbolos especiais
- `PASSWORD_LENGTH`: tamanho final da senha

> Dica: deixe pelo menos um grupo de caracteres como `true`.

---

## Como Executar

```powershell
npm start
```

A aplicacao exibira o menu:

- `1` para QR Code
- `2` para Password

### Fluxo QR Code

1. escolha `1`
2. informe o link
3. escolha o tipo de exibicao
4. visualize o QR Code no terminal

### Fluxo Password

1. escolha `2`
2. a senha sera gerada conforme o `.env`
3. o valor sera exibido no terminal

---

## Scripts Disponiveis

No `package.json`:

- `npm start` -> `node --env-file=.env src/index.js`
- `npm test` -> placeholder (ainda nao configurado)

---

### Erro com variaveis de ambiente

- confira se o arquivo `.env` existe na raiz
- confira se o start esta usando `--env-file=.env`
- confirme valores booleanos como string (`true`/`false`)

### QR Code nao aparece

- verifique se o link foi informado corretamente
- execute novamente e escolha um tipo valido (`1` ou `2`)

---

## Melhorias Futuras (Sugestoes)

- adicionar testes automatizados para gerador de senha
- salvar QR Code em arquivo (PNG/SVG)
- permitir copiar senha para clipboard
- melhorar tratamento de erros e mensagens de validacao
- adicionar CI simples com lint + testes

---

## Licenca

ISC (conforme `package.json`).

