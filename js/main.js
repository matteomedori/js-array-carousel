/* <div class="item active">
<img src="./img/01.jpg" alt="" />
</div>
<div class="item">
<img src="./img/02.jpg" alt="" />
</div>
<div class="item">
<img src="./img/03.jpg" alt="" />
</div>
<div class="item">
<img src="./img/04.jpg" alt="" />
</div>
<div class="item">
<img src="./img/05.jpg" alt="" />
</div> */
"use strict";

//array di immagini da inserire
const imgDaInserire = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
//elemento html che dovrà contenere le immagini
const items = document.querySelector(".items");

//scorro l'array di immagini
for (let i = 0; i < imgDaInserire.length; i++) {
  //per la prima immagine c'è anche la classe active
  if (i === 0) {
    items.innerHTML += `<div class="item active">
        <img src="./img/${imgDaInserire[i]}" alt="Immagine ${i + 1}" />
        </div>`;
  } else {
    items.innerHTML += `<div class="item">
        <img src="./img/${imgDaInserire[i]}" alt="Immagine ${i + 1}" />
        </div>`;
  }
}
