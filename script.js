    let images = ['1.svg', '2.svg', '3.svg', '4.svg', '5.svg'];
    let targetOrder = [...images];
    let clickedOrder = [];
    let gameStarted = false;

    function startGame() {
      if (!gameStarted) {
        gameStarted = true;
        clickedOrder = [];
        shuffleImages();
        renderImages();
        enableImageClick();
        enableRestartButton();
      }
    }

    function shuffleImages() {
      for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
      }
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
