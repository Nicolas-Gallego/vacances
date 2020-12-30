// 01 - Hello World
console.log("-----01-----")
console.log("Hello Wolrd")
console.log("------------")

// 02 - String
console.log("-----02-----")
var test = "My name is Nicolas"
console.log(test)
console.log("------------")

// 03 - Concatennation
console.log("-----03-----")
var name = "Nicolas"
console.log(`Nice to meet you ${name}`)
console.log("------------")

// 04 - String Length
console.log("-----04-----")
var testLength = "I'm Very Long !"
console.log(testLength.length)
console.log("------------")

// 05 - Replace
console.log("-----05-----")
var food = "Croissant is meh"
console.log(food.replace("meh", "good"))
console.log("------------")

// 06 - Up and Down
console.log("-----06-----")
var basic = "This is Cool"
var basicUp = basic.toUpperCase()
var basicDown = basic.toLowerCase()
console.log(`${basic} / ${basicUp} / ${basicDown} `)
console.log("------------")

// 07 - Split 
console.log("-----07-----")
var word = "banana"
var letters = word.split(" ")
console.log(letters)
console.log("------------")

// 08 template
console.log("-----08-----")
var age = "27"
var template = (` I'm ${age} years old `)
console.log(template)
console.log("------------")