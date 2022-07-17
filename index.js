let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("entries")


function increment() {
  count += 1
  countEl.textContent = count
}



function save() {

  let countStr = " - " + count
  saveEl.textContent += countStr

  countEl.textContent = count
  count = 0
}

let errorMes = document.getElementById("error")

function purchase() {

  errorMes.innerText = "Something went wrong, please try again."
}


let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

sumEl = document.getElementById("sum-el")

function add() {
  let answer = num1 + num2 
  sumEl.textContent = "Sum: " + answer 
}

function subtract() {
  let answer = num1 - num2 
  sumEl.textContent = "Sum: " + answer 
}

function multiply() {
  let answer = num1 * num2 
  sumEl.textContent = "Sum: " + answer 
}

function divide() {
  let answer = num1 / num2 
  sumEl.textContent = "Sum: " + answer 
}

let age = 100

if (age < 100) {
  console.log("You are not eligible")
}  else if (age === 100) {
  console.log("Here is your Biethday xard from the King")
} else {
  console.log("You have gotten your card already")
}


  







