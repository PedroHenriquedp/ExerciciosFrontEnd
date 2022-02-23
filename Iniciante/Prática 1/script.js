    var data = new Date()
    var hora = data.getHours()
    
    function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('manha')

    msg.innerHTML=`Agora são ${hora} horas.`
    console.log(`Agora são exatamente ${hora} horas.`)
    if (hora >= 6 && hora < 12) {
    img.src = './Imagem/manhã.jpg'
    document.body.style.background = '#EF454A'
}   else if (hora >=12 && hora <= 18) {
  img.src = './Imagem/tarde.jpg'
  document.body.style.background = '#FCBEA4'
}   else if (hora >= 18 && hora <= 23) {
  img.src = './Imagem/noite.jpg'
  document.body.style.background = '#A9A6A9'
}   else {
  img.src = 'https://media.istockphoto.com/photos/flags-at-porto-street-portugal-picture-id502351451?s=612x612'
}
}
