// console.log('pasileido')

//  galimos 8 laimejimo kombinacijos

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

function checkforWin(){
  WINNING_COMBINATIONS.forEach(function(combo)){

  })
}

let cells = document.getElementsByClassName('cell')
// console.log(cells)
//  kodėl cia HTML collection konvertavo i Array? 
cells = Array.from(cells) 

let isFirst = 'X'

cells.forEach(function(cell){
  cell.addEventListener('click', function(){

    if(cell.innerText.trim () != "") return
    cell.innerText = isFirst
    isFirst = isFirst =='X' ? "O" : "X"
  });
})

https://www.youtube.com/watch?v=GTLLnF30up4 14 min