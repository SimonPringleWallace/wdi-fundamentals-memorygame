// var cardOne = "King";
// var cardTwo = "Queen";
// var cardThree = "Queen";
// var cardFour = "King";
var cards = ["King" , "Queen" , "King" , "Queen"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log ("User flipped " + cardOne);
var cardTwo = cards [2];
cardsInPlay.push(cardTwo);
console.log ("User flipped " + cardTwo);
if (cardsInPlay.length === 2 && (cardsInPlay[0] === cardsInPlay[1])) {
		alert("you found a match!");}
else if (cardsInPlay.length === 2 && (cardsInPlay[0] !== cardsInPlay[2])){   
		alert("try again");}

		
	
