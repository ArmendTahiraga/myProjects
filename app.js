let pointsHome = document.getElementById("points-home");
let pointsGuest = document.getElementById("points-guest");
let newGame = document.getElementById("new-game");
newGame.addEventListener("click", startNewGame);
let titleHome = document.querySelector(".title-home");
let titleGuest = document.querySelector(".title-guest");

let numberHome = 0;
let numberGuest = 0;

//Buttons for Home
let addOneHome = document.querySelector(".add1-home");
addOneHome.addEventListener("click", receiveOneHome);
let addTwoHome = document.querySelector(".add2-home");
addTwoHome.addEventListener("click", receiveTwoHome);
let addThreeHome = document.querySelector(".add3-home");
addThreeHome.addEventListener("click", receiveThreeHome);

//Buttons for Guest
let addOneGuest = document.querySelector(".add1-guest");
addOneGuest.addEventListener("click", receiveOneGuest);
let addTwoGuest = document.querySelector(".add2-guest");
addTwoGuest.addEventListener("click", receiveTwoGuest);
let addThreeGuest = document.querySelector(".add3-guest");
addThreeGuest.addEventListener("click", receiveThreeGuest);

//Functions for Home
function receiveOneHome(){
    numberHome++
    pointsHome.textContent = numberHome;
    highlightWinner();

}
function receiveTwoHome(){
    numberHome += 2
    pointsHome.textContent = numberHome;
    highlightWinner();
}
function receiveThreeHome(){
    numberHome += 3
    pointsHome.textContent = numberHome;
    highlightWinner();
}

//Functions for Guest
function receiveOneGuest(){
    numberGuest++
    pointsGuest.textContent = numberGuest;
    highlightWinner();

}
function receiveTwoGuest(){
    numberGuest += 2
    pointsGuest.textContent = numberGuest;
    highlightWinner();
}
function receiveThreeGuest(){
    numberGuest += 3
    pointsGuest.textContent = numberGuest;
    highlightWinner();
}

function startNewGame(){
    numberHome = 0;
    numberGuest = 0;
    pointsHome.textContent = 0;
    pointsGuest.textContent = 0;
    highlightWinner();
}

function highlightWinner(){
    if (numberHome > numberGuest){
        titleHome.style.color = "#F94F6D";
        titleGuest.style.color = '#EEEEEE';
    }else if(numberHome < numberGuest){
        titleHome.style.color = "#EEEEEE";
        titleGuest.style.color = '#F94F6D';
    }else{
        titleHome.style.color = "#EEEEEE";
        titleGuest.style.color = '#EEEEEE';
    }
}