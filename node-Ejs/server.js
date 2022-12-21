const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
    const itens = [

        {
            title: "D",
            menssage: "esenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            menssage: "js usa javascript para renderizar Html"
        },
        {
            title: "M",
            menssage: "uito fácil de usar"
        },
        {
            title: "A",
            menssage: "morzinho"
        },
        {
            title: "I",
            menssage: "nstall ejs"
        },
        {
            title: "S",
            menssage: "intaxe simples ejs",

        },
    ];

    const subtitle = "Uma linguagem de modelagem para criação de pagina HTML"


    res.render("pages/index", {
        qualitys: itens,
        subtitle: subtitle,
    });
})

app.get("/sobre", function (req, res){
    res.render("pages/about");
})

app.listen(8080)

console.log("rodando")