const body = document.querySelector("body")

let noQuantidade = 0

const title = document.querySelector("h1")
let img = document.querySelector("img")

const box = document.querySelector(".container")
const buttons = document.querySelector(".container-buttons")
const yes = document.querySelector("#yes")
const no = document.querySelector("#no")

no.addEventListener('click', () => {
    noQuantidade++

    if(noQuantidade == 10){
        
        console.log(img)
        img.setAttribute("src", "images/ok.png")
        title.innerHTML = "Cuzão"
        buttons.style.display = "none"
    }
    let positionHeight = Math.floor(Math.random() * (window.innerHeight - box.offsetHeight))
    positionHeight = positionHeight.toString() + "px"
    let positionWidth = Math.floor(Math.random() * (window.innerWidth - box.offsetWidth))
    positionWidth = positionWidth.toString() + "px"

    body.style.display = "block" 

    box.style.top = positionHeight
    box.style.left = positionWidth
    
})

yes.addEventListener("click", () => {
    img.setAttribute("src", "images/love.png")
    buttons.style.display = "none"
    title.innerHTML = "Eu sempre te amei!! <3"
})