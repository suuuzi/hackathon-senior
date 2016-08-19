# Requisitos e dependências

1. NodeJS
1. Gulp
1. Bower
1. AngularJS

# Estrutura

* **/**
  * **.bowerrc** Configuração do diretório de instalação das bibliotecas
  * **.gitignore** Configuração dos diretórios/arquivos não versionados
  * **bower.json** Configuração do bower
  * **config.json** Arquivo de configuração na Plataforma de Acesso
  * **gulpfile.js** Configuração do gulp
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


## Executando o projeto
Com o projeto configurado execute:
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
