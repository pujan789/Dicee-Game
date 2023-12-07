var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imageElement1 = document.querySelector(".img1");
var nameOfImage1 = "images/dice"+randomNumber1+".png";
imageElement1.setAttribute("src",nameOfImage1);

var imageElement2 = document.querySelector(".img2");
var nameOfImage2 = "images/dice"+randomNumber2+".png";
imageElement2.setAttribute("src",nameOfImage2);

var mainH1Heading = document.querySelector("h1")

if (randomNumber1 > randomNumber2){
    mainH1Heading.textContent = "🚩Player 1 wins"
    mainH1Heading.classList.add("player1")
    
}
else if (randomNumber1 < randomNumber2){
    mainH1Heading.textContent = "Player 2 wins🚩"
    mainH1Heading.classList.add("player2")
}
else {
    mainH1Heading.textContent = "Draw!"
}