/*

1- quando clicar no botao de veja o trailer, devemos abrir a modal com o video do trailer.

2- quando clicar no X fechar a modal

1.1- dar um jeito de pegar o elemento q representa o bot'ao na tela usando js

1.2- dar um jeito identificar quando o usuario clicar no botao

1.3- dar um jeito de pegar o elemento da modal no js

1.4- abrir a modal na tela

2.1- dar um jeito de pegar o elemento de fechar modal usando js

2.2- dar um jeito de identificar quado o usuario clica no X

2.3 fechar a modal

*/

const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector('.modal');
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});