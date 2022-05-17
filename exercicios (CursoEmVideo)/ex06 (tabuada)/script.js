var txtnum = document.getElementById('numero')
var tabuada = document.getElementById('tabuada')

function gerar(){
    if(txtnum.value.length == 0){
        alert('Digite um número')
    } else {
        let numero = Number(txtnum.value)
        tabuada.innerHTML = ''
    
        for(i = 1; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${numero} X ${i} = ${numero*i}`
            item.value = `tab${i}` // inportantes para outras  linguagens 
            tabuada.appendChild(item)
        }

    }
}