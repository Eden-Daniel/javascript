// carregamento de boas vindas
function carregar(){

    var data = new Date()
    var hora = data.getHours()
    var inicio = document.getElementById('entrada')
    var imagemHora = document.getElementById('imagemHora')

    if(hora >= 5 && hora <12){
        inicio.innerHTML = 'Bom Dia!'
    } else if(hora >=12 && hora <18){
        inicio.innerHTML = 'Boa Tarde!'
        imagemHora.src = 'img/afternoon.png'
    } else {
        inicio.innerHTML = 'Boa Noite!'
        imagemHora.src = 'img/night.png'
    }    
}

// verificações das idades
function verificar(){
    var data = new Date()
    var anoAgora = data.getFullYear()
    var txtAno = document.getElementById('txtAno')
    var resultado = document.getElementById('resultado')

    var anoNascimento = Number(txtAno.value)
    var idade = anoAgora - anoNascimento
    var sexo = document.getElementsByName('radiosexo')
    var genero = ''
    
    if(anoNascimento < 1920 || anoNascimento > 2021){
        alert('Digite um ano entre 1920 e 2021')
    } else {
        if(sexo[0].checked){
            genero = 'Homen'
            
        } else if(sexo[1].checked){
            genero = 'Mulher'
        }
        resultado.innerHTML = `Detectamos um ${genero} de ${idade} anos`
    }
    
}