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

function getElementById (elementId){
    const element = document.getElementById(elementId);
    return element;
}
function getTextElementById (elementId){
    const idElement = document.getElementById(elementId);
    const elementText = idElement.innerText;
    const element = parseInt(elementText);
    return element;
}

function setValueElementById(elementid, value){
    const element = document.getElementById(elementid);
    element.innerText = value;
}
