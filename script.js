//Função para criar a paleta de cores:

let paleta = document.getElementById('color-palette');
let coresDaPaleta = ['black', 'blue', 'red', 'yellow'];

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

//Função para criar o quadro 5x5:

let quadro = document.getElementById('pixel-board');

function criaQuadro(valor) {
    for (let i = 0; i < valor; i += 1) {
        let quadrado = document.createElement('div');
        quadro.appendChild(quadrado);
        quadrado.className = "pixel";
    }
}
criaQuadro(25);

//Função para a paleta preta receber classe "selected":

function selecionaPaletaPreta() {
    let preto = document.getElementById("black");
    preto.classList.add("selected");
}
selecionaPaletaPreta();

//Função para selecionar qualquer paleta:
function selectColor(eventoDeOrigem) {
    //For para retirar a classe "selected" de todos as paletas:
    for (let i = 0; i < 4; i += 1) {
        let eachColor = document.getElementsByClassName("color")[i];
        eachColor.className = "color";
    }

    //Adiciona a classe "selected" ao elemento clicado:
    let corSelecionada = eventoDeOrigem.target;
    corSelecionada.classList.add("selected");
}

//Escutadores de evento para as quatro paletas:
let colorOption0 = document.getElementsByClassName("color")[0];
let colorOption1 = document.getElementsByClassName("color")[1];
let colorOption2 = document.getElementsByClassName("color")[2];
let colorOption3 = document.getElementsByClassName("color")[3];
colorOption0.addEventListener("click", selectColor);
colorOption1.addEventListener("click", selectColor);
colorOption2.addEventListener("click", selectColor);
colorOption3.addEventListener("click", selectColor);
