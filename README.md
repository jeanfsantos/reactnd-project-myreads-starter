# Projeto MyReads

## Índice

-   [Visão geral do projeto](#visão-geral-do-projeto)
-   [Servidor Backend](#servidor-backend)
-   [Instalar e executar](#instalar-e-executar)
-   [Recursos usado](#recursos-usado)

## Visão geral do projeto

Projeto MyReads é uma aplicação de estante de livros que permite selecionar e classificar os livros que você já leu, está lendo ou quer ler. O projeto enfatiza o uso de React para criar a aplicação e fornece um servidor de API e uma biblioteca cliente, que você usará para armazenar informações à medida que interage com a aplicação.

## Servidor Backend

Para simplificar seu processo de desenvolvimento, fornecemos um servidor de backend para você desenvolver. O arquivo fornecido [`BooksAPI.js`] (src / BooksAPI.js) contém os métodos necessários para executar as operações necessárias no backend:

-   [`getAll`](#getall)
-   [`update`](#update)
-   [`search`](#search)

### `getAll`

Assinatura do Método:

```js
getAll();
```

-   Retorna um Promise que resolve para um objeto JSON contendo uma coleção de objetos de livro.
-   Esta coleção representa os livros atualmente nas estantes do seu aplicativo.

### `update`

Assinatura do Método:

```js
update(book, shelf);
```

-   book: `<Object>` contendo no mínimo um atributo `id`
-   shelf: `<String>` contém um dos ["wantToRead", "currentReading", "read"]
-   Retorna um Promise que resolve para um objeto JSON contendo os dados de resposta da solicitação POST

### `search`

Assinatura do Método:

```js
search(query);
```

-   query: `<String>`
-   Retorna um Promise que resolve um objeto JSON contendo uma coleção de no máximo 20 objetos de livro.
-   Esses livros não sabem em que prateleira estão. Eles são apenas resultados crus. Você precisará garantir que os livros tenham o estado correto na página de pesquisa.

## Instalar e executar

Para começar a desenvolver imediatamente:

-   instalar todas as dependências do projeto com `npm install`
-   inicie o servidor de desenvolvimento com `npm start`

## Recursos usado

-   [React](https://reactjs.org/) Uma biblioteca JavaScript para construir interfaces com o usuário.
-   [Eslint](https://eslint.org/) para controle da qualidade do código.
-   [webpack](https://webpack.js.org/) para executar as tarefas de compilar o js, css e instanciar um servidor de desenolvimento.
