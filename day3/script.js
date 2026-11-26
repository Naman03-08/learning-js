let btn = document.querySelector("button");
let inp = document.querySelector("input");
let div = document.querySelector("div");
let h3 = document.querySelector("h3");

btn.addEventListener("click", NAME = ()=>{
   let Name =  prompt("enter youe name: ")
   console.log(Name)
})
btn.addEventListener("click", function(){
    btn.style.backgroundColor = "#f90909"
    btn.textContent = "btn is clicked"
})

inp.addEventListener("keydown", function(){
    console.log("key was pressed")
    console.log(event.key)
    console.log(event.code)
})

h3.textContent = inp.addEventListener("keydown", function(){
    // console.log("key was pressed")
    h3.textContent = (event.key)
    // console.log(event.code)
})

div.addEventListener("onClick", function(){
    console.log("the div was hovered by someone")
    div.style.backgroundColor = "#8cb511"
    div.style.border = "5px #782626 solid"
})

div.addEventListener("onmouseleave", function(){
    console.log("mouse was removed")
    div.style.backgroundColor = "#ffffff"
    div.style.border = "2px #000000 solid"
})

inp.addEventListener("keydown", function (event) {
  if (event.code == "ArrowUp") {
    h3.textContent = "the character will move forward !!!";
  }
  if (event.code == "ArrowLeft") {
    h3.textContent = "the character will move left!!!";
  }
  if (event.code == "ArrowDown") {
    h3.textContent = "the character will move backword !!!";
  }
  if (event.code == "ArrowRight") {
    h3.textContent = "the character will move right !!!";
  }
});

inp.addEventListener("keyup", function (event) {
  console.log(event.code);
});
