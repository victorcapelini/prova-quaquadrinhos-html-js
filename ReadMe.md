# Prova EcommIt + Html + Javascript (Junior e Pleno)

Este é um projeto para candidatos da prova da vaga de desenvolvedor de Html + Javascript

## Versão
* 1.0

## Prova

Esta prova tem como objetivo atestar os conhecimentos do candidato em Javascript e Html.

* O tempo da prova é de 3 a 5 dias para analista junior.
* O tempo da prova é de 5 a 7 dias para analista pleno.
* É permitido utilizar outras frameworks e libraries (desde que se mantenha em Javscript e Html).
* Realize um fork do projeto e ao completar mande uma pull request e nos mande um e-mail contato@ecommit.com.br (Tutorial de como fazer isso : http://pythonclub.com.br/como-fazer-fork-clone-push-pull-request-no-github.html)

### O que ganha pontos 
* Organização do código.
* Clareza no código.
* Resolver o que foi proposto.
* Testes unitários (se julgar necessário).
* Prazo proposto.

### O que perde pontos
* Copiar inteiro do amigo.
* Pedir para outra pessoa fazer por você.
* Códigos lentos.
* Não ser mobile-friendly.
* Descaracterizar o layout.

### Dúvidas
* Abra uma issue ou entre em contato conosco contato@ecommit.com.br

### A prova possui dois modos, para Junior e Pleno.

#### Para analistas Junior, as tarefas são as seguintes:
* Na pagina Principal
    - [ ] Carregar dinamicamente as imagens de acordo com o arquivo [public/api.json](public/api.json)  (exatamente igual da tela) com a imagem e a quantidade de visualizações.
    - [ ] Ajustar o contador de visualizações para quantas visualizações foram feitas por quadrinho (localstorage). Exemplo.: Se eu abrir 10 vezes o site na pagina principal e em todas for no quadrinho Xkcd, o contador deverá ser 10 visualizações.
    - [ ] Colocar uma modal para ampliar o quadrinho em cada quadrinho.
* Na página de detalhe
    - [ ] Modificar a página detalhe.html para permitir que seja carregado um quadrinho diferente dependendo de um parametro enviado. Exemplo: enviando na url detalhe.html?id=1 ou detalhe/1 ou detalhe/xkcd.
    - [ ] Carregar dinamicamente as imagens de acordo com o arquivo [public/api.json](public/api.json) de acordo com o quadrinho.
* Nova página chamada random.html
    - [ ] Criar uma nova página que seja randomica, ao entrar nela irá buscar um quadrinho aleatório do arquivo [public/api.json](public/api.json) e exibir como resultado. A cada vez que entrar na tela carregar um diferente. A tela deve seguir o mesmo padrão de layout da detalhe.html porem desta vez só com um quadrinho aleatório.
* Em todas
    - [ ] Ao clicar em Me inscrever no menu (no topo da página), mover a tela direto para a seção de Me Inscrever (no final da página).
    - [ ] Ajustar todos os menus, para ao clicar no link QuaQuadrinhos -> (Nome do quadrinho) redirecionar para a telha de detalhe do quadrinho respectivo.
    - [ ] Ao clicar em me inscrever, armazenar o email no browser (localstorage) e enviar uma modal com a mensagem "E-mail cadastrado, bem vindo !".

#### Para analistas Plenos, as tarefas são as seguintes:
    - [ ] Todas as tarefas do analista Junior acima e também:
* Na página de detalhe
    - [ ] Crie um sistema de paginação para exibir 3 quadrinhos de cada vez *Aqui não vale utilizar um pronto.
    - [ ] Integre os quadrinhos do Xkcd com a api deles: https://xkcd.com/json.html
* Nova página de pesquisa.
    - [ ] Adicione uma nova página de pesquisa no menu ao lado do menu dos QuaQuadrinhos pela key "tags" do Json.
    - [ ] Permita que seja possivel exibir os quadrinhos procurados em uma nova tela de resultado.
* Em todas
    - [ ] Faca o email enviar de fato integrando com algum servidor de Api que envie e-mail de graça.
    - [ ] Integre a pagina com o BitLy (https://www.npmjs.com/package/node-bitlyapi) ou outro encurtador e crie um modo que seja possível encurtar os links e copiar e deixar na área de transferência

### Pré-requisitos

* Internet
* Node e Npm instalado. (https://nodejs.org/en/)

### Instalação

Instale os pré-requisitos primeiramente,  abra uma janela de console (ms-dos ou batch unix)

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

## Autores

* **Carlos Augusto** - *Dev* - [engaugusto](https://github.com/engaugusto)

## Licença

A licença do projeto escolhida foi a GNU GPLv2 [LICENSE](LICENSE) para mais detalhes.