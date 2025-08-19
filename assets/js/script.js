
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
];

let indexAtual = 0;

const imagem = document.getElementById("carousel-image");
const btnProx = document.getElementById("next");
const btnAnt = document.getElementById("prev");
const carousel = document.getElementById("carousel");
const progressBar = document.getElementById("progress-bar");

imagens.forEach(src => {
    const img = new Image();
    img.src = `assets/img/maps/${src}`;
});

function mostrarImagem(index) {
    imagem.style.opacity = 0;
    setTimeout(() => {
        imagem.src = `assets/img/maps/${imagens[index]}`;
        imagem.onload = () => (imagem.style.opacity = 1);
    }, 200);
    progressBar.style.width = `${((index+1) * 100) / imagens.length}%`;
}

function proximaImagem() {
    indexAtual = (indexAtual + 1) % imagens.length;
    mostrarImagem(indexAtual);
}

function anteriorImagem() {
    indexAtual = (indexAtual - 1 + imagens.length) % imagens.length;
    mostrarImagem(indexAtual);
}

btnProx.addEventListener("click", proximaImagem);
btnAnt.addEventListener("click", anteriorImagem);

mostrarImagem(0);
