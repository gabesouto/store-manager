
# Projeto Store Manager

Neste projeto, desenvolvi uma API utilizando a arquitetura em camadas!

A API que criei é um sistema de gerenciamento de vendas, permitindo a criação, visualização, exclusão e atualização de produtos e vendas. Utilizei o banco de dados MySQL para gerenciar os dados de forma eficaz. Além disso, a API foi desenvolvida seguindo os princípios RESTful.

Durante o desenvolvimento deste projeto, criei testes abrangentes para garantir a funcionalidade das implementações, reforçando assim minha habilidade como pessoa desenvolvedora.

Ao longo deste projeto, fui capaz de:

- Interagir com sucesso com um banco de dados relacional MySQL;
- Implementar uma API sólida e bem-estruturada, seguindo a arquitetura em camadas;
- Garantir a integridade dos dados por meio da implementação de  validações para os dados recebidos pela API;
- Reforçar minhas habilidades escrevendo testes eficazes para as APIs, assegurando a implementação correta dos endpoints.
Estou satisfeito com o resultado deste projeto e animado para continuar a aprimorar minhas habilidades enquanto enfrento novos desafios emocionantes!
## Stacks utilizadas



- Node.js
- MySQL
- Docker
- JWT (JSON Web Tokens)
- Mocha / Chai

## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:gabesouto/Blogs-API.git
```

Entre no diretório do projeto

```bash
  cd store-manager
```

Instale as dependências

```bash
npm install

```


```bash
docker-compose up -d db

# É possível ver os logs da aplicação com `docker logs -n 20 -f <nome-do-container>`
docker logs -n 20 -f store_manager
