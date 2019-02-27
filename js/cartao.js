;(function(){
    $cartoes = $(".cartao")

    for(let j=0; j < $cartoes.length; j++){
        const cartao = cartoes[j]

        cartao.on('click',function(event){
            const elementoSelecionado = event.target
            if(elementoSelecionado.hasClass('opcoesDoCartao-remove')){
                cartao.addClass("cartao--some")
                cartao.on("transitionend", function(){
                    cartao.remove()
                })
            }
        })

        cartao.on("focusin",function(){
            cartao.addClass("cartao--focado")
        })

        cartao.on("focusout",function(){
            cartao.removeClass("cartao--focado")
        })

        cartao.on("change",function mudaCor(event){
            const elementoSelecionado = event.target
            const isRadioTipo = elementoSelecionado.hasClass('opcoesDoCartao-radioTipo')
            if(isRadioTipo){
                cartao.style.backgroundColor = elementoSelecionado.value
            }
        })

        cartao.on("keydown", function deixaClicarComEnter(event){
            if(event.target.hasClass("opcoesDoCartao-opcao") && (event.key === 'Enter' || event.key === '')){
                event.target.click()
            }
        })
    }
})()