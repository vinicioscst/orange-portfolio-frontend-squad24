# Projeto Orange Juice Hackathon - Front-end (Squad-24)
Bem-vindo ao repositório oficial do front-end desenvolvido durante a participação no hackathon Orange Juice! Este projeto foi concebido como parte de uma colaboração envolvendo uma equipe de cinco pessoas, incluindo o criador deste repositório.
## Visão Geral
O objetivo principal da aplicação é fornecer uma interface de usuário intuitiva e responsiva para a nossa aplicação, que está em desenvolvimento como parte deste hackathon. Desenvolvida com React.js e utilizando a API desenvolvida em Node.js, Express e PostgreSQL, o front-end atua como a interface principal para os usuários interagirem com a aplicação.
## Estrutura do Repositório
Este repositório contém o código fonte do app, enquanto o back-end está armazenado em um repositório separado. A separação destes permite uma melhor organização e modularidade do código, facilitando o trabalho em equipe e a manutenção a longo prazo.
## Integração e Deploy
O app está atualmente integrado à API, consumindo as funcionalidades fornecidas pela API para porporcionar uma experiência do usuário fluida. Além disso, o deploy foi implantado na plataforma Vercel para garantir um ambiente de produção estável e confiável.

Este README fornece informações essenciais para começar a trabalhar com o app, incluindo instruções de instalação, configuração e utilização. Sinta-se à vontade para explorar o código fonte e contribuir para o crescimento e aprimoramento contínuo deste projeto.

# Instruções de Instalação
Siga os passos abaixo para configurar e executar localmente o projeto em sua máquina:

## Pré-requisitos
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

## Testando a instalação 
Para verificar se a instalação foi bem-sucedida, abra seu navegador e acesse ```http://localhost:5173/```. Você deverá ver a interface do usuário da aplicação.

# Rotas
Aqui estão algumas das principais rotas que você encontrará no front-end:

- ```/```: A rota inicial com o login.
- ```/register```: A rota para a página de registro.
- ```/discover```: A rota para a página dos projetos da comunidade.
- ```/my-projects```: A rota para a página dos seus projetos.

Lembre-se, cada rota corresponderá a um componente React diferente, e esses componentes podem ser encontrados na pasta ```src/components```.

Se você tiver mais perguntas ou precisar de mais ajuda, sinta-se à vontade para perguntar.

## Colaboradores da Equipe
#Conheça a Squad-24 !

- [Álvaro Silva Garcia](https://github.com/Alvarosig) - Front-end
- [Carlos Wylliam de Oliveira Soares](https://github.com/carlos-wylliam) - Back-end
- [Mariana Moreira Santos](https://github.com/mari-moreira) - Back-end
- [Ravena Sousa Campos](https://github.com/ravenascampos) - Front-end
- [Vinícios Soares Costa Paulino da Silva](https://github.com/vinicioscst) - Front-end e Back-end
