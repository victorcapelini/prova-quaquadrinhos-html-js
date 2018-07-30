$(() => {
    obtemTirinhas()
});



function obtemTirinhas() {
    $.getJSON('../api.json',
        data => {
            umsabadoqualquer = data.tirinhas.umsabadoqualquer;
            xkcd = data.tirinhas.xkcd;
            vidaprogramador = data.tirinhas.vidaprogramador;
            vidadesuporte = data.tirinhas.vidadesuporte;
            armandinho = data.tirinhas.armandinho;
            carregaTirinhas();
        });
}

function carregaTirinhas() {
    i = 3;
    $("#figura1").append(
        novaImagem(
            umsabadoqualquer[i].img,
            // umsabadoqualquer[i].tags,
            "Um Sabado Qualquer",
            umsabadoqualquer[i].views
        )
    );
    i = 0;
    $("#figura2").append(
        novaImagem(
            vidaprogramador[i].img,
            // vidaprogramador[i].tags,
            "Vida de Programador",
            vidaprogramador[i].views
        )
    );
    i=1;
    $("#figura3").append(
        novaImagem(
            xkcd[i].img,
            // xkcd[i].tags,
            "Xkcd",
            xkcd[i].views
        )
    );
    i=0;
    $("#figura4").append(
        novaImagem(
            vidadesuporte[i].img,
            // vidadesuporte[i].tags,
            "Vida de Suporte",
            vidadesuporte[i].views
        )
    );
    i=3;
    $("#figura5").append(
        novaImagem(
            armandinho[i].img,
            // armandinho[i].tags,
            "Armandinho",
            armandinho[i].views
        )
    );
}

function novaImagem(srcImagem, tituloImagem, visualizacoesImagem) {
    var figura = $("<figure>").addClass("effect-ruby").addClass("abrirModal");
    var imagem = $("<img>").addClass("img-fluid").attr("alt", "img13").attr("src", srcImagem);
    var legenda = $("<figcaption>")
    var tituloLegenda = $("<h5>").text(tituloImagem);
    var visualizacoes = $("<p>").text(visualizacoesImagem + " Visualizações");

    legenda.append(tituloLegenda);
    legenda.append(visualizacoes);

    figura.append(imagem);
    figura.append(legenda);

    return figura;
}
