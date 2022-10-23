# Explorer Lab - JavaScript DOM

![Explorer Lab - JS DOM](https://user-images.githubusercontent.com/12506432/196342263-4508fecc-1776-4adf-9450-b40c1939aa59.png)

<img
alt="GitHub Contributors"
src="https://img.shields.io/github/contributors/claudneysessa/RocketSeat-ignite-lab-design-system"/> 

## Repositório Oficial do Projeto

- [rocketseat-education/explorer-lab-01](https://github.com/rocketseat-education/explorer-lab-01)

## Layout Figma

Você pode visualizar o layout do projeto através [DESSE LINK](https://www.figma.com/file/pLVIZaNYwARcsxAEBm7AfY/Explorer-LabvaScript-DOM).

É necessário ter conta no [Figma](https://figma.com) para acessá-lo.

<p
align="center">
  <img
  alt="rocketpay"
  src=".github/project.png"
  width="100%">
</p>

## Tecnologias Utilizadas

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML e CSS
- JavaScript e JSON
- [Node e NPM](https://nodejs.org/)
- [Vite](https://vitejs.dev/)
- [iMask](https://imask.js.org)

## Projeto

- O Rocketpay é um componente que simula o formulário de preenchimento de cartão de crédito, onde é possível adicionar máscara aos inputs e atualizar elementos HTML via DOM.

## GitHub

### Iniciar o Repositório git

- Iniciando um Novo repositório local

```bash
git init
```

### Enviando repositório para o GitHub com Git (CLI)

- Criando um repositório no GitHub pelo Git (CLI)

```bash
gh repo create
```

### Abrindo o repositório na WEB

- Solicito que seja aberto no navegador meu repositório

```bash
gh repo view --web
```

## Comandos do Git

Comandos iniciais para um fluxo de commit no GitHub

### Verificando arquivos modificados

- Verifico todos os arquivos modificados disponíveis para o commit

```bash
git status
```

### Adicionando arquivos ao Stage

- Adicionando os arquivos ao stage e efetuando o commit nomeado

```bash
git add .
git commit -m "commit message"
```

### Commitando para o Master

- Este comando envia o código para o repositório na brach master

```bash
git push origin master
```

## Vite

### Iniciando o Projeto (Novo)

Utilize este comando para criar um Novo projeto do ZERO caso necessário

```bash
npm create vite@latest
```

## Iniciando o Projeto (Clone do repositório do Myke)

Fork que Fiz do Repositório Oficial:

- [explorer-lab-01: Javascript e DOM](https://github.com/claudneysessa/fork-rocketseat-explorer-lab-01)

Utilize este comando para iniciar um repositório clonado

```bash
npm i
```

## Adicionando o IMask

Página do IMask

- [IMask](https://imask.js.org/)

### Instalando o IMask

- Executo o comando via npm para instalar o package do IMask

```bash
npm install imask
```

### Fazendo o import do IMask no "main.js"

- No arquivo main.js adicione o import do IMask logo abaixo do index.css

```JavaScript
import IMask from "imask"
```

## Expressões Regulares no JavaScript

### Criando uma expressão regular via literal

- Usando um literal de expressão regular

```JavaScript
const re = /foo/;
```

### Criando uma expressão regular via função construtora

- Chamando a função construtora do RegExp

```JavaScript
const re = new RegExp(/foo/);
```

## Publicando na Vercel

Projeto publicado na Vercel conforme instruções do Explorer

Link
- [https://vercel.com/](https://vercel.com/)

Passo a Passo:

1. Cadastre-se na vercel
2. Efetue o login vinculando a conta da vercel com a seua conta do GitHub
3. Crie um novo projeto e aponte ele para o seu repositório no GitHub
   * Em alguns casos será necessário permitir que a vercel veja seu repositorio
4. Clique em Deploy

### Projeto publicado na Vercel (Oficial do Explorer-Lab-01)

- [https://rocketseat-explorer-lab-javascript-dom.vercel.app/](https://rocketseat-explorer-lab-javascript-dom.vercel.app/)

## Publicando no GitHub Pages

Teste adicional feito para verificar como fica a publicação no gh-pages

### instalando o plugin-react para o vite

```bash
npm i @vitejs/plugin-react
```

### Criando o vite.config.js

Defina no arquivo de configurações da propriedade base para "/rocketseat-explorer-lab-javascript-dom/"

```JavaScript	
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/rocketseat-explorer-lab-javascript-dom/",
  plugins: [react()],
})
```

### Ajustes no package.json

```JSON
{
  "name": "projeto-base",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview --port 8080",
  },
  "devDependencies": {
    "gh-pages": "^4.0.0",
    "vite": "^3.1.0"
  },
  "dependencies": {
    "@vitejs/plugin-react": "^2.1.0",
    "imask": "^6.4.3"
  }
}
```

### Gerando o build e o deploy da página estatica

```bash
run build
```

### Verificar o preview gerado

```bash
run preview
```

### Adicionando a pasta dist ao repositório

Antes deste passo remova dist do .gitignore

```bash
git add dist -f
```

### Faça o commit da pasta dist

```bash
git commit -m "Adding dist"
```

### Gerando a branch gh-pages

```bash
git subtree push --prefix dist origin gh-pages
```

### Deploy final no gh-pages

Para realizar o Deployed da sua página, entre no seu repositório.

Siga os passos a baixo:

1. Navegue até a página Settings.
2. Role a página para baixo até a guia Pages.
3. Faça o link do GitHub pages com seu repositório estatico.

### Projeto publicado GitHub Pages

- [https://claudneysessa.github.io/rocketseat-explorer-lab-javascript-dom/](https://claudneysessa.github.io/rocketseat-explorer-lab-javascript-dom/)

## Licença

Esse projeto está sob a licença MIT.

## Onde me encontrar

<a
  href="https://www.youtube.com/channel/UC52P3HVpmOMHjkmIhcjLRyQ" target="_blank">
<img
  src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"
  target="_blank">
</a>
<a
href="https://instagram.com/claudneysessa"
target="_blank">
<img
  src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"
  target="_blank">
</a>
<a
href = "mailto:claudneysartisessa@gmail.com">
<img
  src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white"
  target="_blank">
</a>
<a
href="https://www.linkedin.com/in/claudneysessa/" target="_blank">
<img
  src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"
  target="_blank">
</a>
<a
href="https://medium.com/@claudneysartisessa" target="_blank">
<img
  alt="Medium"
  src="https://img.shields.io/badge/medium-%2312100E.svg?&style=for-the-badge&logo=medium&logoColor=white" />
</a>

## Veja o meu Perfil no Github

- [github.com/claudneysessa](https://github.com/claudneysessa)

## Contatos

- [Instagram](https://www.instagram.com/claudneysessa/)
- [Linkedin](https://www.linkedin.com/in/claudneysessa/)
