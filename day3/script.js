// let btn = document.querySelector("button");
// let inp = document.querySelector("input");
// let div = document.querySelector("div");
// let h3 = document.querySelector("h3");

// const { rejects } = require("node:assert");
// const { promises, resolve } = require("node:dns");

// btn.addEventListener("click", NAME = ()=>{
//    let Name =  prompt("enter youe name: ")
//    console.log(Name)
// })
// btn.addEventListener("click", function(){
//     btn.style.backgroundColor = "#541818"
//     btn.textContent = "btn is clicked"
// })

// inp.addEventListener("keydown", function(){
//     console.log("key was pressed")
//     console.log(event.key)
//     console.log(event.code)
// })

// h3.textContent = inp.addEventListener("keydown", function(){
//     // console.log("key was pressed")
//     h3.textContent = (event.key)
//     // console.log(event.code)
// })

// div.addEventListener("onClick", function(){
//     console.log("the div was hovered by someone")
//     div.style.backgroundColor = "#8cb511"
//     div.style.border = "5px #782626 solid"
// })

// div.addEventListener("onmouseleave", function(){
//     console.log("mouse was removed")
//     div.style.backgroundColor = "#ffffff"
//     div.style.border = "2px #000000 solid"
// })

// inp.addEventListener("keydown", function (event) {
//   if (event.code == "ArrowUp") {
//     h3.textContent = "the character will move forward !!!";
//   }
//   if (event.code == "ArrowLeft") {
//     h3.textContent = "the character will move left!!!";
//   }
//   if (event.code == "ArrowDown") {
//     h3.textContent = "the character will move backword !!!";
//   }
//   if (event.code == "ArrowRight") {
//     h3.textContent = "the character will move right !!!";
//   }
// });

// inp.addEventListener("keyup", function (event) {
//   console.log(event.code);
// });

// async function myname(){

// }
//   let h1 = document.querySelector("h1")
// let changeColor = ()=>{
//   setTimeout(()=>{
//     h1.style.color = "red"
//   }, 1000)

//   setTimeout(()=>{
//     h1.style.color = "orange"
//   }, 2000)

//   setTimeout(()=>{
//     h1.style.color = "green"
//   }, 3000)
// }
// let i = 0
// while(i<100){
//   changeColor();
//   i++
// }
// console.log("naman pandey")

// call-back hell ---------------------------------->

// let h1 = document.querySelector("h1");

// function changeColor(color, deley, nextColour) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColour) nextColour();
//   }, deley);
// }
// let i = 0;
// while (i < 100) {
//   changeColor("red", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("blue", 1000, () => {
//           changeColor("pink", 1000);
//         });
//       });
//     });
//   });
//   i++;
// }

// for (let i = 0; i < 10; i++) {
//   console.log("hello");
// }

// function yourData(data, suscess, faliure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;

//   if (internetSpeed >= 5) {
//     suscess();
//   } else {
//     faliure();
//   }
// }

// yourData(
//   "naman pandey",
//   () => {
//     console.log("data was saved");
//     yourData(
//       "i am saved in data base",
//       () => {
//         console.log("this data is also saved suscessfully");
//         yourData(
//           "secondlast data ",
//           () => {
//             console.log("this is also saved suscessfully 'third' ");
//             yourData(
//               "finally last",
//               () => {
//                 console.log("this is last time i am saving data!!!!");
//               },
//               () => {
//                 console.log(
//                   "faliure: sorry i am not able to save data this time",
//                 );
//               },
//             );
//           },
//           () => {
//             console.log("faliure not possible to save");
//           },
//         );
//       },
//       () => {
//         console.log("sorry internet speed is not sufficeant!!!!");
//       },
//     );
//   },
//   () => {
//     console.log("weak connection data not save!!");
//   },
// );

// function saveData(data, suscess, faliure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;

//   if (internetSpeed > 5) {
//     suscess();
//   } else {
//     faliure();
//   }
// }

// saveData(
//   "naman pandey",
//   () => {
//     (console.log("suscess: the data was saved"),
//       saveData(
//         "Naman 2",
//         () => {
//           console.log("suscess: the data was saved again");
//           saveData(
//             "Naman 3",
//             () => {
//               console.log("suscess: the data was saved again 2");
//             },
//             () => {
//               console.log("Faliure: the data was not saved 2");
//             },
//           );
//         },
//         () => {
//           console.log("faliure: the data was not saved");
//         },
//       ));
//   },
//   () => {
//     console.log("faliure: Data not saved");
//   },
// );

function saveyourdata(data) {
  return new Promise((resolve, rejects) => {
    let internetspeed = Math.floor(Math.random() * 10) + 1;
    if (internetspeed > 5) {
      resolve("data saved");
    } else {
      rejects("data not saved");
    }
  });
}
console.log(saveyourdata("hello"));
