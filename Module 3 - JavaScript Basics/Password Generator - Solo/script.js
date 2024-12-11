const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const generateBtn = document.querySelector('.generate-btn');
const passwordOne = document.getElementById("passwordOne");
const passwordTwo = document.getElementById("passwordTwo");
const lengthInput = document.getElementById('length-input');

const numbersCheckbox = document.getElementById("numbers");
const symbolCheckbox = document.getElementById("symbols");

// console.log(numbersCheckbox.checked)

// let checkedNumbers = numbersCheckbox.checked;
// let checkedSymbols = symbolCheckbox.checked;

generateBtn.addEventListener('click', () => {

    passwordLength = lengthInput.value;
    passwordOne.textContent = generatePassword();
    passwordTwo.textContent = generatePassword();
});


// Toggle Numbers & Symbols

function getRandomCharacter() {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    return characters[randomCharacter]
};

function getRandomLetters() {
    let randomCharacter = Math.floor(Math.random() * letters.length)
    return letters[randomCharacter]
};

function getRandomLettersNumbers() {
    let lettersNumbers = letters.concat(numbers)
    let randomCharacter = Math.floor(Math.random() * lettersNumbers.length)
    return lettersNumbers[randomCharacter]
};

function getRandomLettersSymbols() {
    let lettersSymbols = letters.concat(symbols)
    let randomCharacter = Math.floor(Math.random() * lettersSymbols.length)
    return lettersSymbols[randomCharacter]
};


function generatePassword() {
    
    let password = "";

    if (numbersCheckbox.checked && symbolCheckbox.checked) {
        for (let i = 0; i < passwordLength; i++) {
            password += getRandomCharacter()
        } return password
    } else if (numbersCheckbox.checked && !symbolCheckbox.checked) {
        for (let i = 0; i < passwordLength; i++) {
            password += getRandomLettersNumbers()
        } return password
    } else if (!numbersCheckbox.checked && symbolCheckbox.checked) {
        for (let i = 0; i < passwordLength; i++) {
            password += getRandomLettersSymbols()
        } return password
    } else {
        for (let i = 0; i < passwordLength; i++) {
            password += getRandomLetters()
        } return password
    }
};


// Copy-on-click functions 

passwordOne.addEventListener('click', async (e) => {
    const content = passwordOne.textContent;
    await navigator.clipboard.writeText(content);
});

passwordTwo.addEventListener('click', async (e) => {
    const content = passwordTwo.textContent;
    await navigator.clipboard.writeText(content);
});

