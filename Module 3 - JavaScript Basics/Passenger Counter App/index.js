let count = 0

const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")

const incrementBtn = document.getElementById("increment-btn")
const saveBtn = document.getElementById("save-btn")
const resetBtn = document.getElementById("reset-btn")

saveBtn.addEventListener("click", function save() {
    const countStr = `${count} - `
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
})

incrementBtn.addEventListener("click", function increment() {
    count += 1
    countEl.textContent = count
})

resetBtn.addEventListener("dblclick", function reset() {
    saveEl.textContent = `Previous Entries: `
    countEl.textContent = 0
    count = 0
})