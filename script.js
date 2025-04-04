var started = false;
var level = 0;
const tiles = ["green", "red", "yellow", "blue"];
var pattern = [];
var user_pattern = [];

function newSequence(){
    var new_tile = randomNumber();
    pattern.push(tiles[new_tile]);
    setTimeout(function(){
        $("." + tiles[new_tile]).fadeOut().fadeIn();
    }, 200);
    
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

function checkClick(){
    if (pattern.length === 0){
        gameOver();
        return false;
    } else{
        for (i=0; i<user_pattern.length; i++){
            if (user_pattern[i] != pattern[i]){
                gameOver();
                return false;
            }
        }
        if (pattern.length === user_pattern.length){
            levelUp();
        }
    }
    return true;
}

function levelUp(){
    level++;
    user_pattern = [];
    $("h1").text("level " + level);
    newSequence();
}

function gameOver(){
    pattern = []
    $("h1").text("Game Over at Level " + level + ". Press any Key to Restart");
    $("body").css("background-color", "red");
    setTimeout(function(){
        $("body").css("background-color", "#011F3F");
    }, 100);
    started = false;
}

$(document).keypress(function(){
    if (!started){
        started = true;
        gameStart();
    }
});

$("button").click(function(){
    var btn = $(this).addClass("clicked");
    setTimeout(function(){
        btn.removeClass("clicked");
    }, 100);
    user_pattern.push(btn.attr("id"));
    sound(btn.attr("id"));
});

function sound(btn){
    if (!checkClick()){
        var audio = new Audio("./sounds/wrong.mp3");
    } else{
        var audio = new Audio("./sounds/"+ btn +".mp3");
    }
    audio.play();
}