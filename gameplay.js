//declare card elements

const deckValues = [
  { sideA: 0, sideB: 0, picture: "assets/Camino-36/Camino 0-0 (1).JPG" },
  { sideA: 0, sideB: 1, picture: "assets/Camino-36/Camino 0-1.JPG" },
  { sideA: 0, sideB: 2, picture: "assets/Camino-36/Camino 0-2.JPG" },
  { sideA: 0, sideB: 3, picture: "assets/Camino-36/Camino 0-3.JPG" },
  { sideA: 0, sideB: 4, picture: "assets/Camino-36/Camino 0-4.JPG" },
  { sideA: 0, sideB: 5, picture: "assets/Camino-36/Camino 0-5.JPG" },
  { sideA: 0, sideB: 6, picture: "assets/Camino-36/Camino 0-6 (1).JPG" },
  { sideA: 0, sideB: 7, picture: "assets/Camino-36/Camino 0-7.jpg" },
  { sideA: 1, sideB: 1, picture: "assets/Camino-36/Camino 1-1.JPG" },
  { sideA: 1, sideB: 2, picture: "assets/Camino-36/Camino 1-2.JPG" },
  { sideA: 1, sideB: 3, picture: "assets/Camino-36/Camino 1-3.JPG" },
  { sideA: 1, sideB: 4, picture: "assets/Camino-36/Camino 1-4.JPG" },
  { sideA: 1, sideB: 5, picture: "assets/Camino-36/Camino 1-5.JPG" },
  { sideA: 1, sideB: 6, picture: "assets/Camino-36/Camino 1-6.JPG" },
  { sideA: 1, sideB: 7, picture: "assets/Camino-36/Camino 1-7.jpg" },
  { sideA: 2, sideB: 2, picture: "assets/Camino-36/Camino 2-2.JPG" },
  { sideA: 2, sideB: 3, picture: "assets/Camino-36/Camino 2-3.JPG" },
  { sideA: 2, sideB: 4, picture: "assets/Camino-36/Camino 2-4.JPG" },
  { sideA: 2, sideB: 5, picture: "assets/Camino-36/Camino 2-5.JPG" },
  { sideA: 2, sideB: 6, picture: "assets/Camino-36/Camino 2-6.JPG" },
  { sideA: 2, sideB: 7, picture: "assets/Camino-36/Camino 2-7.jpg" },
  { sideA: 3, sideB: 3, picture: "assets/Camino-36/Camino 3-3.JPG" },
  { sideA: 3, sideB: 4, picture: "assets/Camino-36/Camino 3-4.JPG" },
  { sideA: 3, sideB: 5, picture: "assets/Camino-36/Camino 3-5.JPG" },
  { sideA: 3, sideB: 6, picture: "assets/Camino-36/Camino 3-6.JPG" },
  { sideA: 3, sideB: 7, picture: "assets/Camino-36/Camino 3-7.jpg" },
  { sideA: 4, sideB: 4, picture: "assets/Camino-36/Camino 4-4.JPG" },
  { sideA: 4, sideB: 5, picture: "assets/Camino-36/Camino 4-5.JPG" },
  { sideA: 4, sideB: 6, picture: "assets/Camino-36/Camino 4-6.JPG" },
  { sideA: 4, sideB: 7, picture: "assets/Camino-36/Camino 4-7.jpg" },
  { sideA: 5, sideB: 5, picture: "assets/Camino-36/Camino 5-5.JPG" },
  { sideA: 5, sideB: 6, picture: "assets/Camino-36/Camino 5-6.JPG" },
  { sideA: 5, sideB: 7, picture: "assets/Camino-36/Camino 5-7.jpg" },
  { sideA: 6, sideB: 6, picture: "assets/Camino-36/Camino 6-6.JPG" },
  { sideA: 6, sideB: 7, picture: "assets/Camino-36/Camino 6-7.jpg" },
  { sideA: 7, sideB: 7, picture: "assets/Camino-36/Camino 7-7.jpg" }
];

//shuffle deckValues
function shuffle(deckValues) {
  let currentIndex = deckValues.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [deckValues[currentIndex], deckValues[randomIndex]] = [
      deckValues[randomIndex],
      deckValues[currentIndex]
    ];
  }
  return deckValues;
}

shuffle(deckValues);

//create each player's hand
let playersHand = deckValues.splice(0, 9);

let computersHand = deckValues.splice(0, 9);

//print each player's hand
console.log("Your hand is:");
console.log(playersHand);
console.log("Computer's hand is:");
console.log(computersHand);
// console.log(deckValues);

//filter each hand to find highest double
let doublesP = [];
let doublesC = [];

for (let i = 0; i < playersHand.length; i++) {
  if (playersHand[i].sideA === playersHand[i].sideB) {
    doublesP.push(playersHand[i]);
  }
}

console.log("Doubles in Player's Hand:");
console.log(doublesP);

for (let i = 0; i < computersHand.length; i++) {
  if (computersHand[i].sideA === computersHand[i].sideB) {
    doublesC.push(computersHand[i]);
  }
}

console.log("Doubles in Computer's Hand:");
console.log(doublesC);

//determine highest double in each hand
for (let i = 0; i < doublesP.length + 1; i++) {
  if (doublesP.length !== 0) {
    var maxP = doublesP.reduce(function(prev, current) {
      if (+current.id > +prev.id) {
        return current;
      } else {
        return prev;
      }
    });
  }
}

for (let i = 0; i < doublesC.length; i++) {
  if (doublesC.length + 1 !== 0) {
    var maxC = doublesC.reduce(function(prev, current) {
      if (+current.id > +prev.id) {
        return current;
      } else {
        return prev;
      }
    });
  }
}

console.log("Player's highest double is:");
console.log(maxP);
console.log("Computer's highest double is:");
console.log(maxC);

// whoPlaysFirst(maxP, maxC);
const pDouble = JSON.stringify(maxP);
const cDouble = JSON.stringify(maxC);

function doubleCheck(playerDouble, computerDouble) {
  if (playerDouble == null && computerDouble !== null) {
    return "You have no doubles, computer plays first!";
  }
  if (playerDouble !== null && computerDouble == null) {
    return "Computer has no doubles, you play first!";
  }
  if (playerDouble > computerDouble) {
    return `You play first!`;
  }
  if (playerDouble < computerDouble) {
    return "Computer plays first!";
  }
  if (playerDouble == null && computerDouble == null) {
    return "Neither you nor the computer has any doubles. You plays first!";
  }
}

doubleCheck(pDouble, cDouble);
