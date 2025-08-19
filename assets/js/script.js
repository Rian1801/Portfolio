
const imagens = [
    "mapa0.jpeg",
    "mapa1.png",
    "mapa2.png",
    "mapa3.png",
    "mapa4.png",
    "mapa5.jpeg",
    "mapa6.jpeg",
    "mapa7.png",
    "mapa8.jpg",
    "mapa9.jpg"
]; // Substitua pelos nomes dos seus arquivos

let indexAtual = 0;

const imagem = document.getElementById("carousel-image");
const btnProx = document.getElementById("next");
const btnAnt = document.getElementById("prev");


function mostrarImagem(index) {
    imagem.style.opacity = 0;
    setTimeout(() => {
        imagem.src = `assets/img/maps/${imagens[index]}`;
        imagem.style.opacity = 1;
    }, 200);
}

btnProx.addEventListener("click", () => {
    indexAtual = (indexAtual + 1) % imagens.length;
    mostrarImagem(indexAtual);
});

btnAnt.addEventListener("click", () => {
    indexAtual = (indexAtual - 1 + imagens.length) % imagens.length;
    mostrarImagem(indexAtual);
});
