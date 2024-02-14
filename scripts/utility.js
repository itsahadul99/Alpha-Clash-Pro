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
    element.style.backgroundColor = 'gold';
    return element;
}