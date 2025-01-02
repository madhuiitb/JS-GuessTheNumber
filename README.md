# Guess the Number Game 🎲

A fun, interactive number guessing game built with **JavaScript** and basic **HTML/CSS**. The user guesses a random number between 1 and 20, with feedback provided for each guess.

---

## ✨ Features
- A random number between 1 and 20 is generated when the game starts or is reset.
- **Input field and Check button** for the user to submit their guess.
- Feedback messages: 
  - **"Too High!"** if the guess is higher than the secret number.
  - **"Too Low!"** if the guess is lower than the secret number.
  - **"Correct!"** when the guess is right, and the game ends.
- The background color changes to green when the user wins.
- The width of the winning number display increases on a correct guess.
- A **Score Tracker** that decreases for every wrong guess.
- A **High Score** that stores the highest score from all rounds.

---

## 🎮 How to Play
1. Start the game by clicking the **"Again"** button.
2. Enter a number between 1 and 20 in the input field.
3. Click the **"Check"** button to submit your guess.
4. Based on your guess, the game will:
   - Indicate if your guess is too high or too low.
   - Track your current score and update the high score if applicable.
   - Display the winning number when guessed correctly.
   - Reset the game when the **"Again"** button is clicked.

---

## 🛠️ Setup
1. Clone or download this repository.
2. Open the `index.html` file in a browser.
3. Play the game directly in your browser!

---

## 📄 Code Structure

### 1. **HTML**
The user interface includes:
- An input field for the guess.
- Buttons for "Check" and "Again".
- Display elements for the current score and high score.

### 2. **CSS**
Styling for the game includes:
- Dynamic color changes (e.g., green background on a win).
- Animation for the winning number display width.

### 3. **JavaScript**
The core game logic:
- Generate a random number between 1 and 20.
- Provide feedback for guesses (e.g., too high, too low).
- Update scores dynamically.
- Reset the game without refreshing the page.

---
