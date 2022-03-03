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

    var img = document.createElement('img')   // criando teg image html
    img.setAttribute('id', 'foto')   // colocando um id na teg criada
    
    if(anoNascimento < 1920 || anoNascimento > 2021){
        alert('Digite um ano entre 1920 e 2021')
    } else {
        if(sexo[0].checked){
            genero = 'Homen'
            if(idade>=0 && idade <= 10){
                img.setAttribute('src', 'img/m_criança.png')
            } else if (idade < 21){
                img.setAttribute('src', 'img/m_jovem.png')
            } else if (idade < 60){
                img.setAttribute('src', 'img/m_adulto.png')
            } else {
                img.setAttribute('src', 'img/m_velho.png')
            }            
        } else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade <= 10){
                img.setAttribute('src', 'img/f_criança.png')
            } else if (idade < 21){
                img.setAttribute('src', 'img/f_jovem.png')
            } else if (idade < 60){
                img.setAttribute('src', 'img/f_adulto.png')
            } else {
                img.setAttribute('src', 'img/f_velha.png')
            }  

        }

        // resultado final
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos um ${genero} de ${idade} anos <br>` 
        resultado.appendChild(img)
    }
    
}