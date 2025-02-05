const puzzleElement = document.getElementById('puzzle');
// const shuffleButton = document.getElementById('shufflegame');

let puzzleArray;
const imgSrc = 'https://hips.hearstapps.com/hmg-prod/images/golden-retriever-dog-royalty-free-image-505534037-1565105327.jpg?crop=0.760xw:1.00xh;0.204xw,0&resize=980:*'; // Set your image path here

function createPuzzle() {
    let numbers;
 console.log("ppppp");
 
    do {
        numbers = [...Array(9).keys()]; // Generate array of 0 to 8
        shuffleArray(numbers);
    } while (!isSolvable(numbers)); // Keep shuffling until it's solvable

    puzzleArray = numbers;
    renderPuzzle();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Array destructuring assignment
    }
}

function isSolvable(array) {
    let inversions = 0;
    // Count inversions
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j] && array[i] !== 0 && array[j] !== 0) {
                inversions++;
            }
        }
    }
    // A configuration is solvable if the number of inversions is even
    return inversions % 2 === 0;
}

function renderPuzzle() {
    puzzleElement.innerHTML = '';
    puzzleArray.forEach((num, index) => {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        if (num !== 0) {
            piece.style.backgroundImage = `url(${imgSrc})`;
            piece.style.backgroundPosition = getBackgroundPosition(num);
            piece.innerText = num; // Optional: Display number
        } else {
            piece.classList.add('empty'); // For the empty piece
        }
        piece.addEventListener('click', () => movePiece(index));
        puzzleElement.appendChild(piece);
    });
}

function getBackgroundPosition(num) {
    const size = 100; // Assuming each piece is 100x100
    const row = Math.floor((num - 1) / 3);
    const col = (num - 1) % 3;
    return `-${col * size}px -${row * size}px`;
}

function movePiece(index) {
    const zeroIndex = puzzleArray.indexOf(0);
    const validMoves = [
        zeroIndex - 1, // Left
        zeroIndex + 1, // Right
        zeroIndex - 3, // Up
        zeroIndex + 3, // Down
    ];

    // Check if the move is valid
    if (validMoves.includes(index)) {
        [puzzleArray[index], puzzleArray[zeroIndex]] = [puzzleArray[zeroIndex], puzzleArray[index]];
        renderPuzzle();
    }
}

// shuffleButton.addEventListener('click', createPuzzle);
window.onload = createPuzzle;