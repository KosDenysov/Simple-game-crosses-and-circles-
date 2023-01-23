let players = ['x', 'o'];
let activePlayer = players[0];

let tableK = [];
let a = 3;
function startGame() {
  for (i=0;i<a;i++) {
      tableK[i] = [];
      for (j=0;j<a;j++) {
        tableK[i][j] = '';
      }
  }
  
  
  activePlayer = "x";
  
  renderBoard(tableK);
}

function click(row,col) {
  tableK[row][col] = activePlayer;
  for (i=0;i<3;i++) {
    if (tableK[0][i] == "x" && tableK[1][i] == "x" && tableK [2][i] == "x" ) {
      showWinner(activePlayer); 
    } else if (tableK[0][i] == "o" && tableK[1][i] == "o" && tableK [2][i] == "o" ) {
      showWinner(activePlayer);
    }  
  }

  for (i=0;i<3;i++) {
    if (tableK[i][0] == "x" && tableK[i][1] == "x" && tableK [i][2] == "x" ) {
      showWinner(activePlayer); 
    } else if (tableK[i][0] == "o" && tableK[i][1] == "o" && tableK [i][2] == "o" ) {
      showWinner(activePlayer);
    }  
  }

  if ((tableK[0][0] == "x" && tableK[1][1] == "x" && tableK [2][2] == "x") || (tableK[0][2] == "x" && tableK[1][1] == "x" && tableK [2][0] == "x")) {
      showWinner(activePlayer);
  } else if ((tableK[0][0] == "o" && tableK[1][1] == "o" && tableK [2][2] == "o") || (tableK[0][2] == "o" && tableK[1][1] == "o" && tableK [2][0] == "o")) {
    showWinner(activePlayer);
  }
  
  if (activePlayer===players[0]) {
    activePlayer = players[1]
  } else {
    activePlayer = players[0]
  }
  
  renderBoard(tableK);
}