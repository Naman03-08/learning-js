let btn = document.querySelector("button")

function generateRandomColor(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255) 

    let colour = (`rgb(${red}, ${green}, ${blue})`)
    return colour;
}

btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3")
    let div = document.querySelector("div")

    let randomcolor = generateRandomColor();

    h3.innerText = randomcolor;

    div.style.backgroundColor = randomcolor;
    div.innerText = (`color changed to ${randomcolor}`)

    console.log("colour updated ")
})

btn.addEventListener("click", function(){
    console.dir(KeyboardEvent)
})