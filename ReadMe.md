# Prova EcommIt + Html + Javascript (Junior e Pleno)

# Versão
* 1.0

Este é um projeto de exemplo para candidatos da prova da vaga de desenvolvedor de Html + Javascript puros

## Prova

Esta prova tem como objetivo atestar os conhecimentos do candidato em Javascript e Html.

* O tempo da prova é de 3 a 5 dias para analista junior.
* O tempo da prova é de 6 a 8 dias para analista pleno.

### A prova possui duas etapas.

#### Para analistas Junior, as tarefas são as seguintes:
* Na pagina Principal
    - [ ] Carregar dinamicamente as imagens de acordo com o arquivo ./public/api.json (um aleatório) com a imagem e a quantidade de visualizações.
    - [ ] Ajustar o contador de visualizações para quantas visualizações foram feitas por quadrinho (localstorage). Exemplo.: Se eu abrir 10 vezes o site na pagina principal e em todas for no quadrinho Xkcd, o contador deverá ser 10 visualizações.
* Na página de detalhe
    - [ ] Colocar uma modal para ampliar o quadrinho em cada quadrinho.
    - [ ] Modificar a página detalhe.html para permitir que seja carregado um quadrinho diferente dependendo de um parametro enviado na url. Exemplo: detalhe.html?id=1
    - [ ] Carregar dinamicamente as imagens de acordo com o arquivo ./public/api.json de acordo com o quadrinho
* Em todas
    - [ ] Ajustar todos os menus, para ao clicar no link QuaQuadrinhos -> (Nome do quadrinho) redirecionar para a telha de detalhe do quadrinho respectivo.
    - [ ] Ao clicar em me inscrever, armazenar o email no browser (localstorage)

#### Para analistas Plenos, as tarefas são as seguintes:
- [ ] Todas as tarefas do analista Junior acima e também:
* Na página Home
    - [ ] Crie um sistema de paginação para exibir 3 quadrinhos de cada vez.
* Na página de detalhe
    - [ ] Crie um sistema de paginação para exibir 3 quadrinhos de cada vez.
    - [ ] Integre os quadrinhos do Xkcd com a api deles: https://xkcd.com/json.html
* Nova página de pesquisa
    - [ ] Adicione uma nova página de pesquisa no menu ao lado do menu dos QuaQuadrinhos pela key "tags" do Json
    - [ ] Permita que seja possivel exibir os quadrinhos procurados em uma nova tela de resultado 
* Em todas
    - [ ] Faca o email enviar de fato integrando com algum servidor de Api que envie e-mail de graça.
    - [ ] Integre a pagina com o BitLy (https://www.npmjs.com/package/node-bitlyapi) ou outro encurtador e crie um modo que seja possível encurtar os links e copiar e deixar na área de transferência

### Pré-requisitos

* Internet
* Node e Npm instalado. (https://nodejs.org/en/)

### Instalação

Instale os pré-requisitos primeiramente, em sequencia abra uma janela de console (ms-dos ou batch unix)

Execute o comando abaixo para instalar as dependencias do projeto
```
npm install node-sass less gulp gulp-sass gulp-less gulp-connect
```

Em seguida digite o comando abaixo para subir o servidor
```
gulp
```

Ele deverá retornar as linhas da seguinte forma

```
[00:05:46] Server started http://localhost:8080
[00:05:46] LiveReload started on port 35729
```

Cole a url no browser e boa sorte ! 

## Authors

* **Carlos Augusto** - *Dev* - [engaugusto](https://github.com/engaugusto)

## Licença

A licença do projeto escolhida foi a GNU GPLv3 [LICENSE.md](LICENSE.md) para mais detalhes.