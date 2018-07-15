// var cardOne = "King";
// var cardTwo = "Queen";
// var cardThree = "Queen";
// var cardFour = "King";
//arrays for nameing and gather the flipped cards
var cards = ["King" , "Queen" , "King" , "Queen"];
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
console.log ("User flipped " + cards[cardId]);		
cardsInPlay.push(cards[cardId]);
checkForMatch();
}


// display user choice

flipCard(0);
flipCard(2);





		
	
