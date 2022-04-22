//Função para criar a paleta de cores:
let paleta = document.getElementById('color-palette');
let coresDaPaleta = ['black', 'blue', 'red', 'yellow'];

function criaPaleta() {
    for (let i = 0; i < coresDaPaleta.length; i += 1) {
        let pallet = document.createElement('div');
        paleta.appendChild(pallet);
        pallet.className = "color";
        pallet.id = coresDaPaleta[i];
        pallet.style.backgroundColor = coresDaPaleta[i];
    }
}
criaPaleta();

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

//Paleta preta receber classe "selected":
function selecionaPaletaPreta() {
    let preto = document.getElementById("black");
    preto.classList.add("selected");
}
selecionaPaletaPreta();