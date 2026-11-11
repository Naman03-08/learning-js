let btn = document.querySelector("button")

btn.onclick = function (){
    console.log("you have clicked the button!!!")
    alert("You have clicked the button ")
}

btn.onmouseenter = function (){
    console.log("you hovered to mouse!!")
    alert("you entered button")
}

btn.addEventListener("click", dblclick)

let dblclick = ()=>{
    console.log("you are in a loop!!")
}
btn.addEventListener("click", dblclick)