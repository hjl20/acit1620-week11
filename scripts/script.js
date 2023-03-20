
// function greet(name) {
//     console.log(`Hello ${name}`)
// }

// const greet = function(name) {
//     console.log(`Hello ${name}`)
// }

// const greet = (name, time="day") => {
//     console.log(`Good ${time} ${name}`)
// }

// greet('john')


const calcCircleArea = radius => {
    alert(`The area of a circle with radius ${radius} is ${(Math.PI * radius**2).toFixed(2)}`)
}

calcCircleArea(prompt("Enter a radius: "))
