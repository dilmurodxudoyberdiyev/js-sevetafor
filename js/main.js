let boxbtn = document.querySelector(".boxbtn");
let boxbtn1 = document.querySelector(".boxbtn1")
let boxbtn2 = document.querySelector(".boxbtn2")
let boxbtn3 = document.querySelector(".boxbtn3")

let redColor = document.querySelector(".red")
let yellowColor = document.querySelector(".yellow")
let greenColor = document.querySelector(".green")


boxbtn.addEventListener("click", function(){
    greenColor.style.backgroundColor = "rgb(39, 38, 38)"
    yellowColor.style.backgroundColor = "rgb(39, 38, 38)"
    redColor.style.backgroundColor = "red"
})
boxbtn1.addEventListener("click", function(){
    greenColor.style.backgroundColor = "rgb(39, 38, 38)"
    redColor.style.backgroundColor = "rgb(39, 38, 38)"
    yellowColor.style.backgroundColor = "yellow"
})
boxbtn2.addEventListener("click", function(){
    yellowColor.style.backgroundColor = "rgb(39, 38, 38)"
    redColor.style.backgroundColor = "rgb(39, 38, 38)"
    greenColor.style.backgroundColor = "green"
})
boxbtn3.addEventListener("click", function(){
    redColor.style.backgroundColor = "rgb(39, 38, 38)"
    yellowColor.style.backgroundColor = "rgb(39, 38, 38)"
    greenColor.style.backgroundColor = "rgb(39, 38, 38)"
})