const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


const generateBtn = document.querySelector('.generate-btn');
const passwordOne = document.getElementById("passwordOne");
const passwordTwo = document.getElementById("passwordTwo");
let lengthInput = document.getElementById('length-input');
// let passwordLength = 15;


generateBtn.addEventListener('click', function() {
    passwordLength = lengthInput.value;
    passwordOne.textContent = createPassword();
    passwordTwo.textContent = createPassword();
});

function getRandomCharacter() {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    return characters[randomCharacter]
};

function createPassword() {
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        password += getRandomCharacter()
    }
    return password
};

