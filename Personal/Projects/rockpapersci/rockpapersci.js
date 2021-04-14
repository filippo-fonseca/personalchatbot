function play() {
    let playerOneInput = document.getElementById("player1input").value;
    let playerTwoInput = document.getElementById("player2input").value;
  
    // Rock Options
    if (playerOneInput == "rock" && playerTwoInput == "scissors") {
      return (document.getElementById("answer").innerHTML = "Player One wins.");
    } else if (playerOneInput == "rock" && playerTwoInput == "paper") {
      return (document.getElementById("answer").innerHTML = "Player Two wins.");
    } else if (playerOneInput == "rock" && playerTwoInput == "rock") {
      return (document.getElementById("answer").innerHTML = "Tie.");
    } 
  }
  // EDIT
else if (playerOneInput == "paper" && playerTwoInput == "rock") {
    return "Player One wins.";
  } else if (playerOneInput == "paper" && playerTwoInput == "scissors") {
    return "Player Two wins.";
  } else if (playerOneInput && playerTwoInput == "paper") {
    return "Tie.";
  }
  // Scissors Options
  else if (playerOneInput == "scissors" && playerTwoInput == "rock") {
    return "Player One wins.";
  } else if (playerOneInput == "scissors" && playerTwoInput == "paper") {
    return "Player Two wins.";
  } else if (playerOneInput && playerTwoInput == "scissors") {
    return "Tie.";
  }
}
