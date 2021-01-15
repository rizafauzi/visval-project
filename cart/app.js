

const imgContainer = document.querySelector('.overview img')

const tl = new TimelineMax();
tl.fromTo(imgContainer, 1, { marginBottom: "-400px", opacity: 0 }, { marginBottom: "0px", opacity: 1, ease: Power2.easeInOut }, "-=1.2")


document.getElementById('img1').innerHTML = `<div class="loader">Loading...</div>`
document.getElementById('img2').innerHTML = `<div class="loader">Loading...</div>`
document.getElementById('img3').innerHTML = `<div class="loader">Loading...</div>`
document.getElementById('img4').innerHTML = `<div class="loader">Loading...</div>`
let counter = 0;

setTimeout(() => {
  document.getElementById('img1').innerHTML = `<img id="asd" src="../asset/item1.png" alt="item1">`
}, 1000)

setTimeout(() => {
  document.getElementById('img2').innerHTML = `<img id="asd" src="../asset/item2.png" alt="item1">`
}, 1200)

setTimeout(() => {
  document.getElementById('img3').innerHTML = `<img id="asd" src="../asset/item3.png" alt="item1">`
}, 1400)

setTimeout(() => {
  document.getElementById('img4').innerHTML = `<img id="asd" src="../asset/item4.png" alt="item1">`
}, 1600)

document.getElementById('img5').innerHTML = `<img id="asd" src="../asset/image2.png" alt="">`

