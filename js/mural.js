;(function(){
    "use strict"
    let numeroDoCartao = 0
    window.adicionarCartaoNoMural = function(cartaoObj){
        numeroDoCartao++
        const conteudoDoCartao = cartaoObj.conteudo
        const cartao = $(`
            <article id="cartao_${numeroDoCartao}" tabindex="0" class="cartao" style="background-color:${cartaoObj.cor}">
                <div class="opcoesDoCartao">
                    <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                        <svg><use xlink:href="iconeRemover"></use></svg>
                    </button>
                        
                    <input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corPadrao-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo" checked>
                    <label for="corPadrao-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">Padrao</label>
                        
                    <input type="radio" name="corDoCartao${numeroDoCartao}" value="#F05450" id="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
                    <label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">Importante</label>

                    <input type="radio" name="corDoCartao${numeroDoCartao}" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
                    <label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">Tarefa</label>

                    <input type="radio" name="corDoCartao${numeroDoCartao}" value="#76EF40" id="corInspiraçao-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
                    <label for="corInspiraçao-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">Inspiraçao</label>

                </div>
                <p class="cartao-conteudo" contenteditable tabindex="0">${conteudoDoCartao}</p>
            </article>
        `)

        $(".mural").append(cartao)

        cartao.on("focusin",function(){
            cartao.addClass("cartao--focado")
        })
            
        cartao.on("focusout", function(){
            cartao.removeClass("cartao--focado")
        })
            
        cartao.on("change", ".opcoesDoCartao-radioTipo", function mudaCor(event){
            cartao.css("background-color", event.target.value)
        })
            
        cartao.on("keydown", function deixaClicarComEnter(event){
            if(event.target.classList.contains("opcoesdoCartao-opcao")&&(event.key === "Enter" || event.key === "")){
                event.target.click()
            }
        })
            
        cartao.on("click", function(event){
            const elementoSelecionado = event.target
            if(elementoSelecionado.classList.contains("opcoesDoCartao-remove")){
                cartao.addClass("cartao--some")
                cartao.on("transitionend", function(){
                    cartao.remove()
                })
            }
        })

        
    }
})()
