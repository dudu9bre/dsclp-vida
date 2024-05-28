let btns = document.querySelector(".yes")
let btn = document.querySelector(".no")
let height = window.innerHeight - 50
let width = window.innerWidth - 50

function desviar() {
    btn.style.position = "absolute"
    btn.style.top = Math.random() * height + "px"
    btn.style.left = Math.random() * width + "px"
}

btn.addEventListener("click", desviar)
btn.addEventListener("mouseover", desviar)
btn.addEventListener("touchstart", desviar)

function sim() {
    window.location.href = "tamo.html"
}

btns.addEventListener("click", sim)
btns.addEventListener("touchend", sim)