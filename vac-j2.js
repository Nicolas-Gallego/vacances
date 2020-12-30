// 01 - Number
console.log("-----01-----")
var integer = 102
var float = 13.9
console.log(integer, float)
console.log("------------")

// 02 - Convert
console.log("-----02-----")
var basic = 34
var stringified = basic.toString()
console.log(stringified)
console.log("------------")

// 03 - Round
console.log("-----03-----")
var num = 1.5
var rounded = Math.round(num)
console.log(rounded)
console.log("------------")

// 04 - Arithmétique
console.log("-----05-----")
var test = 12
var bis = 5
console.log(test + bis)
console.log(test - bis)
console.log(test * bis)
console.log(test / bis)
console.log(test % bis)
console.log("------------")

// 05 - Comparaison
console.log("-----05-----")
var test = 143
var bis = 219
console.log(test > bis)
console.log(test >= bis)
console.log(test < bis)
console.log(test <= bis)
console.log(test === bis)
console.log(test == bis)
console.log(test != bis)
console.log(test !== bis)
console.log("------------")

// 06 - Condition
console.log("-----06-----")
var limit = 50
var score = 49
if (score >= limit) {
    console.log("Ok, good !")
}
else {
    console.log("Oh, noooo...")
}
console.log("------------")

// 07 - Condition II
console.log("-----07-----")
var password = "azer"
if (password.length >= 5) {
    console.log("The password is secure")
}
else {
    console.log("Your password need to be longer, at least 5 characters")
}
console.log("------------")

// 08 - Condition III
console.log("-----08-----")
if (score >= limit && password.length >= 5) {
    console.log("Everything is good !")
}
else if (score >= limit || password.length >= 5) {
    console.log("Something is good")
}
else {
    console.log("Nothing is good")
}
console.log("------------")

// Bonus I
console.log("---Bonus---")
var min = 1
var max = 6
var random = Math.floor(Math.random() * (max - min + 1) + min)
console.log(random)
if (random === 6) {
    console.log("Yes I win")
}
else {
    console.log("So close...")
}
