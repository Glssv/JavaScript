function carregar(){
    let msg= window.document.getElementById('msg')
    let img= window.document.getElementById('imagem')
    let data= new Date()
    let hora= data.getHours()

    msg.innerHTML= `Agora são ${hora} horas`
    if(hora >= 6 && hora < 12){
        img.src="dia.png"
        document.body.style.backgroundColor= "#99bcd4"
        img.style.width="250px"
        img.style.height= "250px"
    }else if(hora >= 12 &&  hora <= 18){
        img.src="tarde.png"
        document.body.style.backgroundColor= "#c1ba9e"
        img.style.width=" 250px"
        img.style.height= "250px"
    }else if (hora >=18 && hora <=23){
        img.src="noite.png"
        document.body.style.backgroundColor= "#221d1a"
        img.style.width=" 250px"
        img.style.height= "250px"
    } else{
        img.src="madrugada.png"
        document.body.style.backgroundColor= "#433e33"
        img.style.width=" 250px"
        img.style.height= "250px"
    }
}