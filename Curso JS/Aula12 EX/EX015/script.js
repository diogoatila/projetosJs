function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique o ano, valor incorreto!')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //menino
                img.setAttribute('src', 'menino.png')
            }else if (idade < 21){
                //garoto
                img.setAttribute('src', 'garoto.png')
            }else if (idade < 50){
                //homem
                img.setAttribute('src', 'homem.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //menina
                img.setAttribute('src', 'menina.png')
            }else if (idade < 21){
                //garota
                img.setAttribute('src', 'garota.png')
            }else if (idade < 50){
                //mulher
                img.setAttribute('src', 'mulher.png')
            }else{
                //idosa
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos, ${genero} com ${idade} anos!`
        res.appendChild(img)
    }
}
 