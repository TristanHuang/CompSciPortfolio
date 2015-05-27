

var player = document.getElementById("player");
var player2 = document.getElementById("player2");
document.addEventListener("keydown", controls);

var oTurn = true;
var qTurn = true;


  
/*This is to make sure that you have to press q and w in sequence
 *and that the player won't move if you press them out of order*/

function movePlayer (){
    player.style.left = parseInt(player.style.left) + 30 + "px";
}


function controls (evt){
    
    //
    if (qTurn === true && evt.keyCode === 81) {
        movePlayer();
        qTurn = false
    }
    if (qTurn === false && evt.keyCode === 87){
        movePlayer();
        qTurn = true;
    }
    
    
    //
    if (oTurn === true && evt.keyCode === 79) {
        movePlayer2();
        oTurn = false
    };
    if (oTurn === false && evt.keyCode === 80){
        movePlayer2();
        oTurn = true;
    };
    
}

/*This is pretty much the same code but just for player 2*/



function movePlayer2 (){
    player2.style.left = parseInt(player2.style.left) + 30 + "px";
}
   
/*This is to make sure that you have to press o and p in sequence
 *and that the player won't move if you press them out of order*/

    