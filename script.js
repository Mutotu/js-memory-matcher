// "use strcit";

// const IMAGES = [
//   "image1.jpg",
//   "image2.jpg",
//   "image3.jpg",
//   "image4.jpg",
//   "image5.jpg",
//   "image6.jpg",
//   "image7.jpg",
//   "image8.jpg",
//   "image9.jpg",
//   "image10.jpg",
//   "image11.jpg",
//   "image12.jpg",
//   "image13.jpg",
//   "image14.jpg",
//   "image15.jpg",
//   "image16.jpg",
//   "image17.jpg",
//   "image18.jpg",
//   "image19.jpg",
//   "image20.jpg",
//   "image21.jpg",
//   "image22.jpg",
//   "image23.jpg",
//   "image24.jpg",
// ];

// let section = document.querySelector("section");
// section.addEventListener("click", () => console.log(section));
// const sectionAll = document.querySelector("section");
// const sectionEls = Array.from(document.querySelectorAll("section > div"));
// let copyImages = [...IMAGES];
// let placeImages;
// let indexCollector = [];

// function init() {
//   placeImages = randomPhotoGenerator(copyImages);
//   function randomPhotoGenerator(array) {
//     let counter = array.length / 2;
//     let random = 0;
//     let result = [];
//     while (counter--) {
//       random = Math.floor(Math.random() * (counter + 1));
//       result.push(array[random]);
//       array.splice(random, 1);
//     }
//     result = [...result, ...result];
//     //Shuffle the array
//     return result.sort(() => Math.random() - 0.5);
//   }

//   function imgPlacer() {
//     for (let i = 0; i < placeImages.length; i++) {
//       sectionEls[i].setAttribute("name", placeImages[i]);
//       sectionEls[i].setAttribute("id", i);

//       sectionEls[i].style.backgroundColor = "blue";

//       sectionEls[i].addEventListener("click", function () {
//         let img = document.createElement("img");
//         img.src = "images/" + sectionEls[i].getAttribute("name");
//         img.style.height = "16vmin";
//         sectionEls[i].appendChild(img);
//         indexCollector.push(i);

//         checkMatch();
//       });
//     }
//   }
//   function checkMatch() {
//     if (indexCollector.length === 2) {
//       let item1 = document.getElementById(indexCollector[0]);
//       let item2 = document.getElementById(indexCollector[1]);

//       if (item1.getAttribute("name") === item2.getAttribute("name")) {
//         item1.setAttribute("disabled", true);
//         item2.setAttribute("disabled", true);
//         indexCollector = [];
//       } else {
//         setTimeout(() => {
//           item1.innerHTML = "";
//           item2.innerHTML = "";
//         }, 1000);
//         indexCollector = [];
//       }
//     }
//   }

//   imgPlacer();
// }

// window.onload = init();

/////////////////
"use strcit";

const IMAGES = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg",
  "image9.jpg",
  "image10.jpg",
  "image11.jpg",
  "image12.jpg",
  "image13.jpg",
  "image14.jpg",
  "image15.jpg",
  "image16.jpg",
  "image17.jpg",
  "image18.jpg",
  "image19.jpg",
  "image20.jpg",
  "image21.jpg",
  "image22.jpg",
  "image23.jpg",
  "image24.jpg",
];

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let section = document.querySelector("section");
section.addEventListener("click", () => console.log(section));
const playBt = document.querySelector("button");
const sectionAll = document.querySelector("section");
let sectionEls = Array.from(document.querySelectorAll("section > div"));
let copyImages = [...IMAGES];
let placeImages;
let indexCollector = [];
let counter = 0;
let countTime = 0;
function init() {
  placeImages = randomPhotoGenerator(copyImages);
  function randomPhotoGenerator(array) {
    let counter = array.length / 2;
    let random = 0;
    let result = [];
    while (counter--) {
      random = Math.floor(Math.random() * (counter + 1));
      result.push(array[random]);
      array.splice(random, 1);
    }
    result = [...result, ...result];
    //Shuffle the array
    return result.sort(() => Math.random() - 0.5);
  }

  function imgPlacer() {
    for (let i = 0; i < placeImages.length; i++) {
      sectionEls[i].setAttribute("name", placeImages[i]);
      sectionEls[i].setAttribute("id", i);

      sectionEls[i].style.backgroundColor = "blue";

      sectionEls[i].addEventListener("click", function () {
        let img = document.createElement("img");
        img.src = "images/" + sectionEls[i].getAttribute("name");
        img.style.height = "12vmin";

        sectionEls[i].appendChild(img);
        indexCollector.push(i);

        checkMatch();
      });
    }
  }
  function checkMatch() {
    if (indexCollector.length === 2) {
      let item1 = document.getElementById(indexCollector[0]);
      let item2 = document.getElementById(indexCollector[1]);

      if (item1.getAttribute("name") === item2.getAttribute("name")) {
        counter++;
        item1.setAttribute("disabled", true);
        item2.setAttribute("disabled", true);
        indexCollector = [];
      } else {
        setTimeout(() => {
          item1.innerHTML = "";
          item2.innerHTML = "";
        }, 500);
        indexCollector = [];
      }
    }
  }

  function score() {
    if (counter === placeImages.length / 2) {
      h2.innerText = "Your score is somethin";
    }
  }

  function timer() {
    let time = setInterval(function () {
      h3.innerText = "Time: " + ++countTime;
      if (counter === 12) {
        clearInterval(time);
      }
    }, 1000);
  }
  timer();
  score();
  imgPlacer();
}

window.onload = init();
