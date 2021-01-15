const nextButton = document.querySelector('.next-button')
const previousButton = document.querySelector('.previous-button')
const imgWrapper = document.querySelectorAll('.scale-image')
const imgContainer = document.querySelector('.image-container img')
const catalogue = document.querySelectorAll('.catalogue li')
const overview = document.querySelectorAll('.overview')
const textWrapper = document.querySelector('.text-wrapper')
const pWrapper = document.querySelector('.p-wrapper')
const pWrap = document.getElementsByClassName('p-wrapper')
let counter = 0;

const dataState = [{
  title: 'Backpack Ridley Black',
  image: './asset/image2.png',
  description: `Sering males pake backpack karena ukurannya terlalu besar dan formal? Ridley Backpack adalah model backpack terbaru yang wajib kamu coba! Tersedia dalam 5 pilihan warna yang atraktif & playful!`,
},
{
  title: 'Walker Sling Bag Yellow',
  image: './asset/image3.png',
    description: `Sling bag keren & murah buat tas kuliah dan tas jalan-jalan dari brand tas VISVAL Bandung, Indonesia. Model minimalis dan simple untuk dipakai nge-chill, dengan model terbaru dan 14 varian warna menarik.`
}]

document.getElementById('image').src = dataState[counter].image
document.getElementById('title').innerHTML = dataState[counter].title
document.getElementById('description').innerHTML = dataState[counter].description

const tl = new TimelineMax();

tl.fromTo(imgWrapper, 1.2, { width: "0%", opacity: 0 }, { width: "100%", opacity: 1, ease: Power2.easeInOut })
tl.fromTo(textWrapper, 1.2, { marginLeft: "-400px" }, { marginLeft: "0px", ease: Power2.easeInOut }, "-=1.2")
tl.fromTo(pWrapper, 1.2, { marginLeft: "-400px" }, { marginLeft: "0px", ease: Power2.easeInOut }, "-=1")

const setter = (counter) => {
  document.getElementById('image').src = dataState[counter].image
  document.getElementById('title').innerHTML = dataState[counter].title
  document.getElementById('description').innerHTML = dataState[counter].description
}

const animate = (text, image) => {
  pWrapper.style.animation = `${text} 600ms cubic-bezier(0.62, 0.01, 0.33, 0.97) 0s 1 normal forwards`
  imgContainer.style.animation = `${image} 600ms cubic-bezier(0.62, 0.01, 0.33, 0.97) 0s 1 normal forwards`
  textWrapper.style.animation = `${text} 400ms cubic-bezier(0.62, 0.01, 0.33, 0.97) 0s 1 normal forwards`
}



const nextSlide = () => {
  nextButton.addEventListener('click', () => {
    catalogue.forEach((comp, i) => {
      if (i === counter && counter < catalogue.length - 2) {
        comp.style.animation = `nextFade 0.5s cubic-bezier(0.62, 0.01, 0.33, 0.97) forwards 0.2s`
        for (let j = counter; j < catalogue.length - 1; j++) {
          catalogue[j + 1].style.animation = `slideNext 0.5s cubic-bezier(0.62, 0.01, 0.33, 0.97) forwards 0.3s`
        }
        animate('fadeOut', 'fadeOut')
        setTimeout(() => {
          setter(counter)
          animate('fadeIn', 'fadeInImg')
        }, 400)
      }
    })
    counter++
  })
}

const previousSlide = () => {
  previousButton.addEventListener('click', () => {
    catalogue.forEach((comp, i) => {
      if (i === counter && counter > 0 && counter < 2) {
        catalogue[counter - 1].style.animation = `previousFade 0.5s cubic-bezier(0.62, 0.01, 0.33, 0.97) backwards 0.3s`
        for (let j = counter; j < catalogue.length; j++) {
          catalogue[j].style.animation = `slidePrevious 0.5s cubic-bezier(0.62, 0.01, 0.33, 0.97) backwards 0.2s`
        }
        animate('fadeOutLeft', 'fadeOutImg')
        setTimeout(() => {
          setter(counter)
          animate('fadeInLeft', 'fadeInLeft')
        }, 500)
      }
    })
    counter >= 0 && counter--
  })
}



nextSlide();
previousSlide();