// var cardOne = "King";
// var cardTwo = "Queen";
// var cardThree = "Queen";
// var cardFour = "King";
//arrays for nameing and gather the flipped cards
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{   
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/hing-of-hearts.png",
},
{
	rank: "king",
	suit:"hearts",
	cardImage: "images/king-of-diamonds.png",
}
];
var cardsInPlay = [];
var checkForMatch = function() {
	if (cardsInPlay.length < 2) {
		return;

}	else if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
}   else if (cardsInPlay[0] !== cardsInPlay[1]) {
	    console.log("Sorry, try again");
}
}
//decide whether to check for match and what to say about it

var flipCard = function (cardId) {	
console.log ("User flipped the " + cards[cardId].rank + " of " + cards[cardId].suit);	
console.log (cards[cardId].cardImage);	
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
}


// display user choice

flipCard(0);
flipCard(1);





		
	
