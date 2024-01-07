let images = ['1.svg', '2.svg', '3.svg', '4.svg', '5.svg'];
let targetOrder = [...images];
let clickedOrder = [];
let gameStarted = false;
var shuffledOrder = [1,2,3,4,5]

function startGame() 
{
    shuffledOrder = shuffleOrder();
    displayCards(shuffledOrder);
      
}
initialDisplayCards(shuffledOrder)
    function initialDisplayCards(){
        gameSection.innerHTML = "";

        for (let i = 0; i < 5; i++) {
            let divCard = document.createElement("div");
            divCard.classList.add("card");
            divCard.style.backgroundImage = `url('letters/${shuffledOrder[i]}.svg')`; 
            divCard.alt = `Card ${i}`;
            divCard.setAttribute("index",i);
            gameSection.appendChild(divCard);
        }
    }

function shuffleOrder() {
    let cardOrder = [1, 2, 3, 4, 5];
    for (let i = cardOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardOrder[i], cardOrder[j]] = [cardOrder[j], cardOrder[i]];
    }
    return cardOrder; 
}
function displayCards(order) {
        gameSection.innerHTML = "";

        for (let i = 0; i < 5; i++) {
            let divCard = document.createElement("div");
            divCard.classList.add("card");
            divCard.style.backgroundImage = `url('letters/${shuffledOrder[i]}.svg')`; 
            divCard.alt = `Card ${i}`;
            divCard.setAttribute("index",i);
            gameSection.appendChild(divCard);
        }
    setTimeout(() => {
            gameSection.innerHTML = "";

            for (let i = 0; i < 5; i++) {
                let divCard = document.createElement("div");
                divCard.classList.add("card");
                divCard.style.backgroundColor = "orange";
                divCard.alt = `Card ${i}`;
                divCard.addEventListener('click', gameController);
                divCard.setAttribute("index", i);
                gameSection.appendChild(divCard);
            }
        }, 2000);

    }

function renderImages() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    for (let i = 0; i < images.length; i++) {
        const image = document.createElement('img');
        image.className = 'image';
        image.src = `images/${images[i]}`;
        image.addEventListener('click', () => clickImage(i));
        imageContainer.appendChild(image);
      }
    }

    function clickImage(index) {
      if (!gameStarted) {
        return;
      }

      clickedOrder.push(images[index]);
      renderImages();

      if (clickedOrder.length === images.length) {
        checkOrder();
      }
    }

    function checkOrder() {
      const isCorrectOrder = clickedOrder.every((value, i) => value === targetOrder[i]);

      if (isCorrectOrder) {
        alert('Doğru sırayla tıklandı! Oyunu kazandınız.');
      } else {
        alert('Yanlış sıra! Oyunu kaybettiniz.');
      }

      resetGame();
    }

    function resetGame() {
      gameStarted = false;
      clickedOrder = [];
      renderImages();
      disableRestartButton();
    }

    function enableRestartButton() {
      document.getElementById('restart-btn').disabled = false;
    }

    function disableRestartButton() {
      document.getElementById('restart-btn').disabled = true;
    }
