# Repositório do desafio técnico PortLuis.Tech

Repositório possui dois projetos para o desafio técnico o **backend-txt** foi o que me desafiaram fazer seguindo as orientações propostas, e o **backend-mysql** é como eu faria no dia a dia utilizando o banco de dados MySQL e o ORM Sequelize. Reforço que normalmente não crio repositórios com dois projetos, como podem olhar no meu [Git Hub][Git Hub-url], mas criei dessa forma para não correr o risco de não ver o com o MySQL. Abaixo segue o README referente a cada projeto.

<details>
  <summary>README do backend-txt</summary>

## backend-txt

 Repositório possuí projeto desenvolvido para o desafio técnico **PortLuis.tech**, abordando conceitos de `JavaScript`, `es6`, testes com `Node.js` e módulos.

## Informações adicionais

- Projeto realizado em `JavaScript(es6)`;
- Para testes foram utilizados o `Jest`;
- Para organização e padronização foi utilizado o `ESLint`;
- Para validação foi utilizado o módulo Node.js [`Joi`](https://joi.dev/api/?v=17.9.1);
- Utilizei o modulo `fs` em sua versão síncrona. No entanto, a versão síncrona do fs é mais simples de usar em casos em que não é necessário lidar com um grande volume de operações de leitura/escrita de arquivos, visando um melhor entendimento do código. E por isso ela foi escolhida.

## Linguagens e ferramentas usadas

[![Git][Git-logo]][Git-url]
[![ESLint][ESLint-logo]][ESLint-url]
[![JavaScript][JavaScript-logo]][JavaScript-url]
[![NodeJS][NodeJS-logo]][NodeJS-url]
[![Jest][Jest-logo]][Jest-url]

## O que foi desenvolvido

Neste projeto, implementei um programa cuja execução cruza pedidos e notas gerando uma listagem de pedidos pendentes.

## Instruções para instalar e rodar

1. Clone o repo:

    ```bash
    git clone git@github.com:Ludson96/desafio-portlouis-tech.git
    ```

1. Entre na pasta do repositório que você acabou de clonar:

    ```bash
    cd desafio-portlouis-tech/backend-txt/
    ```

1. Instale as dependências:

    ```bash
    npm install
    ```

1. Caso queira rodar os testes utilize o comando (o console.error é para melhor visualização):

    ```bash
    npm test ou npm test <nome do arquivo de teste>
    ```

1. Inicie a aplicação com o comando:

    ```bash
    npm start
    ```

1. Será criado 4 arquivos de texto, sendo eles:

- `allNotas.txt` - arquivo com todas as notas;
- `allPedidos.txt` - arquivo com todos os pedidos;
- `itensPendentes.txt` - arquivo com itensPendentes;
- `pedidosPendentes.txt` - arquivo final com pedidos pendentes, esse é o arquivo final e o **objetivo da aplicação**.

[Git-logo]: https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white
[Git-url]: https://git-scm.com
[ESLint-logo]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
[ESLint-url]: https://eslint.org/
[JavaScript-logo]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[JavaScript-url]: https://www.javascript.com/
[NodeJS-logo]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[NodeJS-url]: https://nodejs.org/en
[Jest-logo]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]: https://jestjs.io

</details>

<details>
  <summary>README do backend-mysql</summary>

  </details>

[Git Hub-url]: https://github.com/Ludson96
