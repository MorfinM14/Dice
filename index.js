var randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

var dicee = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", dicee);





var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2);

var dicee2 = ("images/dice" + randomNumber2 + ".png");
document.querySelector(".img2").setAttribute("src", dicee2);




// if player 1 wins
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}

// if player 2 wins
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}

// if there is a tie
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
