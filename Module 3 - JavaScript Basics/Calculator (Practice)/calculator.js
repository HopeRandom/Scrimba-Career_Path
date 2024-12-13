const form = document.getElementById("form");
const numOneInput = document.getElementById("num1");
const numTwoInput = document.getElementById("num2");
const resultText = document.getElementById("result");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const numOneVal = Number(numOneInput.value);
    const numTwoVal = Number(numTwoInput.value);

    resultText.innerText = `${numOneVal} + ${numTwoVal} = ${numOneVal + numTwoVal}`;
})