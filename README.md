<div align="center">

# ✊ Rock · Paper · Scissors ✌️

### A bright, playful browser game for a quick match against the computer.

Choose your move, see what the computer picked, and keep an eye on the score. No installs or accounts needed—just open the page and play.

![HTML5](https://img.shields.io/badge/HTML5-markup-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-responsive-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=222222)

</div>

---

## 🎮 About the game

This is a simple, interactive take on the classic **Rock, Paper, Scissors** game. Play rounds against a computer opponent that randomly chooses rock, paper, or scissors. The page updates the result and running scores after each move.

The interface uses a warm color palette and custom move illustrations, and is styled to fit both desktop and mobile screens.

## ✨ Features

- **Three playable moves:** rock, paper, and scissors.
- **Random computer opponent:** the computer picks a move for every round.
- **Live results and scores:** see who won each round and track wins for both sides.
- **Tie handling:** tied rounds display a message and do not change either score.
- **One-click reset:** start the score over whenever you like.
- **Responsive layout:** adapts the choices, scoreboard, and controls for smaller screens.
- **Lightweight setup:** built with plain HTML, CSS, and JavaScript—no dependencies or build step.

## 📜 Rules

Each round follows the classic rules:

| Your move | Beats |
| --- | --- |
| 🪨 Rock | ✂️ Scissors |
| 📄 Paper | 🪨 Rock |
| ✂️ Scissors | 📄 Paper |

Matching moves result in a tie. Otherwise, the winning side earns one point.

## 🚀 Play the game

### Option 1: Open it directly

Download or clone this repository, then open `index.html` in a modern web browser.

### Option 2: Run a local web server

If you have Python installed, run this command from the project folder:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000) in your browser.

## 🕹️ How to play

1. Select the **rock**, **paper**, or **scissors** image.
2. The computer chooses its move automatically.
3. Read the round result and check the updated score.
4. Select **Reset Game** to return both scores to zero.

## 🧰 Built with

- **HTML** for the game structure.
- **CSS** for the visual design and mobile-responsive layout.
- **Vanilla JavaScript** for move selection, round outcomes, scorekeeping, and reset behavior.
- **Google Fonts** for the Lilita One and Outfit typefaces, with fallback fonts in the stylesheet.

## 📁 Project structure

```text
Rock-Paper-Scissors/
├── index.html          # Game page
├── style.css           # Styling and responsive layout
├── app.js              # Game logic
└── Images/
    ├── rock.png
    ├── paper.png
    └── scissors.png
```

## 🌐 Browser support

Use a recent version of Chrome, Firefox, Safari, or Edge. The game runs locally; an internet connection is only needed to load the optional Google Fonts.

---

<div align="center">

**Pick your move. Beat the computer. Play again.**

</div>
