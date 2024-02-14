function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
    return element;
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
    return element;
}

function generateRandomAlphabets (){
    const alphabets = 'abcdefghijklmnopqrstubwxyz';
    alphabets.split('');
    const randomNumber = Math.random() * 25;
    const number = Math.round(randomNumber);
    const alphabet = alphabets[number];
    return alphabet;
}
function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

// keyboard handler

function handleKeyboardPress(e){
    const playerPressed = e.key;
    // get expected to press 
    const displayAlphabet = document.getElementById('display');
    // console.log(displayAlphabet.innerText);
    const expectedAlphabet = displayAlphabet.innerText.toLowerCase();
    // console.log(expectedAlphabet, playerPressed);

    // check matched or not
    if(playerPressed === expectedAlphabet){
        removeBackgroundColor(expectedAlphabet);
        continueGame();
        
    }else{
        console.log('You lost your one life ');
    }
}