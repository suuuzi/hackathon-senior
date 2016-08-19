# Introdução

Com a crescente necessidade de padronização nos projetos desenvolvidos na Senior Sistemas, em especial pelos projetos desenvolvidos de acordo com a Arquitetura da Plataforma G7, um Projeto Template foi criado.

Este projeto possui a estrutura básica, bem com a definição das dependências e boas práticas para o desenvolvimento na Plataforma G7.

# Requisitos e dependências

1. NodeJS
1. Gulp
  1. Grunt também pode ser utilizado, se assim for o desejo da equipe
1. Bower
1. AngularJS

# Estrutura

* **/**
  * **.bowerrc** Configuração do diretório de instalação das bibliotecas
  * **.gitignore** Configuração dos diretórios/arquivos não versionados
  * **.gitlab-ci.yml** Configuração da integração contínua no Git Senior
  * **bower.json** Configuração do bower
  * **CHANGELOG** Arquivo com as mudanças de cada versão do projeto
  * **config.json** Arquivo de configuração na Plataforma de Acesso
  * **CONTRIBUTING.md** Guia de contribuição para o projeto
  * **gulpfile.js** Configuração do gulp
  * **LICENSE** Informações da licença
  * **package.json** Configurações do npm
  * **README.md** Instruções de execução e release
  * **test-main.js** Configuração do requireJS para os testes unitários
  * **test.conf.js** Configuração do KarmaJS para os testes unitários

* **/src**
  * **index.html**
  * **/assets** Pasta com arquivos css, webfonts, imagens e arquivos de préprocessadores (less, sass, etc).
  * **/app** Pasta contendo todo o código JS referente ao projeto
    * **/components** Pasta com componentes genéricos utilizados por um ou mais módulos da aplicação.
        * **/componentXY** Pasta com os códigos fontes do componente XY.
          * **/services** Pasta com os serviços exclusivos do componente XY, se houver.
          * **/directives** Pasta com os diretivas exclusivos do componente XY, se houver.
          * **/controllers** Pasta com os controladores exclusivos do componente XY, se houver.
          * **/views** ou **/templates** Pasta com as views/templates exclusivos do componente XY, se houver.
          * **module.js** Arquivo com a definição do módulo do componente XY.
          
          > Estes diretórios podem ser omitidos para componentes pequenos que possuem apenas um arquivo de cada tipo (Controller, View, etc...).
    * **/modules** Pasta agrupadora de módulos da aplicação.
        * **/moduleX** Pasta com os códigos fontes do módulo X.
          * **/services** Pasta com os serviços exclusivos do módulo X, se houver.
          * **/components** Pasta com os componentes exclusivos do módulo X, se houver. Segue a estrutura da pasta componentes.
          * **/directives** Pasta com os diretivas exclusivos do módulo X, se houver.
          * **/controllers** Pasta com os controladores exclusivos do módulo X, se houver.
          * **/views** ou **/templates** Pasta com as views/templates exclusivos do módulo X, se houver.
          * **module.js** Arquivo com a definição do módulo X.
        
          > Estes diretórios podem ser omitidos para módulo pequenos que possuem apenas um arquivo de cada tipo (Controller, View, etc...).

    * **app.js** Arquivo com a definição do módulo principal, o qual carrega as dependências e instancia os módulos.
* **/tests** Contém os arquivos de testes.
* **/dist** Contém todos os arquivos gerados para a versão de distribuição.

# Configuração do projeto

## Inicializando o repositório
Realize um git clone do projeto para o seu local, remova o link para o remote do template e adicione o repositório remoto correto

```bash
git clone git@git.senior.com.br:design/frontend-template.git seu-novo-projeto
cd seu-novo-projeto
# linux
rm -rf .git

# windows
rd .git /S /Q

git init
git remote add origin git@git.senior.com.br:seu-grupo/seu-novo-projeto.git

# NOTA: Com essa abordagem será iniciado um novo repositório sem nenhum histórico de commits
```
 Outra alternativa é alterar o endereço remoto do repositório após o git clone:

```bash
git clone git@git.senior.com.br:design/frontend-template.git seu-novo-projeto
cd seu-novo-projeto
git remote set-url origin git@git.senior.com.br:seu-grupo/seu-novo-projeto.git

# NOTA: Com essa abordagem o histórico de commits do projeto de template será mantido em seu projeto
```

## Configurando as propriedades
O projeto de frontend-template configura todos os geradores e valores para frontend-template e/ou referências a frontend.

Para configurar as propriedades corretas para o seu projeto verifique os seguintes arquivos:

- frontend-template\bower.json:
``` json
    1  {
    2:   "name": "frontend-template",
    3    "authors": [
    4      "Senior Sistemas"
    5    ],
    6:   "description": "Projeto template para o desenvolvimento do frontend na Senior Sistemas",
    7    "main": "",
    8    "license": "ISC",
    9:   "homepage": "http://git.senior.com.br/design/front-template",
```
  

- gulpfile.js:
``` js
   80    return gulp
   81      .src(['./dist/**/*'])
   82:     .pipe(gulpSSH.dest('/usr/share/nginx/html/frontend-template/'))
   83  });
   84  
   ``` 

- package.json:
``` json
  1  {
    2:   "name": "frontend-template",
    3    "version": "1.0.0",
    4:   "description": "Projeto template para o desenvolvimento do frontend na Senior Sistemas",
    5    "main": "app.js",
    6    "scripts": {
    .
    9      "local": "npm install && bower install && gulp && npm start"
   10    },
   11:   "keywords": ["frontend", "template", "senior"],
   12    "author": "Senior Sistemas",
   13    "license": "ISC",
```

- src\index.html:
``` xml
  3 <meta charset="utf-8">
    4 <meta http-equiv="X-UA-Compatible" content="IE=edge">
    5:  <title>Frontend Template</title>
    6 <meta name="description" content="">
    7 <meta name="viewport" content="width=device-width, initial-scale=1">
    ...
   29 <body ng-app="templateApp">
   30 
   32 
   33 <!-- bower:js -->
```

- src\app\app.js:
```js
    1  (function(){
    2   'use strict';
    3:  angular.module('frontend-template', [
    4     //external
    5      'ui.router',
```

## Executando o projeto
Com o projeto configurado execute:
```bash
npm install
bower install
gulp
npm start
```

ou execute
```bash
npm run local
```

e acesse http://localhost:8080/dist

## Acompanhando mudanças
Sempre que desejar testar o seu projeto ou verificar se as mudanças fizeram efeito execute (*a cada mudança*)

```bash
gulp
```

Se desejar acompanhar todas as mudanças em tempo real execute (*apenas uma vez*)
```bash
gulp watch
```

## Executar os testes unitários
Sempre que desejar testar o seu projeto (testes unitários)

```bash
gulp test
```
 ou
 
 ```bash
npm test
```

ou 

```bash
karma start test.conf.js
```

Se desejar que a cada mudança os testes sejam executados altere o arquivo *test.conf.js*
```js
autoWatch: true
```

Se desejar que o navegador permaneça aberto altere o arquivo *test.conf.js*
```js
singleRun: false
```

# Deploy para testes
Sempre que desejar liberar uma versão para testes (*teste46 por padrão, pode ser ajustado no gulpfile.js*) execute
```bash
gulp ssh
```

# Incrementar versão
Sempre que desejar incrementar uma versão do produto execute
```bash
gulp bump --release=[major | minor | patch]
```

Como exemplo:
- o comando `gulp bump --release=major` vai incrementar da versão **1.0.0** para a versão **2.0.0**
- o comando `gulp bump --release=minor` vai incrementar da versão **1.0.0** para a versão **1.1.0**
- o comando `gulp bump --release=patch` ou simplesmente `gulp bump` vai incrementar da versão **1.0.0** para a versão **1.0.1**

Este incremento é aplicado nos arquivos *package.json* e *bower.json*

# Configurações do Gitlab CI
O Git Senior, a partir da versão 8.x, tem integração total com o gitlab-ci, possibilitando o uso de Runners específicos para *Build*, *Test* e *Deploy*.

O arquivo [.gitlab-ci.yml](.gitlab-ci.yml) possui uma configuração pré-definida para que o processo de liberação ocorra de maneira transparente aqui na Senior.

Com esta configuração, a cada commit, é realizado o Build e o Test da versão e sempre que uma tag for gerada o deploy também será executado, gerando um zip com o resultado do build e também a árvore de diretórios/arquivos para a navegação no próprio Git Senior.

Para verificar o status do build/test/deploy acesse a sessão *Pipeline* do seu projeto no Git Senior.

# Dúvidas? Problemas? Converse com quem contribuiu

- Andrei Leonardo Reitz <andrei.reitz@senior.com.br>
- Helton Andreazza <helton.andreazza@senior.com.br>
- Jonatan Sebastian Neves <jonatan.neves@senior.com.br>
- Thiago R. M. Bitencourt <thiago.bitencourt@senior.com.br>


Se o problema/a dúvida persisir abra um chamado no [jira](http://jira.senior.com.br) projeto **Arquitetura** e Epic **ARQ-117**