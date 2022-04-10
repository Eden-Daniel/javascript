var numero = document.getElementById('txtNumero')
var lista = document.getElementById('lista')
var resultado = document.getElementById('resultado')
var valores = []

function adicionar(){
    if(eNumero(numero.value) && naoLista(numero.value, valores)){
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} Adicionado.`
        lista.appendChild(item)
        resultado.innerHTML = ''

    } else{
        alert('Valor inválido ou já encontrado na lista!')
    }

    numero.value = ''
    numero.focus()
}

function finalizar(){
    if (valores.length == 0){
        alert('Adicione valores antes de finalizer!')
    } else {
        let total = valores.length
        let soma = 0
        let maior = valores[0]
        let menor = valores[0]        

        for(elemento in valores){
            soma += valores[elemento]
            if(valores[elemento] > maior){
                maior = valores[elemento]
            }   
            if(valores[elemento] < menor){
                menor = valores[elemento]
            }
        }
        let somMed = soma / total
        let media = somMed.toFixed(2)
        
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo temos <strong>${total}</strong> números cadastrados</p>`
        resultado.innerHTML += `<p>A soma de todos os valores é <strong>${soma}</strong></p>`
        resultado.innerHTML += `<p>O maior número adicionado foi <strong>${maior}</strong></p>`
        resultado.innerHTML += `<p>O menor número adicionado foi <strong>${menor}</strong></p>`
        resultado.innerHTML += `<p>A média dos valores é <strong>${media}</strong></p>`
    }
}

// teste de número e se esta na lista
function eNumero(num){
    if (Number(num) >= 1 && Number(num) <= 100){
        return true
    } else {
        return false
    }
}

function naoLista(num, list){
    if (list.indexOf(Number(num)) == -1){
        return true
    } else {
        return false
    }
}