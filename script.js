// MARCAR CASAS E DESABILITAR QUANDO UMA CASA FOR MARCADA

let turno = 1;

function marcar() {
  let tile = event.target;
  tile.style.fontWeight = "900";
  turno++;

  // se o turno for um número ímpar, o jogador X joga.
  // se for par, o jogador O joga.
  if (turno % 2 == 0) {
    document.getElementById("sJogadorDaVez").innerText = "O";
    tile.innerText = "X";
    tile.classList = "disabled";
  } else {
    document.getElementById("sJogadorDaVez").innerText = "X";
    tile.innerText = "O";
    tile.classList = "disabled";
  }
}

// RESETAR TABULEIRO

function reset() {
  turno = 1;

  let disabledTiles = document.getElementsByClassName("disabled");

  // enquanto o número de tiles desabilitados for maior que zero:
  // 1. tirar o texto dos tiles
  // 2. tirar a classe "disabled" e pôr de volta a classe "tile"
  // 3. tirar texto de "vitória"
  while (disabledTiles.length > 0) {
    document.getElementById("sJogadorDaVez").innerText = "X";
    document.getElementById('resultado').innerHTML = ""
    disabledTiles[0].innerText = "";
    disabledTiles[0].className = "tile";
  }
}

// DETECTAR VITÓRIA

function vitoria() {

  let resultado = document.getElementById('resultado');

  // LISTANDO POSSIBILIDADES DE VITÓRIA

  if (tile1.innerText == 'X' && tile2.innerText == 'X' && tile3.innerText == 'X') {
    resultado.innerHTML = "<h3>Vitória de X</h3>"
    resultado.style.color = "#00A878"
  } else if (tile4.innerText == 'X' && tile5.innerText == 'X' && tile6.innerText == 'X') {
    resultado.innerHTML = "<h3>Vitória de X</h3>"
    resultado.style.color = "#00A878"
  } else if (tile7.innerText == 'X' && tile8.innerText == 'X' && tile9.innerText == 'X') {
    resultado.innerHTML = "<h3>Vitória de X</h3>"
    resultado.style.color = "#00A878"
  } else if (tile1.innerText == 'X' && tile4.innerText == 'X' && tile7.innerText == 'X') {
    resultado.innerHTML = "<h3>Vitória de X</h3>"
    resultado.style.color = "#00A878"
  } else if (tile2.innerText == 'X' && tile5.innerText == 'X' && tile8.innerText == 'X') {
    resultado.innerHTML = "<h3>Vitória de X</h3>"
    resultado.style.color = "#00A878"
  } else if (tile3.innerText == 'X' && tile6.innerText == 'X' && tile9.innerText == 'X') {
    resultado.innerHTML = "<h3>Vitória de X</h3>"
    resultado.style.color = "#00A878"
  } else if (tile1.innerText == 'X' && tile5.innerText == 'X' && tile9.innerText == 'X') {
    resultado.innerHTML = "<h3>Vitória de X</h3>"
    resultado.style.color = "#00A878"
  } else if (tile3.innerText == 'X' && tile5.innerText == 'X' && tile7.innerText == 'X') {
    resultado.innerHTML = "<h3>Vitória de X</h3>"
    resultado.style.color = "#00A878"
  } else if (tile1.innerText == 'O' && tile2.innerText == 'O' && tile3.innerText == 'O') {
    resultado.innerHTML = "<h3>Vitória de O</h3>"
    resultado.style.color = "#00A878"
  } else if (tile4.innerText == 'O' && tile5.innerText == 'O' && tile6.innerText == 'O') {
    resultado.innerHTML = "<h3>Vitória de O</h3>"
    resultado.style.color = "#00A878"
  } else if (tile7.innerText == 'O' && tile8.innerText == 'O' && tile9.innerText == 'O') {
    resultado.innerHTML = "<h3>Vitória de O</h3>"
    resultado.style.color = "#00A878"
  } else if (tile1.innerText == 'O' && tile4.innerText == 'O' && tile7.innerText == 'O') {
    resultado.innerHTML = "<h3>Vitória de O</h3>"
    resultado.style.color = "#00A878"
  } else if (tile2.innerText == 'O' && tile5.innerText == 'O' && tile8.innerText == 'O') {
    resultado.innerHTML = "<h3>Vitória de O</h3>"
    resultado.style.color = "#00A878"
  } else if (tile3.innerText == 'O' && tile6.innerText == 'O' && tile9.innerText == 'O') {
    resultado.innerHTML = "<h3>Vitória de O</h3>"
    resultado.style.color = "#00A878"
  } else if (tile1.innerText == 'O' && tile5.innerText == 'O' && tile9.innerText == 'O') {
    resultado.innerHTML = "<h3>Vitória de O</h3>"
    resultado.style.color = "#00A878"
  } else if (tile3.innerText == 'O' && tile5.innerText == 'O' && tile7.innerText == 'O') {
    resultado.innerHTML = "<h3>Vitória de O</h3>"
    resultado.style.color = "#00A878"
  } else if (turno > 9) {
    resultado.innerHTML = "<h3>Deu velha</h3>"
    resultado.style.color = "#FE5E41"
  }

}

// CHAMANDO TODAS AS FUNÇÕES AO CLICAR EM UMA CASA

function clique(num) {
  marcar();
  vitoria(num);
}

// VARIÁVEIS DOS TILES

let tile1 = document.getElementById('TopoEsquerda');
let tile2 = document.getElementById('TopoMeio');
let tile3 = document.getElementById('TopoDireita');
let tile4 = document.getElementById('MeioEsquerda');
let tile5 = document.getElementById('MeioMeio');
let tile6 = document.getElementById('MeioDireita');
let tile7 = document.getElementById('BaixoEsquerda');
let tile8 = document.getElementById('BaixoMeio');
let tile9 = document.getElementById('BaixoDireita');
