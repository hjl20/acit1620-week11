
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

const radiusPara = document.querySelector("#radius")
const resultPara = document.querySelector("#result")
console.log(radiusPara)
console.log(resultPara)

const calcCircleArea = radius => {
    radiusPara.textContent = radiusPara.textContent.concat(` is: ${radius}`)   
    if (isNaN(radius)) {
        resultPara.textContent = `Error: ${radius} is not a number`
    }
    else {
        area = (Math.PI * radius**2).toFixed(2)
        resultPara.textContent = `The area of a circle with radius ${radius} is: ${area}`
        return area
    }
}

let radius = prompt("Enter a radius:")
calcCircleArea(radius)



