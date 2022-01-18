import card from "./assets/Camino-36/*.JPG";
export default () = {

//declare card elements
let deckValues = [
  { sideA: 0, sideB: 0, picture: "/assets/Camino-36/Camino0-0.JPG" },
  { sideA: 0, sideB: 1, picture: "/assets/Camino-36/Camino0-1.JPG" },
  { sideA: 0, sideB: 2, picture: "/assets/Camino-36/Camino0-2.JPG" },
  { sideA: 0, sideB: 3, picture: "/assets/Camino-36/Camino0-3.JPG" },
  { sideA: 0, sideB: 4, picture: "/assets/Camino-36/Camino0-4.JPG" },
  { sideA: 0, sideB: 5, picture: "/assets/Camino-36/Camino0-5.JPG" },
  { sideA: 0, sideB: 6, picture: "/assets/Camino-36/Camino0-6.JPG" },
  { sideA: 0, sideB: 7, picture: "/assets/Camino-36/Camino0-7.JPG" },
  { sideA: 1, sideB: 1, picture: "/assets/Camino-36/Camino1-1.JPG" },
  { sideA: 1, sideB: 2, picture: "/assets/Camino-36/Camino1-2.JPG" },
  { sideA: 1, sideB: 3, picture: "/assets/Camino-36/Camino1-3.JPG" },
  { sideA: 1, sideB: 4, picture: "/assets/Camino-36/Camino1-4.JPG" },
  { sideA: 1, sideB: 5, picture: "/assets/Camino-36/Camino1-5.JPG" },
  { sideA: 1, sideB: 6, picture: "/assets/Camino-36/Camino1-6.JPG" },
  { sideA: 1, sideB: 7, picture: "/assets/Camino-36/Camino1-7.JPG" },
  { sideA: 2, sideB: 2, picture: "/assets/Camino-36/Camino2-2.JPG" },
  { sideA: 2, sideB: 3, picture: "/assets/Camino-36/Camino2-3.JPG" },
  { sideA: 2, sideB: 4, picture: "/assets/Camino-36/Camino2-4.JPG" },
  { sideA: 2, sideB: 5, picture: "/assets/Camino-36/Camino2-5.JPG" },
  { sideA: 2, sideB: 6, picture: "/assets/Camino-36/Camino2-6.JPG" },
  { sideA: 2, sideB: 7, picture: "/assets/Camino-36/Camino2-7.JPG" },
  { sideA: 3, sideB: 3, picture: "/assets/Camino-36/Camino3-3.JPG" },
  { sideA: 3, sideB: 4, picture: "/assets/Camino-36/Camino3-4.JPG" },
  { sideA: 3, sideB: 5, picture: "/assets/Camino-36/Camino3-5.JPG" },
  { sideA: 3, sideB: 6, picture: "/assets/Camino-36/Camino3-6.JPG" },
  { sideA: 3, sideB: 7, picture: "/assets/Camino-36/Camino3-7.JPG" },
  { sideA: 4, sideB: 4, picture: "/assets/Camino-36/Camino4-4.JPG" },
  { sideA: 4, sideB: 5, picture: "/assets/Camino-36/Camino4-5.JPG" },
  { sideA: 4, sideB: 6, picture: "/assets/Camino-36/Camino4-6.JPG" },
  { sideA: 4, sideB: 7, picture: "/assets/Camino-36/Camino4-7.JPG" },
  { sideA: 5, sideB: 5, picture: "/assets/Camino-36/Camino5-5.JPG" },
  { sideA: 5, sideB: 6, picture: "/assets/Camino-36/Camino5-6.JPG" },
  { sideA: 5, sideB: 7, picture: "/assets/Camino-36/Camino5-7.JPG" },
  { sideA: 6, sideB: 6, picture: "/assets/Camino-36/Camino6-6.JPG" },
  { sideA: 6, sideB: 7, picture: "/assets/Camino-36/Camino6-7.JPG" },
  { sideA: 7, sideB: 7, picture: "/assets/Camino-36/Camino7-7.JPG" }
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
}


