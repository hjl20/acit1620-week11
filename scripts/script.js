
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

// const radiusPara = document.querySelector("#radius")
// const resultPara = document.querySelector("#result")
// console.log(radiusPara)
// console.log(resultPara)

// const calcCircleArea = radius => {
//     radiusPara.textContent = radiusPara.textContent.concat(` is: ${radius}`)   
//     if (isNaN(radius)) {
//         resultPara.textContent = `Error: ${radius} is not a number`
//     }
//     else {
//         area = (Math.PI * radius**2).toFixed(2)
//         resultPara.textContent = `The area of a circle with radius ${radius} is: ${area}`
//         return area
//     }
// }

// let radius = prompt("Enter a radius:")
// calcCircleArea(radius)



// const ul = document.getElementsByClassName("shopping")[0]
const ul = document.querySelector(".shopping")
const populateShoppingList = arrayItems => {
    for (item of arrayItems) {
        let li = document.createElement("li")
        // li.textContent = item
        li.appendChild(document.createTextNode(item))
        ul.appendChild(li)
    }
}

const myList = ["cheese", "bread", "green pepper"]
populateShoppingList(myList)

const toSquareListStyle = () => {
    ul.classList.add("squareList")
    ul.classList.remove("circleList")
}

toSquareListStyle()

function updateImage() {
    imgSrc = 'https://cdn-icons-png.flaticon.com/512/263/263142.png'
    const image = document.querySelector("#shoppingCart")
    image.setAttribute("src", imgSrc)
    image.setAttribute("alt", "shopping cart")
    image.setAttribute("width", 150)
    image.setAttribute("height", 150)
}

updateImage()