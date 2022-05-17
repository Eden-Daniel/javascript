var txtInicio = document.getElementById('inicio')
var txtFin = document.getElementById('fin')
var txtPasso = document.getElementById('passo')
var resultado = document.getElementById('resultado')

function contar(){  

    if( txtInicio.value.length == 0 || txtFin.value.length == 0 || txtPasso.value.length == 0){
        alert('[ERRO] faltam dados')

    } else if(txtPasso.value.length == 0){
        alert('passo 0 considerado 1')
        txtPasso = '1'

    } else{
        resultado.innerHTML = 'Contado: '
        let inicio = Number(txtInicio.value)
        let fin = Number(txtFin.value)
        let passo = Number(txtPasso.value)
        
        // sé o passo for 0 atribui o valor 1
        if(passo <= 0){
            alert('ERRO: Passo invalido sera atribuido o valor 1')
            passo = 1
        }

        // contagem cresente
        if(inicio < fin){
            // contagem cresente
            for(let i = inicio; i <= fin; i += passo){            
                resultado.innerHTML += `&#x27A1 ${i} `
            }
            // contagem regresiva    
        } else {
            for(let i = inicio; i >= fin; i -= passo){            
                resultado.innerHTML += `&#x27A1 ${i} `
        }

        }       

        resultado.innerHTML += '&#x1F6A9'
    }
}