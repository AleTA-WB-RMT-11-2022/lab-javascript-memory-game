const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {

  // POSSIBLE SOLUTION STARTS HERE👇
      
      console.log('CLICKED CARD', card)
      // store in variables elements to later show points 
      const clickedPairs = document.querySelector("#pairs-clicked");
      const guessedPairs = document.querySelector("#pairs-guessed");
      // store the clicked card to the pickedCards array
      memoryGame.pickedCards.push(card)
      // as long as there are less 0r 2 cards in the pickedCards array flip the clicked card
      if(memoryGame.pickedCards.length <= 2){
        // adding the class 'turned' to the card element
        // card.classList.toggle('turned') --> same using .toggle() method
        card.classList.add('turned')
      }
      
      // when there are 2 cards picked 
      if (memoryGame.pickedCards.length === 2) {
        // store the first and second card in a variable (div element)
        const card1 = memoryGame.pickedCards[0];
        const card2 = memoryGame.pickedCards[1];
        // get the attibute where the name of the card is stored
        const card1Name = card1.getAttribute("data-card-name");
        const card2Name = card2.getAttribute("data-card-name");

        // call the checkIfPair() passing the 2 cards as arguments
        if (memoryGame.checkIfPair(card1Name, card2Name)) {
          // --> checkIfPair() return true or false
          // TRUE --> checkIfPair() return TRUE
          // add the class block on both card so that can't flip anymore
          card1.classList.add("blocked");
          card2.classList.add("blocked");
          // reset the array to empty for next round
          memoryGame.pickedCards = [];
          // call the checkIfFinished() and store it in a variable --> return true or false
          const haveWon = memoryGame.checkIfFinished();

          // every turn cards match --> checkIfFinished() to see if win
          if (haveWon) {
            // TRUE --> display a message on the board in the browser
            // target the board element and clean all the elements inside
            document.querySelector("#memory-board").innerHTML = "";
            // creaate an elemnt (this case h1)
            const h1 = document.createElement("h1");
            // assign css property color
            h1.style.color = "red";
            // inject text
            h1.innerHTML = "YOU ARE A WINNER BABY!!!";
            // append h1 on the board
            document.querySelector("#memory-board").appendChild(h1);
          }
          // FALSE --> checkIfPair() return FALSE
        } else {
          // set a timeout to turn back the picked cards after 1s
          // removing class turn from both card1 abd card2 elements
          setTimeout(() => {
            // card1.classList.toggle('turned')
            // card2.classList.toggle('turned')
            card1.classList.remove("turned");
            card2.classList.remove("turned");
            // reset the array to empty for next round
            memoryGame.pickedCards = [];
          }, 1000);
        }

      // update pairs clicked and pairs guessed in the browser
      clickedPairs.innerHTML = memoryGame.pairsClicked;
      guessedPairs.innerHTML = memoryGame.pairsGuessed;
      }
      
    });
    
  });
});


