// // //Model

// // //All uppercase  for lookups -const
// // const IMAGES = [
// //   "image1.jpg",
// //   "image2.jpg",
// //   "image3.jpg",
// //   "image4.jpg",
// //   "image5.jpg",
// //   "image6.jpg",
// //   "image7.jpg",
// //   "image8.jpg",
// //   "image9.jpg",
// //   "image10.jpg",
// //   "image11.jpg",
// //   "image12.jpg",
// //   "image13.jpg",
// //   "image14.jpg",
// //   "image15.jpg",
// //   "image16.jpg",
// //   "image17.jpg",
// //   "image18.jpg",
// //   "image19.jpg",
// //   "image20.jpg",
// //   "image21.jpg",
// //   "image22.jpg",
// //   "image23.jpg",
// //   "image24.jpg",
// // ];
// // const IMAGES = Array.from(document.querySelectorAll("section > div"));
// // const IMAGES = Array.from(document.querySelectorAll("section"));
// ///place the doubled images randomly into html
// ////cover the grids up until clikec
// // check if two clicks made and the compare the two.
// ///if both are the same images keep them open if not close them

// const sectionAll = document.querySelector("section");
// const sectionEls = Array.from(
//   document.querySelectorAll("section > div > img ")
// );
// let copyImages = [...sectionEls];
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
//     // console.log(result);
//     //Shuffle the array
//     return result.sort(() => Math.random() - 0.5);
//   }

//   function imgPlacer() {
//     for (let i = 0; i < placeImages.length; i++) {
//       //   let img = document.createElement("img");
//       //   img.src = "images/" + placeImages[i];
//       //   img.style.height = "16vmin";
//       // sectionEls[i].append(img);
//       sectionEls[i].setAttribute("src", placeImages[i]);
//     }
//   }
//   sectionAll.addEventListener("click", (evt) => {
//     console.log(evt.target);
//   });

//   imgPlacer();
// }

// init();

// // function randomPhotoGenerator() {

// //     let counter = imageArray.length;
// //     let random = 0;

// //     //function
// //     while (counter--) {
// //       random = Math.floor(Math.random() * (counter + 1));
// //       placeImages.push(IMAGES[random]);
// //       IMAGES.splice(random, 1);
// //     }
// //   }

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

///place the doubled images randomly into html
////cover the grids up until clikec
// check if two clicks made and the compare the two.
///if both are the same images keep them open if not close them

const sectionAll = document.querySelector("section");
const sectionEls = Array.from(document.querySelectorAll("section > div"));
let copyImages = [...IMAGES];
let placeImages;

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
      let img = document.createElement("img");
      img.src = "images/" + placeImages[i];
      img.style.height = "16vmin";

      sectionEls[i].append(img);
      sectionEls[i].setAttribute("name", placeImages[i]);
    }
  }

  function checker() {
    let two = [];
    let counter = 0;
    sectionAll.addEventListener("click", (evt) => {
      console.log(evt.target.parentElement);
      let image = evt.target.parentElement.getAttribute("name");
      two.push(image);

      if (two.length === 2) {
        if (two[0] === two[1]) {
          counter++;
          two = [];
          console.log(counter);
          // sectionAll.evt.target.parentElement.style.visibility = "hidden";
        } else {
          two = [];
        }
        console.log(two);
        return counter ? 24 : false;
      }
    });
  }

  imgPlacer();
  checker();
}

window.onload = init();

// function randomPhotoGenerator() {

//     let counter = imageArray.length;
//     let random = 0;

//     //function
//     while (counter--) {
//       random = Math.floor(Math.random() * (counter + 1));
//       placeImages.push(IMAGES[random]);
//       IMAGES.splice(random, 1);
//     }
//   }
