$(".figura").click(function () {
    var url = $(this).find("img").attr("src");
    $("#myModal img").attr("src", url);
    $("#myModal").modal("show");
    
    var visualizacoes = $(this).find("p").text().split(" ");
    visualizacoes[0]++;
    $(this).find("p").text(visualizacoes.join(" "));
    console.log(visualizacoes);
});

