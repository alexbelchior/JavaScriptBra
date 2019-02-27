;(function(){
    const btnAjuda = document.querySelector('#btnAjuda')
    btnAjuda.addEventListener("click", function(){
        const ajudas = [
            {conteudo: "Bem Vindo ao Ceep", cor: "#F05450"},
            {conteudo: "Clique no botao Linhas para alterar o layout", cor: "#92C4EC"}
        ]

        ajudas.forEach(function(ajuda){
            adicionarCartaoNoMural(ajuda)
        })
    })

    btnAjuda.classList.remove('no-js')
})()