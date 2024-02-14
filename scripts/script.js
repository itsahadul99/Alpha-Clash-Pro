function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

function continueGame(){
    const alphabet = generateRandomAlphabets();
    const display = document.getElementById('display');
    display.innerText = alphabet;
    setBackgroundColor(alphabet)
}