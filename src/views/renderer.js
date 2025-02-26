console.log("processo de renderização")

// envio de uma mensagem para janela cliente
function cliente(){
   // console.log("teste do botão cliente")
   // uso da api (autorizada no preload js)
   api.clientWindow()
}

// envio de uma mensagem para janela os
function os(){
   // console.log("teste do botão os")
   api.osWindow()
}