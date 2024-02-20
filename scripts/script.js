function play() {
    isAudioON = true;
    // hide everything only show playground
    hideElementById('home-screen');
    showElementById('play-ground');
    hideElementById('final-score');
    // reset all value 
    setValueElementById('life', 5);
    setValueElementById('current-score', 0);
    continueGame();
}
function gameOver() {
    showElementById('final-score');
    hideElementById('play-ground');
    const lastScore = getElementById('current-score');
    const final = document.getElementById('final');
    final.innerText = lastScore.innerText;

    // remove the last element highlight 
    const lastAlphabet = getElementById('display');
    const lastAlphabets = lastAlphabet.innerText;
    removeBackgroundColor(lastAlphabets)
    isAudioON = false;
    artBoard.style.backgroundImage = 'none'

}
function continueGame() {
    const alphabet = generateRandomAlphabets();
    const display = document.getElementById('display');
    display.innerText = alphabet;
    setBackgroundColor(alphabet);
}

document.addEventListener('keyup', handleKeyboardPress);

// details score update and life line
// function handleKeyboardPress(e){
//     const playerPressed = e.key;
//     // get expected to press 
//     const displayAlphabet = document.getElementById('display');
//     // console.log(displayAlphabet.innerText);
//     const expectedAlphabet = displayAlphabet.innerText.toLowerCase();
//     // console.log(expectedAlphabet, playerPressed);

//     // check matched or not
//     if(playerPressed === expectedAlphabet){
//         // score update
//         // 1. get current score
//         const currentScoreElement = document.getElementById('current-score');
//         const currentScoreText = currentScoreElement.innerText;
//         const currentScore = parseInt(currentScoreText);
//         console.log(currentScore);
//         // 2. increase score by 1;
//         const newScore = currentScore + 1;
//         console.log(newScore);
//         // show the new score
//         currentScoreElement.innerText = newScore;
//         // next round
//         removeBackgroundColor(expectedAlphabet);
//         continueGame();

//     }else{
//         // Life line:
//         // 1. show the current life line
//         const lifeLineElement = document.getElementById('life');
//         const lifeLineNumber = lifeLineElement.innerText;
//         const lifeLine = parseInt(lifeLineNumber);
//         // 2. new life line
//         const newLifeLine = lifeLine -1;
//         // 3. show the new life line
//         lifeLineElement.innerText = newLifeLine;
//         if(newLifeLine === 0){

//         }

//     }
// }
const audio = new Audio();
let isAudioON = false;
const artBoard = document.getElementById('art-board');
// using reusable function
function handleKeyboardPress(e) {
    const playerPressed = e.key;
    if (isAudioON === false) return;
    audio.src = "./audio/success.mp3";
    audio.play();
    // special keypress 
    if (playerPressed === 'Escape') {
        gameOver();
    }
    const currentAlphabet = getElementById('display');
    const expectedAlphabet = currentAlphabet.innerText.toLowerCase();
    if (playerPressed === expectedAlphabet) {
        // Score update 
        const currentScoreElement = getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        const newScore = currentScore + 1;
        // console.log(newScore);
        currentScoreElement.innerText = newScore;
        // setValueElementById('current-score', newScore);
        // matched then remove current background color and continue game
        removeBackgroundColor(expectedAlphabet);
        continueGame();
    }
    else {
        const currentLifeLineElement = getElementById('life');
        audio.src = "./audio/wrong.mp3";
        audio.play()
        const currentLifeLineText = currentLifeLineElement.innerText;
        const currentLifeLine = parseInt(currentLifeLineText);
        const newLifeLine = currentLifeLine - 1;
        // art board background color change
        let colorPercentage = (newLifeLine / 5) * 100;
        console.log(colorPercentage);
        artBoard.style.backgroundImage = `linear-gradient(#FFFFFFB3 ${colorPercentage}%,red)`
        // console.log(currentLifeLine);
        currentLifeLineElement.innerText = newLifeLine;
        // setValueElementById('life', newLifeLine);
        if (newLifeLine === 0) {
            gameOver();
        }
    }
}