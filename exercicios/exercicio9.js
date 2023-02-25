let valores= [1, 5, 7 ,3 ,4 ,9]

for(let pos= 0; pos <= valores.length; pos++){
    console.log(`a posição ${pos} tem o valor de ${valores [pos]}`)
}

for(let pos in valores){
    console.log(`a posção ${pos} tem o valor de ${valores[pos]}`)
}