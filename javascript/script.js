let primeiroCard, segundoCard;
let bloquearCard = false;
let cardsAbertas = 0;
let jogadas = 0;
let lol = 0;


function clicar(cardClicado){
    if(bloquearCard === true) return false;
    cardClicado.classList.add("clicado");
    
    
    if (!primeiroCard) {
      primeiroCard = cardClicado;
      return false;
    }

    segundoCard = cardClicado;

    check();

    if(cardsAbertas === qtdCards) {
      setTimeout (() => {alert('Você ganhou em ' + jogadas + ' jogadas!');
    }, 300)
    }
    
} 

let qtdCards = 0;

qtdCards = prompt("Deseja jogar com quantas cartas?");

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
        qtdCards = Number(qtdCards);
        arrayCards.sort(comparador);

        
        for (let indice=0; indice < arrayCards.length; indice++){
            let template = `
              <div class="card" onclick="clicar(this)" data-test="card" data-card="${arrayCards[indice]}">
                <div class="back-face face">
                 <img src="${arrayCards[indice]}" class="tras" data-test="face-up-image">
                </div> <!--back-face-->  
                <div class="front-face face"  >
                  <img src="imagens/back.png" class="frente" data-test="face-down-image">
                </div> <!--front-face-->
              </div> <!--card-->
            `;

            cards.innerHTML = cards.innerHTML + template;
        }
        }

        criarCard();

        function check() {
          jogadas = jogadas + 2;
          console.log(jogadas);
          let checkCard = primeiroCard.dataset.card === segundoCard.dataset.card;
          
          if (checkCard === true) {
            cardsAbertas = cardsAbertas + 2;
          }
          console.log(cardsAbertas);
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