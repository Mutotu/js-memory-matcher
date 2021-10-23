// "use strcit";

// //Model

// //All uppercase  for lookups -const
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

// ///pDone ///////lace the doubled images randomly into html
// ////cover the grids up until clikec
// // check if two clicks made and the compare the two.
// ///if both are the same images keep them open if not close them

// const sectionAll = document.querySelector("section");
// const sectionEls = Array.from(document.querySelectorAll("section > div"));
// let copyImages = [...IMAGES];
// let placeImages;

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
//       let img = document.createElement("img");
//       img.src = "images/" + placeImages[i];
//       img.style.height = "16vmin";

//       sectionEls[i].append(img);
//       sectionEls[i].setAttribute("name", placeImages[i]);
//     }
//   }

//   function checker() {
//     let two = [];
//     let counter = 0;
//     sectionAll.addEventListener("click", (evt) => {
//       // console.log(evt.target.parentElement);
//       let image = evt.target.parentElement.getAttribute("name");
//       two.push(image);

//       if (two.length === 2) {
//         if (two[0] === two[1]) {
//           counter++;
//           two = [];

//           // console.log(counter);
//           // sectionAll.evt.target.parentElement.style.visibility = "hidden";
//         } else {
//           two = [];
//         }
//         console.log(two);
//         return counter ? 24 : false;
//       }
//     });
//   }

//   imgPlacer();
//   checker();
// }

// window.onload = init();

"use strcit";

//Model

//All uppercase  for lookups -const
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

///pDone ///////lace the doubled images randomly into html
////cover the grids up until clikec
// check if two clicks made and the compare the two.
///if both are the same images keep them open if not close them
let section = document.querySelector("section");
section.addEventListener("click", () => console.log(section));
const sectionAll = document.querySelector("section");
const sectionEls = Array.from(document.querySelectorAll("section > div"));
let copyImages = [...IMAGES];
let placeImages;
let indexCollector = [];
let twoItems = [];

////
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
  ///first append the name
  ///then if names match append the photo
  function imgPlacer() {
    for (let i = 0; i < placeImages.length; i++) {
      let img = document.createElement("img");
      img.src = "images/" + placeImages[i];
      img.style.height = "16vmin";
      sectionEls[i].setAttribute("name", placeImages[i]);
      sectionEls[i].setAttribute("id", i);

      sectionEls[i].style.backgroundColor = "blue";
      //
      sectionEls[i].addEventListener("click", function () {
        console.log(sectionEls[i]);
        twoItems.push(sectionEls[i].getAttribute("name"));
        indexCollector.push(i);
        sectionEls[i].append(img);

        checkMatch();
      });
    }
  }
  function checkMatch() {
    if (twoItems.length === 2) {
      console.log(twoItems);
      if (twoItems[0] === twoItems[1]) {
        sectionEls[Number(indexCollector[0])].append(img);
        sectionEls[Number(indexCollector[1])].append(img);
      } else {
        sectionEls[Number(indexCollector[0])].style.backgroundColor = "blue";
        sectionEls[Number(indexCollector[1])].style.backgroundColor = "blue";
      }
      indexCollector = [];
      twoItems = [];
    }
  }
  imgPlacer();
}

window.onload = init();
