let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >=1 && Number(n) <= 100){
      return true
    } else{
    return false
    }
}

function inLista(n,I){
    if(I.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text= `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML= ''
    } else {
        window.alert('valor invalido ou ja encontrado na lista')
    }
    num.value= ''
    num.focus()
}

function finalizar(){
    if( valores.length == 0){
        window.alert('adicione valores antes de finalizar')
    }else{
        let tot= valores.length
        let maior= valores [0]
        let menor= valores [0]

        for(let pos in valores){
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao total, temos ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p>O maior informado foi ${maior} </p>`
        res.innerHTML += `<p>O menor informado foi ${menor} </p>`
    }
}