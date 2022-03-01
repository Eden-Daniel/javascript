function carregar(){

    var data = new Date()
    var hora = data.getHours()
    var inicio = document.getElementById('entrada')

    if(hora >= 5 && hora <12){
        inicio.innerHTML = `Bom Dia`
    } else if(horas <18){

    } else if(horas <24){

    } else{
        
    }
    inicio.innerHTML = `Olá seja bem vindo são ${hora} horas`
}