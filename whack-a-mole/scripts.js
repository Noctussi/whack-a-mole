const squares = document.querySelectorAll('.square');


let molePosition
currentScore = 0;
timeLimit = 30;
let timeLeft = setInterval(
    function() {
        
        document.querySelector('#timeLeft').innerHTML = timeLimit;
        if (timeLimit>0) {
            timeLimit--
        } else {
            clearInterval(timeLeft)
            clearInterval(moleColor)
        }
    } 
    , 1000)
   
let moleColor = setInterval(
    function() {
        
        squares.forEach(square => square.style.backgroundColor = '')
        const randomSquare = Math.floor(Math.random() * squares.length)
        squares[randomSquare].style.backgroundColor = '#B6844A';
        molePosition = squares[randomSquare].id
        console.log(molePosition)
        
  }
, 600)


squares.forEach(square => square.addEventListener('click', function() {
    if (square.id === molePosition && timeLimit>0) {
        document.querySelector('#score').innerHTML = currentScore;
        currentScore ++
    }
}))
