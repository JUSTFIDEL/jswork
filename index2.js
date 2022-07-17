let mySelf = ["Fidelis Adang", 35, true]
mySelf.push("JustFidel")
//console.log(mySelf)


cardss = [6,5]
cardss.push(10)
//console.log(cardss)

let mess = [
  "Hey",
  "hi",
  "Hello"
]

let newMess = "Same here"
mess.push(newMess)

//console.log(mess)

//pop - Removes from the End of an Array.
//shift - Removes from the beginning of an Array.
//splice - removes from a specific Array index.
//filter - allows you to programatically remove elements from an Array.

mess.pop()
//console.log(mess)

for ( let i = 10; i <= 100; i += 10 ) {
  //console.log(i)
}

let cardx = [7, 3, 9]

for ( let i = 0; i < cardx.length; i++ )  {
  //console.log(cardx[i])
}

let sentencex = ["Hello", "my", "name", "is", "Fidel and I love NIKE"]
let greetingEl = document.getElementById("greeting-el")

for ( let i = 0; i < sentencex.length; i++ ) {
  greetingEl.textContent += sentencex[i] + " "
}

let player1Time = 109
let player2Time = 107

function getFastestRaceTime() {

  if ( player1Time < player2Time) {
    return player1Time
  } else if (player2Time < player1Time) {
    return player2Time
  } else {
    return player1Time
  }

}

let fastestRace = getFastestRaceTime()

//console.log(fastestRace)



function totalRaceTime() {
  return player1Time + player2Time
}

let raceTime = totalRaceTime()

//console.log(raceTime)


function rollDice() {
  let randomNumber = Math.floor( Math.random() * 6 ) + 1
  return  randomNumber
}
//console.log( rollDice() )

let hasCompletedCourse = true
let givesCertificate = true

if ( hasCompletedCourse === true && givesCertificate === true) {
  generateCertificate()
}


function generateCertificate() {
    //console.log("Generating certificate...")
}

let hasSolvedChallenge = false
let hasHintsLeft = false

if ( hasSolvedChallenge === false && hasHintsLeft === false) {
  showSolution()
}


function showSolution() {
  //console.log("Showing the solution...")
}

let likesDocumentaries = true
let likesStartups = true

if ( likesDocumentaries === true || likesStartups === true) {
  showSolution()
}


function recommendMovie() {
  //console.log("Hey, check out this new film we think you will like it!")
}

let course = {

  title : "Learn CSS Grid for free",
  lessons: 15,
  Creator: "JustFidel",
  length: 63,
  level: 2,
  isFree: true,
  tags: ["html", "css"]

}

//console.log( course.title )

let airbnbListing = {

  name: "Airbnb Castle",
  place: "Abukuru",
  price: 20,
  benefits: ["free towels", "free awalas"],
  area: "120km",
  isSuperCool: true
}

//console.log( airbnbListing.name)
//console.log( airbnbListing.price)

let person = {
  name: "Fidel",
  age: 38,
  country: "Nigeria"
}

function logData() {
 // console.log(person.name + " is " + person.age + " years old and lives in " + person.country)  
}

logData()

let age = 28

if ( age < 6) {
 console.log("You get the free discount")
} else if (age <= 17) {
 console.log("You get the child discount")
} else if ( age <= 26 ) {
 console.log("You get the student discount")
} else if ( age <= 66 ) {
 console.log("You pay the full price")
} else {
 console.log("You get the senior citizen discount")
}

let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

console.log("The 5 largest countries in the world:")
for ( i = 0; i < largeCountries.length; i++ ) {
  console.log( "- " + largeCountries[i] ) 
}

largeCountries.pop()
largeCountries.push("Pakistan")
largeCountries.shift()
largeCountries.unshift("China")
console.log(largeCountries)

let day




