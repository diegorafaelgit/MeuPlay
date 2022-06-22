// RELOGIO

function relogio() {
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();

    if (hora < 10) {
        hora = "0" + hora;
    }
    if (minuto < 10) {
        minuto = "0" + minuto;
    }
    if (segundo < 10) {
        segundo = "0" + segundo;
    }

    var horas = hora + ":" + minuto + ":" + segundo;
    document.getElementById("rel").value = horas;
}
var tempo = setInterval(relogio, 1000);

function aumentaFonte() {
    var elemento = $('.paragrafos');

    var f = elemento.css('font-size');

    elemento.css('font-size', parseInt(f) + 1);

}

function diminuiFonte() {
    var elemento = $('.paragrafos');

    var f = elemento.css('font-size');

    elemento.css('font-size', parseInt(f) - 1);

}

function modoClaro() {
    var elemento = $('.mudarModo');
    var elementoTexto = $('.mudarCor');

    elemento.css('background-color', '#fff');
    elementoTexto.css('color', '#000');

}

function modoEscuro() {
    var elemento = $('.mudarModo');
    var elementoTexto = $('.mudarCor');

    elemento.css('background-color', '#000');
    elementoTexto.css('color', '#E0FFFF');

}