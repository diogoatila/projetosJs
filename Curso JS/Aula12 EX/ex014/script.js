function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 9s
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'manha.png'
        document.body.style.background = '#ADC6AB'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#BBB3AA'
    } else {
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#162948'
    }


}
