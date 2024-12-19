const convertBtn = document.getElementById('convert-btn')
const inputEl = document.getElementById('input')
const lengthEl = document.getElementById('length-el')
const volumeEl = document.getElementById('volume-el')
const massEl = document.getElementById('mass-el')

const metreToFeet = 3.2802
const litreToGallon = 0.264172
const kiloToPound = 2.20462

convertBtn.addEventListener('click', () => {
    
    if (inputEl.value) {
        lengthEl.textContent = `${inputEl.value} metres = ${(inputEl.value*metreToFeet).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value/metreToFeet).toFixed(3)} metres`

        volumeEl.textContent = `${inputEl.value} litres = ${(inputEl.value*litreToGallon).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value/litreToGallon).toFixed(3)} litres`
    
        
        massEl.textContent = `${inputEl.value} kilos = ${(inputEl.value*kiloToPound).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value/kiloToPound).toFixed(3)} kilos`
    }
})