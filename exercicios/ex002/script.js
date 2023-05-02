function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //bom dia!
        img.src = "image/manhã.png"
        document.body.style.background = "#FFF089"
    } else if (hora >= 12 && hora < 18){
        //boa tarde!
        img.src = "image/tarde.png"
        document.body.style.background = "#AB5B26"
    } else {
        //boa noite!
        img.src = "image/noite2.png"
        document.body.style.background =  "#1C2E32"
    }
}

