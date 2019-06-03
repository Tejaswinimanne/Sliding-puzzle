function swap(cell1,cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
}
var score=0;
function shuffle() {
  score=0;
  document.getElementById('moves').innerHTML = "Moves : "+ score;
  for(var row=1;row<=3;row++) { 
   for(var column=1;column<=3;column++) {
      var row2=Math.floor(Math.random()*3 + 1); 
      var column2=Math.floor(Math.random()*3 + 1); 
      swap("cell"+row+column,"cell"+row2+column2); 
    } 
  } 
}
function gameCheck(){
  if(document.getElementById("cell11").className=="tile1" &&
   document.getElementById("cell12").className=="tile2" && 
   document.getElementById("cell13").className=="tile3" && 
   document.getElementById("cell21").className=="tile4" && 
   document.getElementById("cell22").className=="tile5" && 
   document.getElementById("cell23").className=="tile6" && 
   document.getElementById("cell31").className=="tile7" && 
   document.getElementById("cell32").className=="tile8" && 
   document.getElementById("cell33").className=="tile9") {
    alert("you won"+"\n"+"start a new game");
    shuffle();
  }
}

function clickTile(row,column) {
  var cell = document.getElementById("cell"+row+column);
  var tile = cell.className;
  if(tile=="tile9"){
    alert("invalid move");
  }
  else if (tile!="tile9") {
       if(column<3) {
         if(document.getElementById("cell"+row+(column+1)).className=="tile9") {
          document.getElementById('moves').innerHTML = "Moves : " + ++score;
          if(score>=15){
            alert("Lots of moves"+"\n"+"Better luck next time.");
          }
          gameCheck();
           swap("cell"+row+column,"cell"+row+(column+1));
           
           return;
         }
       }
       if (column>1) {
         if ( document.getElementById("cell"+row+(column-1)).className=="tile9") {
          document.getElementById('moves').innerHTML = "Moves : "+ ++score;
          if(score>=15){
            alert("Lots of moves"+"\n"+"Better luck next time.");
            shuffle();
          }
          gameCheck();
           swap("cell"+row+column,"cell"+row+(column-1));
           //gameCheck();
           return;
         } 
       }
       if (row>1) {
         if ( document.getElementById("cell"+(row-1)+column).className=="tile9") {
          document.getElementById('moves').innerHTML = "Moves : "+ ++score;
          if(score>=15){
            alert("Lots of moves"+"\n"+"Better luck next time.");
            shuffle();
          }
          gameCheck();
           swap("cell"+row+column,"cell"+(row-1)+column);
           //gameCheck();
           return;
         } 
       }
       if (row<3) {
         if ( document.getElementById("cell"+(row+1)+column).className=="tile9") {
          document.getElementById('moves').innerHTML = "Moves : " + ++score;
          if(score>=15){
            alert("Lots of moves"+"\n"+"Better luck next time.");
            shuffle();
          }
            gameCheck();
           swap("cell"+row+column,"cell"+(row+1)+column);
           
           return;
         } 
       }   
  }
}