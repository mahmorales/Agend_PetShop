# 🐾 PetShop - Sistema de Agendamentos

Uma aplicação web para gerenciamento de agendamentos de um PetShop. Desenvolvida com JavaScript modular moderno (ES6+), integração com API REST (JSON Server) e empacotamento com Webpack.

> O projeto permite que o usuário visualize a agenda do dia dividida por turnos (manhã, tarde e noite), cadastre novos atendimentos e cancele agendamentos existentes.

## 💻 Telas da Aplicação

Interface

<img width="1917" height="881" alt="image" src="https://github.com/user-attachments/assets/1bbef7f6-2e03-4f3d-b8fa-a20be736355a" />

Formulário de cadastro

<img width="1917" height="901" alt="image" src="https://github.com/user-attachments/assets/929797ea-3f00-481f-8e5e-5291a037139d" />




## ✨ Funcionalidades

- **Visualização Diária:** Lista de agendamentos filtrada pela data selecionada e organizada automaticamente nos períodos da manhã, tarde e noite.
- **Novo Agendamento:** Modal interativo para cadastro de cliente, pet, telefone, descrição do serviço, data e horário.
- **Validação de Horários:** Horários passados ou já ocupados ficam indisponíveis para seleção dinamicamente.
- **Cancelamento:** Exclusão de agendamentos diretamente pela interface com atualização da API em tempo real.
- **Sincronização de Calendários:** O calendário da página principal e do modal conversam entre si para manter a data atualizada.

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- **HTML5 & CSS3:** Semântica, CSS customizado, CSS Variables e Flexbox.
- **JavaScript (ES6+):** Lógica assíncrona (`async/await`), manipulação de DOM, consumo de API com `fetch`.
- **[Webpack](https://webpack.js.org/):** Empacotador de módulos (Bundler) para rodar o servidor de desenvolvimento e build do projeto.
- **[Day.js](https://day.js.org/):** Biblioteca leve para validação, formatação e manipulação de datas e horas.
- **[JSON Server](https://github.com/typicode/json-server):** Criação de uma Fake REST API local de forma rápida para simular um banco de dados.

## 📁 Estrutura do Projeto

O projeto utiliza o padrão de **Módulos do JavaScript**, organizando as responsabilidades em pequenos arquivos para facilitar a manutenção:

- `/modules`: Lógica isolada de formulários (`submit`, `hours-load`, `date-change`) e renderização da agenda.
- `/services`: Funções responsáveis pela comunicação exclusiva com a API externa (GET, POST, DELETE).
- `/utils`: Arquivos de configuração global, como a definição dos horários de funcionamento.

## 🛠️ Como rodar o projeto localmente

Para clonar e executar esta aplicação, você precisará do [Git](https://git-scm.com), e do [Node.js](https://nodejs.org/en/) instalados na sua máquina.

No seu terminal, execute os seguintes comandos:

```bash
# Clone este repositório
$ git clone [https://github.com/SEU_USUARIO/nome-do-repositorio.git](https://github.com/SEU_USUARIO/nome-do-repositorio.git)

# Acesse a pasta do projeto
$ cd nome-do-repositorio

# Instale as dependências
$ npm install

# Inicie a Fake API (JSON Server) - Irá rodar na porta 3333
$ npm run server

# Em um NOVO terminal, inicie a aplicação Webpack - Irá rodar na porta 3000
$ npm run start
