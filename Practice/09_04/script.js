/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const container = document.querySelector(".container");
const myCell = document.querySelectorAll(".cell");
// const window = window.querySelector(".container");

// const cell01 = document.querySelector(".cell01");
// const cell02 = document.querySelector(".cell02");
// const cell03 = document.querySelector(".cell03");

// window.addEventListener("keydown", )

container.addEventListener(
  "mouseenter",
  () => {
    container.classList.add("blue");
  }
);
container.addEventListener(
  "mouseleave",
  () => {
    container.classList.remove("blue");
  }
);

myCell.forEach((btn) => {
  btn.addEventListener(
    "mouseenter",
    (event) => {
      event.target.classList.add("red");
    }
  );
});

myCell.forEach((btn) => {
    btn.addEventListener(
      "mouseleave",
      (event) => {
        event.target.classList.remove("red");
      }
    );
  });

  myCell.forEach((btn) => {
    btn.addEventListener(
      "click",
      (event) => {
          if(event.target.classList.contains("green")){
          btn.classList.remove("green");
        }
          else btn.classList.add("green");
      }
  )});




//   myCell.forEach((btn) => {
//     btn.addEventListener("click", (event) => {
//       console.log(event.target);
//     });
//   });
//   myCell.forEach((btn) => {
//     btn.addEventListener("click", (event) => {
//       console.log(event.target);
//     });
//   });

// myCell.addEventListener(
//   "mouseenter",
//   () => {
//     myCell.classList.add("red");
//   },
//   false
// );

// myCell.addEventListener(
//   "mouseleave",
//   () => {
//     myCell.classList.remove("red");
//   },
//   false
// );
// myCell.addEventListener(
//   "click",
//   () => {
//       if(myCell.classList.contains("green")){
//       myCell.classList.remove("green");
//     }
//       else myCell.classList.add("green");
//   },
//   false
// );

// cell01.addEventListener(
//   "mouseenter",
//   () => {
//     cell01.classList.add("red");
//   },
//   false
// );
// cell01.addEventListener(
//   "mouseleave",
//   () => {
//     cell01.classList.remove("red");
//   },
//   false
// );
// cell01.addEventListener(
//   "click",
//   () => {
//       if( cell01.classList.contains("green")){
//       cell01.classList.remove("green");
//     }
//       else cell01.classList.add("green");
//   },
//   false
// );

// cell02.addEventListener(
//     "mouseenter",
//     () => {
//       cell02.classList.add("red");
//     },
//     false
//   );
//   cell02.addEventListener(
//     "mouseleave",
//     () => {
//       cell02.classList.remove("red");
//     },
//     false
//   );
//   cell02.addEventListener(
//     "click",
//     () => {
//         if( cell02.classList.contains("green")){
//         cell02.classList.remove("green");
//       }
//         else cell02.classList.add("green");
//     },
//     false
//   );

//   cell03.addEventListener(
//     "mouseenter",
//     () => {
//       cell03.classList.add("red");
//     },
//     false
//   );
//   cell03.addEventListener(
//     "mouseleave",
//     () => {
//       cell03.classList.remove("red");
//     },
//     false
//   );
//   cell03.addEventListener(
//     "click",
//     () => {
//         if( cell03.classList.contains("green")){
//         cell03.classList.remove("green");
//       }
//         else cell03.classList.add("green");
//     },
//     false
//
