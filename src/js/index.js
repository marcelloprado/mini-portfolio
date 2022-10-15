/* 
    OBJETIVO - 
        Quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior

        - passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML

        - passo 2 - dar um jeito de identificar o clique no elemento da aba

        - passo 3 - Quando usuário vlicar desmacar a aba selecionada

        - passo 4 - Marcar a aba clicada como selecionada

        - passo 5 - Esconder o conteúdo anterior

        - passo 6 - Mostrar o conteúdo da aba selecionada
*/

// passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML

const abas = document.querySelectorAll(".aba");


abas.forEach(aba => {
    // - passo 2 - dar um jeito de identificar o clique no elemento da aba
    aba.addEventListener("click", function () {

        // GARD CLAUS
        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba);
        mostrarInformacoesDaAba(aba);


    });
});

function selecionarAba(aba) {
    // passo 3 - Quando usuário clicar desmacar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");


    // passo 4 - Marcar a aba clicada como selecionada
    aba.classList.add("selecionado");
};

function mostrarInformacoesDaAba(aba) {
    // passo 5 - Esconder o conteúdo anterior
    const informaoSelecionado = document.querySelector(".informacao.selecionado");
    informaoSelecionado.classList.remove("selecionado");

    // passo 6 - Mostrar o conteúdo da aba selecionada
    const idDoElementoInformacoesDaAba = `informacao-${aba.id}`
    const informacaoASerMostrada = document.getElementById(idDoElementoInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}