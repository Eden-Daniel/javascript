var media = document.getElementById('media');
var nota1 = document.getElementById('nota1');
var nota2 = document.getElementById('nota2');
var nota3 = document.getElementById('nota3');
var nota4 = document.getElementById('nota4');
var mediaTotal = 0
var resultado = document.getElementById('resultado');

function calcular(){
    let valMedia = parseFloat(media.value);
    let valNota1 = parseFloat(nota1.value);
    let valNota2 = parseFloat(nota2.value);
    let valNota3 = parseFloat(nota3.value);
    let valNota4 = parseFloat(nota4.value);

    mediaTotal = (valNota1 + valNota2 +  valNota3  +valNota4) /  4;

    if(mediaTotal > valMedia){
        resultado.innerHTML = `[APROVADO] a média é ${valMedia.toFixed(1)} é sua nota foi ${mediaTotal.toFixed(1)}`;
    } else {
        resultado.innerHTML = `[REPROVADO] a média é ${valMedia.toFixed(1)} e sua nota foi ${mediaTotal.toFixed(1)}`;
    };
};