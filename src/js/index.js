/*Esse comentário permite comentar várias linhas
desta maneira hahahah
hahah*/

//já esse somente uma linha

/* Oq ue vamos precisar fazer? - quando clicar no botão de personagem da lista, temos ue marcar o botão como selecionado e mostrar o personagem correspondente

OBJETIVO 1 - Quando clicar o botão do personagem da lista, marcar o botão como selecionado.
    passo 1 - pegar os botoes no JS pra poder verificar quando o usuario clicar em cima de um deles
    passo 2 - adicionar a classe "selecionado" no botão que o usuario clicou
    passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele

OBJETIVO 2 - Quando clicar no botão do pesonagem mostrar as informações do personagem
    passo 1 -pegar os personagens no JS pra poder mostrar ou esconder ele
    passo 2 - adicionar a classe "selecionado" no personagem que o usuario selecionou
    passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a aseleção dele
*/

//OBJETIVO 1 - Quando clicar o botão do personagem da lista, marcar o botão como selecionado.
//passo 1 - pegar os botoes no JS pra poder verificar quando o usuario clicar em cima de um deles


const botoes = document.querySelectorAll('.botao');

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        //  passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele

        desselecionarBotao();

        //   //passo 2 - adicionar a classe "selecionado" no botão que o usuario clicou

        botao.classList.add("selecionado"); 
        
        //objetivo 
        //passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a aseleção dele

        const personagens = document.querySelectorAll('.personagem');
        
        const personagemSelecionado = document.querySelector('.personagem.selecionado');
        personagemSelecionado.classList.remove("selecionado");

        //passo 2 - adicionar a classe "selecionado" no personagem que o usuario selecionou
        
        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
