function clicar(cardClicado){
    cardClicado.classList.add('clicado');
    console.log(cardClicado);
} 

let qtdCards = 0;

qtdCards = prompt("Deseja jogar com quantas cartas?");

console.log(qtdCards);

while (qtdCards % 2 !== 0 ||  qtdCards < 4 || qtdCards > 14) {
    qtdCards = prompt("Para inicializar o jogo, favor colocar quantidade de cartas par entre 4 e 14:")

  }

const arrayCards = [
    "./imagens/bobrossparrot.gif",
    "./imagens/bobrossparrot.gif",
    "./imagens/explodyparrot.gif",
    "./imagens/explodyparrot.gif",
    "./imagens/fiestaparrot.gif",
    "./imagens/fiestaparrot.gif",
    "./imagens/metalparrot.gif",
    "./imagens/metalparrot.gif",
    "./imagens/revertitparrot.gif",
    "./imagens/revertitparrot.gif",
    "./imagens/tripletsparrot.gif",
    "./imagens/tripletsparrot.gif",
    "./imagens/unicornparrot.gif",
    "./imagens/unicornparrot.gif"];

    function comparador() { 
      return Math.random() - 0.5; 

    }

    function criarCard() {

        const cards = document.querySelector('.cards');
        cards.innerHTML = '';
        arrayCards.length = qtdCards;
        arrayCards.sort(comparador);

        
        for (let indice=0; indice < arrayCards.length; indice++){
            let template = `
              <div class="card" onclick="clicar(this)">
                  <div class="front-face face"  >
                    <img src="imagens/back.png" class="frente">
                  </div> <!--front-face-->
                  <div class="back-face face">
                    <img src="${arrayCards[indice]}" class="tras">
                  </div> <!--back-face-->
              </div> <!--card-->
            `;

            cards.innerHTML = cards.innerHTML + template;
        }

        
        }

        criarCard();
    