# awesome-projects
Awesome Projects é um repositórios dos projetos open source dos membros do [#DevsOnBeer](https://t.me/devsonbeer).

Projetos de pessoas que não são do grupo SERÃO ACEITOS também, mas custa nada entrar no grupo. 😉

A princípio será um repositório com arquivos markdown descrevendo o projeto, as 
tecnologias utilizadas e se precisa de ajuda.
Já está sendo desenvolvida uma API para entregar os projetos em formato JSON.

A intenção é que o front-end seja desenvolvido em ReactJS ou VueJS.

## API

Esta API está sendo desenvolvida usando NodeJS e o framework express. Toda ajuda é bem-vinda.

Atualmente existem dois endpoints.

`/api/v1/projetos` Retorna todos os projetos salvos na pasta `projetos/`

`/api/v1/projeto/:id` Retorna as informações do projeto com o id especificado.


## Colaborando

Qualquer ajuda é bem-vinda. O principal arquivo do projeto, que traz o servidor, é o `index.js`.

Na pasta `lib/` existe o código que transforma o Markdown em JSON.

## Licença
Este projeto está licenciado sob MIT.

Uma cópia da licença está na raiz do projeto.

Para mais informações, acesse: [Escolha uma licença - MIT](http://escolhaumalicenca.com.br/licencas/mit/)