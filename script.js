var started = false;
var level = 0;
const tiles = ["green", "red", "yellow", "blue"];
var pattern = [];
var user_pattern = [];

function newSequence(){
    var new_tile = randomNumber();
    pattern.push(tiles[new_tile]);
    $("." + tiles[new_tile]).fadeOut().fadeIn();
}

function gameStart(){
    level = 0;
    pattern = [];
    user_pattern = [];
    $("h1").text("level " + level);
    newSequence();
}

function randomNumber(){
    return Math.floor(Math.random()*4);
}

// for (i=0; i<4; i++){
//     document.querySelector("button")[i].addEventListener("click",function(){
//         this.classList.add("clicked");
//     });
// }

$(document).keypress(function(){
    if (!started){
        started = true;
        gameStart();
    }
});

