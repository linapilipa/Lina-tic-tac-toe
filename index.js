// console.log('pasileido')

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


let cells = document.getElementsByClassName('cell')
let isFirst = true
let playAgain = document.getElementById('play-again')
console.log(playAgain)

for (let key = 0; key < cells.length; key++) {
  // console.log(cells[key]);
  cells[key].addEventListener("click", function() {
    
  // dabar isEmpty yra true
  let isEmpty = !Boolean(cells[key].innerHTML.length) 
  // console.log(isEmpty)

  if (isEmpty) {
    //  Šauktukas (!) apverčia reikšmę į priešingą isFirst = true  !isFirst = false 
    isFirst = !isFirst
     // ternary operators -> supaprastinta if... else ... versija
    let player = isFirst ? 'O' : 'X'
    cells[key].innerHTML = player;
    checkWin()
    
  } 

})  
}

function checkWin() {
  WINNING_COMBINATIONS.forEach(win => {
    let cell1 = cells[win[0]].innerHTML
    let cell2 = cells[win[1]].innerHTML
    let cell3 = cells[win[2]].innerHTML

    if (cell1 == "X" && cell2 == "X" && cell3 == "X"){
      alert("Winner is X")
    }
    if (cell1 == "O" && cell2 == "O" && cell3 == "O"){
      alert("Winner is O")
    }
    // if (cells.length === 9)
    // alert("It`'s a draw!")
  });
}

playAgain.addEventListener("click", function() {
  window.location.reload();
})
