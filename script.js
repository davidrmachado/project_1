//  Função para criar a paleta de cores:
let paleta = document.getElementById('color-palette');
let coresDaPaleta = ['black', 'blue', 'red', 'yellow'];
let quadroDePixels = document.getElementById("pixel-board");
let paletas = document.getElementById("color-palette");

function criarPaleta() {
    for (let i = 0; i < coresDaPaleta.length; i += 1) {
        let pallet = document.createElement('div');
        paleta.appendChild(pallet);
        pallet.className = "color";
        pallet.id = coresDaPaleta[i];
        pallet.style.backgroundColor = coresDaPaleta[i];
    }
}
criarPaleta();

//  Função para criar o quadro de lado x lado:
let lado = 5;
let quadro = document.getElementById('pixel-board');
function criaQuadro(valor) {
    for (let i = 0; i < valor; i += 1) {
        let quadrado = document.createElement('div');
        quadro.appendChild(quadrado);
        quadrado.className = "pixel";
    }
}
criaQuadro(lado * lado);

//  Função para a paleta preta receber classe "selected":
function selecionaPaletaPreta() {
    let preto = document.getElementById("black");
    preto.classList.add("selected");
}
selecionaPaletaPreta();

//  Função para selecionar qualquer paleta:
function selectColor(eventoDeOrigem) {
    //  For para retirar a classe "selected" de todos as paletas:
    for (let i = 0; i < 4; i += 1) {
        let eachColor = document.getElementsByClassName("color")[i];
        eachColor.className = "color";
    }
    //  Adiciona a classe "selected" à paleta clicada:
    let corSelecionada = eventoDeOrigem.target;
    corSelecionada.classList.add("selected");
}

//  Escutador de evento para das paletas:
paletas.addEventListener("click", selectColor);

//  Função para colorir cada pixel:
function colorIntoPixel(e) {
let selectedColor = document.getElementsByClassName("selected")[0];
let newPixelColor = selectedColor.style.backgroundColor;
e.target.style.backgroundColor = newPixelColor;
}

// Escutador de evento do quadro de pixel:
quadroDePixels.addEventListener("click", colorIntoPixel);