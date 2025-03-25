let min = 1;
let max = 100;
let answer = Math.floor(Math.random() * (max - min + 1)) + min;

function numb() {
  let guess = Number(document.getElementById("box").value);

  if (guess < min || guess > max) {
    document.getElementById("content").innerHTML = "INVALID NUMBER, PLEASE ENTER AGAIN";
  } else if (guess > answer) {
    document.getElementById("content").innerHTML = "GIVEN NUMBER IS TOO HIGH..ENTER AGAIN";
  } else if (guess < answer) {
    document.getElementById("content").innerHTML = "GIVEN NUMBER IS TOO LOW..ENTER AGAIN";
  } else {
    document.getElementById("content").innerHTML = "CORRECT! Click Restart to play again.";
  }
}

function restart() {
  answer = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("content").innerHTML = "Game restarted! Enter a new guess.";
  document.getElementById("box").value = ""; 
}
