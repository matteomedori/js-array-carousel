"use strict";

//array di immagini da inserire
const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
//elemento html che dovrà contenere le immagini
const items = document.querySelector(".items");
//elemento html che dovrà contenere le thumbnails
const thumbnails = document.querySelector(".thumbnails");

//scorro l'array di immagini
for (let i = 0; i < images.length; i++) {
  //per la prima immagine c'è anche la classe active e nell'immagine del thumbnail anche la classe selected
  if (i === 0) {
    //aggiungo un item
    items.innerHTML += `<div class="item active">
        <img src="./img/${images[i]}" alt="Immagine ${i + 1}" />
        </div>`;
    //aggiungo un thumbnail
    thumbnails.innerHTML += `<div class="thumbnail">
        <img src="./img/${images[i]}" alt="Immagine ${
      i + 1
    }" class="selected" />
        </div>`;
  } else {
    items.innerHTML += `<div class="item">
        <img src="./img/${images[i]}" alt="Immagine ${i + 1}" />
        </div>`;
    thumbnails.innerHTML += `<div class="thumbnail">
    <img src="./img/${images[i]}" alt="Immagine ${
      i + 1
    }" class="not-selected" />
    </div>`;
  }
}

//seleziono elemento prev nell'html
const prev = document.querySelector(".prev");
//seleziono elemento prev nell'html
const next = document.querySelector(".next");
//seleziono tutti gli item
const allItems = document.querySelectorAll(".item");
//seleziono tutti i thumbnail
const allThumbnailImages = document.querySelectorAll(".thumbnail > img");
console.log(allThumbnailImages);
// contatore che dice quale elemento ha classe active
let counterActive = 0;

//evento sul click di prev
prev.addEventListener("click", function () {
  allItems[counterActive].classList.remove("active");

  //rimuovo classe selected a aggiungo not-selected
  allThumbnailImages[counterActive].classList.remove("selected");
  allThumbnailImages[counterActive].classList.add("not-selected");
  if (counterActive > 0) {
    counterActive--;
  } else {
    counterActive = allItems.length - 1;
  }
  allItems[counterActive].classList.add("active");
  //rimuovo classe not-selected a aggiungo selected
  allThumbnailImages[counterActive].classList.add("selected");
  allThumbnailImages[counterActive].classList.remove("not-selected");
});

//evento sul click di next
next.addEventListener("click", function () {
  allItems[counterActive].classList.remove("active");
  //rimuovo classe selected a aggiungo not-selected
  allThumbnailImages[counterActive].classList.remove("selected");
  allThumbnailImages[counterActive].classList.add("not-selected");
  if (counterActive < allItems.length - 1) {
    counterActive++;
  } else {
    counterActive = 0;
  }
  allItems[counterActive].classList.add("active");
  //rimuovo classe not-selected a aggiungo selected
  allThumbnailImages[counterActive].classList.add("selected");
  allThumbnailImages[counterActive].classList.remove("not-selected");
});
