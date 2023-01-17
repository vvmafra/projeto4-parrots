let primeiroCard, segundoCard;
let bloquearCard = false;

function clicar(cardClicado){
    if(bloquearCard ===true) return false;
    cardClicado.classList.add("clicado");
    
    
    if (!primeiroCard) {
      primeiroCard = cardClicado;
      return false;
    }

    segundoCard = cardClicado;

    check();
    
    
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
              <div class="card" onclick="clicar(this)" data-card="${arrayCards[indice]}">
                <div class="back-face face">
                 <img src="${arrayCards[indice]}" class="tras">
                </div> <!--back-face-->  
                <div class="front-face face"  >
                  <img src="imagens/back.png" class="frente">
                </div> <!--front-face-->
              </div> <!--card-->
            `;

            cards.innerHTML = cards.innerHTML + template;
        }
        }

        criarCard();

        function check() {
          let checkCard = primeiroCard.dataset.card === segundoCard.dataset.card;
          console.log(checkCard);

          !checkCard ? desvirar(): resetarCards(checkCard);
        }

        function desvirar() {
          bloquearCard = true;
          setTimeout (() => { 
          primeiroCard.classList.remove('clicado');
          segundoCard.classList.remove('clicado');

          resetarCards();
        }, 1000)
        }

        function resetarCards(checkCard = false) {
          primeiroCard = null;
          segundoCard = null;
          bloquearCard = false;
        }