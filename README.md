# Projeto Orange Juice Hackathon - V5.0 | Squad-24 | Front-end

<p align="center">
  <img alt="Favicon" width='30%' src="https://github.com/vinicioscst/orange-portfolio-frontend-squad24/blob/main/src/assets/logo.svg"  />
</p>


Bem-vindo ao repositório oficial do front-end desenvolvido durante a participação no hackathon Orange Juice! Este projeto foi concebido como parte de uma colaboração envolvendo uma equipe de cinco pessoas, incluindo o criador deste repositório.

👩‍💻 Acesse a aplicação aqui 👉 [Orange Portfólio](https://orange-portfolio-frontend-squad24.vercel.app/)

<hr>

- [1. O Projeto](#1-o-projeto)
- [2. Funcionalidades](#2-funcionalidades)
  - [2.1 Requisitos](#21-requisitos)
  - [2.2 Em desenvolvimento](#22-em-desenvolvimento)
  - [2.3 Inovação](#23-inovação)
- [3. Tecnologias](#3-tecnologias)
- [4. Estrutura do Repositório](#4-estrutura-do-repositório)
- [5. Integração e Deploy](#5-integração-e-deploy)
- [6. Instruções de Instalação](#6-instruções-de-instalação)
  - [6.1. Pré-requisitos](#61-pré-requisitos)
  - [6.2. Testando a instalação](#62-testando-a-instalação)
- [7. Rotas](#7-rotas)
- [8. Conheça a Squad-24!](#8-conheça-a-squad-24)


## 1. O Projeto
O objetivo principal do desafio é fornecer uma interface de usuário intuitiva e responsiva para a nossa aplicação.
O Orange Portifólio é uma plataforma única que reúne os melhores talentos de desenvolvimento e design em um só lugar.
Desenvolvida com React.js e utilizando a API desenvolvida em Node.js, Express e PostgreSQL, a aplicação oferece ótimo desempenho e fácil manutenção.
Além da possibilidade de cadastrar e buscar projetos, incluímos algumas funcionalidades, como checkbox de requisitos de senha e darkmode.

  👉 [Figma do projeto](https://www.figma.com/file/utDx59m5Opz1lDSN1J4r9I/Desafio---Programa-de-Forma%C3%A7%C3%A3o-5.0?type=design&node-id=171-2351&mode=design&t=e2CL8emjA2XPacJ9-0)

  👉 [Repositório da API](https://github.com/vinicioscst/orange-portfolio-backend-squad24)

## 2. Funcionalidades

### 2.1. Requisitos

- [x] **Página de login**
    - [x] **Login com conta google**
- [x] **Header navegável e responsivo**
- [x] **Design responsivo**
- [x] **Feedbacks para o usuário por meio de toast ou modal**
- [x] **Página de cadastro**
- [x] **Página Meus Projetos**
    - [x] **Input de busca por tags**
    - [x] **Possibilidade de cadastrar projetos**
    - [x] **Visualização de detalhes do projeto ao clicar no card**
    - [x] **Visualização de projetos com cards**
    - [x] **Visualização de detalhes do projeto ao clicar no card**
    - [x] **Possibilidade de deletar o projeto**
- [x] **Página Descobrir**
    - [x] **Input de busca por tags**
    - [x] **Visualização de projetos com cards**
    - [x] **Visualização de detalhes do projeto ao clicar no card**

### 2.2. Em desenvolvimento

- [ ] **Possibilidade de editar o projeto**
- [ ] **Paginação**
    
### 2.3. Inovação

- [x] **DarkMode**
- [x] **Checkbox de requisitos de segurança da senha**
- [x] **Possibilidade de enviar uma foto de perfil na hora de fazer o cadastro**
- [x] **Foto padrão para cards sem imagens**
- [x] **Melhorias no design original**

## 3. Tecnologias

- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Material-MUI](https://mui.com/material-ui/getting-started/)
- [React](https://pt-br.reactjs.org/)
- [React Dropzone](https://react-dropzone.js.org/)
- [React Hook Form](https://react-hook-form.com/)
- [React OAuth Google](https://www.npmjs.com/package/@react-oauth/google)
- [React Router Dom](https://reactrouter.com/en/main)
- [TailwindCss](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Zod](https://zod.dev/)

## 4. Estrutura do Repositório
Este repositório contém o código fonte do app, enquanto o back-end está armazenado em um repositório separado. A separação destes permite uma melhor organização e modularidade do código, facilitando o trabalho em equipe e a manutenção a longo prazo.

## 5. Integração e Deploy
O app está atualmente integrado à API, consumindo as funcionalidades fornecidas pela API para porporcionar uma experiência do usuário fluida. Além disso, o deploy foi implantado na plataforma Vercel para garantir um ambiente de produção estável e confiável.
Este README fornece informações essenciais para começar a trabalhar com o app, incluindo instruções de instalação, configuração e utilização. Sinta-se à vontade para explorar o código fonte e contribuir para o crescimento e aprimoramento contínuo deste projeto.

## 6. Instruções de Instalação
Siga os passos abaixo para configurar e executar localmente o projeto em sua máquina:

### 6.1. Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:
- Node.js - versão 18 ou superior
- npm (gerenciador de pacotes do Node.js)
---
1. Clone o Repositório
```bash
git clone https://github.com/vinicioscst/orange-portfolio-frontend-squad24.git cd orange-portfolio-frontend-squad24
```

2. Instale as dependências
```
npm install
```

3. Configure as variaveis de ambientes

Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias. Consulte o arquivo .env.example para referência.

4. Inicie o servidor local
```
npm run dev
```

### 6.2. Testando a instalação 
Para verificar se a instalação foi bem-sucedida, abra seu navegador e acesse ```http://localhost:5173/```. Você deverá ver a interface do usuário da aplicação.

## 7. Rotas
Aqui estão algumas das principais rotas que você encontrará no front-end:

- ```/```: A rota inicial com o login.
- ```/register```: A rota para a página de registro.
- ```/discover```: A rota para a página dos projetos da comunidade.
- ```/my-projects```: A rota para a página dos seus projetos.

Lembre-se, cada rota corresponderá a um componente React diferente, e esses componentes podem ser encontrados na pasta ```src/components```.

Se você tiver mais perguntas ou precisar de mais ajuda, sinta-se à vontade para perguntar.

## 8. Conheça a Squad-24!

<table>
  <tr>
    <td align="center" style="padding: 10px;">    
      <img src="https://github.com/Alvarosig.png" width="250px"/>
       <br>
        <sub>
          <b>Álvaro Garcia</b>
          <p> <a target="_blank" href="https://www.linkedin.com/in/alvarosig" ><img src="https://img.icons8.com/color/38/000000/linkedin.png"/></a> <a target="_blank" href="https://github.com/Alvarosig"><img src="https://img.icons8.com/ios-glyphs/38/000000/github.png"/></a>
        </sub>
      </a>
  <p>Frontend Developer</p>
    </td>
    <td align="center" style="padding: 10px;">
       <img src="https://github.com/carlos-wylliam.png" width="250px"/>
      <br>
        <sub>
          <b>Carlos Wylliam</b>
          <p> <a target="_blank" href="https://www.linkedin.com/in/carlos-wylliam"><img src="https://img.icons8.com/color/38/000000/linkedin.png"/></a> <a target="_blank" href="https://github.com/carlos-wylliam"><img src="https://img.icons8.com/ios-glyphs/38/000000/github.png"/></a>
        </sub>
      </a>
  <p>Backend Developer</p>
    </td>
    <td align="center" style="padding: 10px;">
       <img src="https://github.com/mari-moreira.png" width="250px"/>
      <br>
        <sub>
          <b>Mariana Moreira</b>
          <p> <a target="_blank" href="https://www.linkedin.com/in/mariana-moreira-santos-39417828a/" ><img src="https://img.icons8.com/color/38/000000/linkedin.png"/></a> <a target="_blank" href="https://github.com/mari-moreira"><img src="https://img.icons8.com/ios-glyphs/38/000000/github.png"/></a>
        </sub>
      </a>
  <p>Backend Developer</p>
    </td>
     <td align="center" style="padding: 10px;">
      <img src="https://github.com/ravenascampos.png" width="250px"/>
   <br>
      <sub>
          <b>Ravena Campos</b>
          <p> <a target="_blank" href="https://www.linkedin.com/in/ravenascampos" ><img src="https://img.icons8.com/color/38/000000/linkedin.png"/></a> <a target="_blank" href="https://github.com/ravenascampos"><img src="https://img.icons8.com/ios-glyphs/38/000000/github.png"/></a>
        </sub>
      </a>
    <p>Frontend Developer | PO</p>
    </td>
    <td align="center" style="padding: 10px;">
      <img src="https://github.com/vinicioscst.png" width="250px"/>
        <br>
        <sub>
          <b>Vinícios Soares</b>
          <p> <a target="_blank" href="https://www.linkedin.com/in/vinicioscst" ><img src="https://img.icons8.com/color/38/000000/linkedin.png"/></a> <a target="_blank" href="https://github.com/vinicioscst"><img src="https://img.icons8.com/ios-glyphs/38/000000/github.png"/></a>
        </sub>
      </a>
      <p>FullStack Developer</p>
    </td>
