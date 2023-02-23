function contar() {
    let ini= document.getElementById('txti')
    let fim= document.getElementById('txtf')
    let passo= document.getElementById('txtp')
    let res= document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] faltam dados!')
    } else{
        res.innerHTML= 'contando: '
        let i= Number(ini.value) // converte o ini pra numero
        let f= Number(fim.value)
        let p= Number(passo.value)

        if(i <f){
            for(let c= i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}` 
                } 
                res.innerHTML += `\u{26A0}`
        } else {
            for(let c= i; c >= f; c-= p){
                res.innerHTML += ` ${c} \u{1F449}` 
            } 
            res.innerHTML += `\u{26A0}`
        }

    }
}