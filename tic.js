(function Game() {
    // Elements
    const game = document.getElementById('game');
    const boxes = document.querySelectorAll('li');
    const resetGame = document.getElementById('reset-game');
    const turnDisplay = document.getElementById('turn-display');
    const gameMessages = document.getElementById('game-messages');
    const playerOneScoreCard = document.getElementById('player-one-score');
    const playerTwoScoreCard = document.getElementById('player-two-score');

    // Vars
    const context = { 'player1': 'x', 'player2': 'o' };
    let board = [];
    let playerOneScore = 0;
    let playerTwoScore = 0;
    let turns = 0;
    let currentContext;

    // Initialize the game
    const init = function () {
        turns = 0;
        currentContext = computeContext();
        board = [
            new Array(3).fill(null),
            new Array(3).fill(null),
            new Array(3).fill(null)
        ];

        boxes.forEach(box => {
            box.addEventListener('click', clickHandler);
        });

        resetGame.addEventListener('click', resetGameHandler);
        updateTurnDisplay();
        gameMessages.classList.add('hidden');
    };

    // Compute whose turn it is
    const computeContext = function () {
        return turns % 2 === 0 ? context.player1 : context.player2;
    };

    // Update the turn display
    const updateTurnDisplay = function () {
        turnDisplay.innerText = `Player ${currentContext.toUpperCase()}'s Turn`;
        turnDisplay.className = currentContext;
    };

    // Handle player clicks
    const clickHandler = function () {
        if (this.className !== '') return; // Prevent clicks after game ends

        this.className = currentContext;
        this.innerText = currentContext.toUpperCase();
        const pos = this.getAttribute('data-pos').split(',');
        board[pos[0]][pos[1]] = currentContext === 'x' ? 1 : 0;

        if (checkStatus()) {
            gameWon();
        }
        // console.log(currentContext)
        turns++;
        currentContext = computeContext();
        updateTurnDisplay();
    };

    // Check game status
    const checkStatus = function () {
        const usedBoxes = board.flat().filter(val => val !== null).length;
        console.log(usedBoxes)

        // Check rows, columns, and diagonals
        for (let row = 0; row < 3; row++) {
            if (board[row].every(cell => cell === 1)) return true; // Player X wins
            if (board[row].every(cell => cell === 0)) return true; // Player O wins

            if (board[0][row] === board[1][row] && board[1][row] === board[2][row] && board[0][row] !== null) {
                return true; // Column win
            }
        }

        // Diagonals check
        if ((board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== null) ||
            (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== null)) {
            return true; // Diagonal win
        }

        if (usedBoxes === 9) {
            gameDraw();
            return false;
        }

        return false;
    };

    // Handle game won
    const gameWon = function () {
        gameMessages.classList.remove('hidden');
        gameMessages.innerText = `Player ${currentContext.toUpperCase()} Wins!`;
        clearEvents();
        updateScore();
    };

    // Handle draw
    const gameDraw = function () {
        gameMessages.classList.remove('hidden');
        gameMessages.innerText = 'Game Draw!';
        clearEvents();
    };

    // Clear event listeners
    const clearEvents = function () {
        boxes.forEach(box => box.removeEventListener('click', clickHandler));
    };

    // Update score
    const updateScore = function () {
        if (currentContext === 'x') {
            playerOneScore++;
            playerOneScoreCard.innerText = `Player X Score: ${playerOneScore}`;
        } else {
            playerTwoScore++;
            playerTwoScoreCard.innerText = `Player O Score: ${playerTwoScore}`;
        }
    };

    // Reset game
    const resetGameHandler = function () {
        init();
        boxes.forEach(box => {
            box.className = '';
            box.innerText = '';
        });
    };

    init();
})();
