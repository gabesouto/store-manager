# Store Manager 

## Descrição

Neste projeto, desenvolvi um sistema de gestão de vendas!

A API que criei é um sistema de gestão de vendas, permitindo a criação, visualização, exclusão e atualização de produtos e vendas. Utilizei o banco de dados MySQL para gerenciar os dados de forma eficaz. Além disso, a API foi desenvolvida seguindo os princípios RESTful.

Ao longo do desenvolvimento deste projeto, criei testes abrangentes para garantir a funcionalidade das implementações, fortalecendo assim minhas habilidades como desenvolvedor.

Durante este projeto, fui capaz de:

Interagir com sucesso com um banco de dados relacional MySQL;
Implementar uma API robusta e bem estruturada, seguindo a arquitetura em camadas;
Garantir a integridade dos dados implementando validações para os dados recebidos pela API;
Reforçar minhas habilidades escrevendo testes eficazes para a API, garantindo a implementação correta dos endpoints.

## Funcionalidades 
### Produtos

1. **Listar Todos os Produtos:**
   - Método: GET
   - Endpoint: `/products`
   - Descrição: Retorna um array com todos os produtos cadastrados.

2. **Buscar Produto por ID:**
   - Método: GET
   - Endpoint: `/products/:id`
   - Descrição: Retorna um objeto com o produto que corresponde ao ID especificado.

3. **Criar Novo Produto:**
   - Método: POST
   - Endpoint: `/products`
   - Descrição: Cria um novo produto com base nos dados fornecidos.

4. **Atualizar Produto por ID:**
   - Método: PUT
   - Endpoint: `/products/:id`
   - Descrição: Atualiza um produto existente que corresponde ao ID especificado.

5. **Excluir Produto por ID:**
   - Método: DELETE
   - Endpoint: `/products/:id`
   - Descrição: Exclui um produto que corresponde ao ID especificado.

6. **Pesquisar Produtos por Termo:**
   - Método: GET
   - Endpoint: `/products/search?q=:searchTerm`
   - Descrição: Retorna um array de produtos que correspondem ao termo de busca especificado.

### Vendas

7. **Listar Todas as Vendas:**
   - Método: GET
   - Endpoint: `/sales`
   - Descrição: Retorna um array com todas as vendas registradas.

8. **Buscar Venda por ID:**
   - Método: GET
   - Endpoint: `/sales/:id`
   - Descrição: Retorna um objeto com a venda que corresponde ao ID especificado.

9. **Criar Nova Venda:**
   - Método: POST
   - Endpoint: `/sales`
   - Descrição: Cria uma nova venda com base nos dados fornecidos.

10. **Atualizar Venda por ID:**
    - Método: PUT
    - Endpoint: `/sales/:id`
    - Descrição: Atualiza uma venda existente que corresponde ao ID especificado.

11. **Excluir Venda por ID:**
    - Método: DELETE


<details>
<summary>Exemplo de uso dos endpoints</summary>

## Products

#### GET `/products`

- Returns an array with all products.

![](https://github.com/gabesouto/store-manager/blob/main/public/ezgif.com-video-to-gif-converter.gif)

#### GET `/products/:id`

- Returns an object with the product that matches the id.

![](https://github.com/gabesouto/store-manager/blob/main/public/productsById.gif)

#### POST `/products`

- Creates a new product.

![](https://github.com/gabesouto/store-manager/blob/main/public/postProduct.gif)

#### PUT `/products/:id`

- Updates a product that matches the id.

![](https://github.com/gabesouto/store-manager/blob/main/public/putProduct.gif)

#### DELETE `/products/:id`

- Deletes a product that matches the id.

![](https://github.com/gabesouto/store-manager/blob/main/public/deleteProduct.gif)

#### GET `/products/search?q=:searchTerm`

- Returns an array of products that match the search term.

![](https://github.com/gabesouto/store-manager/blob/main/public/searchProduct.gif)

## Sales

#### GET `/sales`

- Returns an array with all sales.

![](https://github.com/gabesouto/store-manager/blob/main/public/getAllSales.gif)

#### GET `/sales/:id`

- Returns an object with the sale that matches the id.

![](https://github.com/gabesouto/store-manager/blob/main/public/getSaleById.gif)

#### POST `/sales`

- Creates a new sale.

![](https://github.com/gabesouto/store-manager/blob/main/public/postSale.gif)

#### PUT `/sales/:id`

- Updates a sale that matches the id.

![](https://github.com/gabesouto/store-manager/blob/main/public/putSale.gif)

#### DELETE `/sales/:id`

- Deletes a sale that matches the id.

![](https://github.com/gabesouto/store-manager/blob/main/public/deleteSale.gif)


</details>

## Stacks Utilizadas

- Node.js
- MySQL
- Docker
- JWT (JSON Web Tokens)
- Mocha / Chai

## Como rodar o sistema

<details>
<summary>🐳 Com Docker</summary>

Clone o projeto

````bash
git clone git@github.com:gabesouto/store-manager.git

````
Entre no diretório do projeto

```bash
  cd store-manager
````
Instale as dependências do projeto

```bash
# Install dependencies
npm install
```

Para iniciar os contêineres do compose para backend e db, utilize o seguinte comando:
```bash
docker-compose up -d
```

 Para ver os logs da aplicação 
 ```bash
docker logs -n 20 -f store_manager
```
</details>

<details>
<summary>🖥️ Localmente</summary>

⚠️ Atenção: Ao executar localmente, a aplicação deve receber variáveis de ambiente conforme exemplificado no arquivo env.example para se comunicar com o serviço de banco de dados.

Instale as dependências do projeto
```bash
npm install
```

 Inicie apenas o serviço db no Docker Compose, você pode utilizar o seguinte comando:
 ```bash
docker-compose up -d db
```


Para iniciar a aplicação em modo de desenvolvimento
```bash
npm run dev:local
```

