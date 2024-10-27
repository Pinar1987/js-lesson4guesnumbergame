function guessNumberGame() {
    // Generate a random number between 1 and 10
    let randomNumber = Math.floor(Math.random() * 10) + 1;
  
    // Variable to store the user's guess
    let guess;
  
    // Keep prompting the user until the correct number is guessed
    while (guess !== randomNumber) {
      // Ask the user for a guess
      guess = parseInt(prompt("Guess a number between 1 and 10:"));
  
      // Provide feedback if the guess is too high or too low
      if (guess > randomNumber) {
        console.log("Too high! Try again.");
      } else if (guess < randomNumber) {
        console.log("Too low! Try again.");
      } else if (guess === randomNumber) {
        console.log("Congratulations! You guessed the correct number:", randomNumber);
      } else {
        console.log("Invalid input, please enter a number.");
      }
    }
  }
  
  // Call the function to start the game
  guessNumberGame();
  