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
      sectionEls[i].setAttribute("name", placeImages[i]);
      sectionEls[i].setAttribute("id", i);

      sectionEls[i].style.backgroundColor = "blue";
      //
      sectionEls[i].addEventListener("click", function () {
        let img = document.createElement("img");
        img.src = "images/" + sectionEls[i].getAttribute("name");
        img.style.height = "16vmin";
        sectionEls[i].appendChild(img);
        indexCollector.push(i);
        // sectionEls[i].append(img);
        checkMatch();
      });
    }
  }
  function checkMatch() {
    if (indexCollector.length === 2) {
      let item1 = document.getElementById(indexCollector[0]);
      let item2 = document.getElementById(indexCollector[1]);

      if (item1.getAttribute("name") === item2.getAttribute("name")) {
        item1.setAttribute("disabled", true);
        item2.setAttribute("disabled", true);
        indexCollector = [];
      } else {
        setTimeout(() => {
          item1.innerHTML = "";
          item2.innerHTML = "";
        }, 1000);
        indexCollector = [];
        // item1.innerHTML = "";
        // item2.innerHTML = "";
      }
    }
  }

  imgPlacer();
}

window.onload = init();
