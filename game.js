function swap(cell1,cell2) {
  var temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
}

function shuffle() {
  var score=0;
  document.getElementById('score').innerHTML = "Score: "+ score;
for(var row=1;row<=3;row++) { 
   for(var column=1;column<=3;column++) {
      var row2=Math.floor(Math.random()*3 + 1); 
      var column2=Math.floor(Math.random()*3 + 1); 
      swap("cell"+row+column,"cell"+row2+column2); 
    } 
  } 
}
function clickTile(row,column) {
  var cell = document.getElementById("cell"+row+column);
  var tile = cell.className;
  if (tile!="tile9") {
       if(column<3) {
         if(document.getElementById("cell"+row+(column+1)).className=="tile9") {
          document.getElementById('score').innerHTML = "Score: " + score++;
           swap("cell"+row+column,"cell"+row+(column+1));
           return;
         }
       }
       if (column>1) {
         if ( document.getElementById("cell"+row+(column-1)).className=="tile9") {
          document.getElementById('score').innerHTML = "Score: " + score++;
           swap("cell"+row+column,"cell"+row+(column-1));
           return;
         }
       }
       if (row>1) {
         if ( document.getElementById("cell"+(row-1)+column).className=="tile9") {
          document.getElementById('score').innerHTML = "Score: " + score++;
           swap("cell"+row+column,"cell"+(row-1)+column);
           return;
         }
       }
       if (row<3) {
         if ( document.getElementById("cell"+(row+1)+column).className=="tile9") {
          document.getElementById('score').innerHTML = "Score: " + score++;
           swap("cell"+row+column,"cell"+(row+1)+column);
           return;
         }
       } 
  }
  
}
if(document.getElementById("cell11").className=="tile1" &&
 document.getElementById("cell12").className=="tile2" && 
 document.getElementById("cell13").className=="tile3" && 
 document.getElementById("cell21").className=="tile4" && 
 document.getElementById("cell22").className=="tile5" && 
 document.getElementById("cell23").className=="tile6" && 
 document.getElementById("cell31").className=="tile7" && 
 document.getElementById("cell32").className=="tile8" && 
 document.getElementById("cell22").className=="tile9") {
  var str = new String("game over");
  document.write(str.fontcolor( "white" ));
  alert(str.fontcolor( "white" ));
 }