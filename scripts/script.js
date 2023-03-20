
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
    if (isNaN(radius)) {
        alert("This is not a number")
    }
    else {
        return Math.PI * radius**2
    }
}

let radius = prompt("Enter a radius:")
alert(`The area of a circle with radius ${radius} is ${calcCircleArea(radius).toFixed(2)}`)
