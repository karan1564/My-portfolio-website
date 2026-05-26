const button = document.querySelector("button")
const bottom = document.querySelector(".bottom span")
const bot = document.querySelector(".bottom")
const tra = document.querySelector(".frame")
const a = document.getElementById("mylink")
let text = document.getElementById("t")
let te = document.getElementById("te")
let tex = document.getElementById("tex")
const sb = document.querySelector(".sb")
let maine=document.querySelector(".main-email")

let contact = document.getElementById("contactus")











text.addEventListener('focus', function () {

  this.removeAttribute('placeholder')




}


)




te.addEventListener('focus', function () {
  this.removeAttribute('placeholder')


})




tex.addEventListener('focus', function () {
  this.removeAttribute('placeholder')


})












button.addEventListener("click", () => {
  if (button.innerText == "Download CV") {
    button.style.backgroundColor = "black"
   

  }


})


const time = setInterval(() => {
   
  button.style.backgroundColor = "#2563Eb"

}, 3000)



// slide
const left = document.querySelector("#left")
const right = document.querySelector("#right")
const img = document.querySelectorAll(".slider img")
const slider = document.querySelector(".slider")
const length = img.length;
let slidenumber = 1;


function change() {
  if (slidenumber == 1) {
    bottom.innerText = "Tictactoe Game";
    a.setAttribute('href', 'tic/index.html')

  }
  else if (slidenumber == 2) {
    bottom.innerText = "Calculator App";
    a.setAttribute('href', 'js 3 calculator/index.html')

  }else if(slidenumber==3){
     bottom.innerText = "Currency Converter App";
    a.setAttribute('href', 'js currency converter/index.html')

  }else if(slidenumber==4){
     bottom.innerText = "Ecommerce - Store";
    a.setAttribute('href', 'ecommerce store project/index.html')

  }


}




right.addEventListener("click", () => {
  if (slidenumber < length) {
    slider.style.transform = `translateX(-${slidenumber * tra.offsetWidth}px)`








    slidenumber++;
    change();





  }
  if(slidenumber==4) {
    slider.style.transform = `translateX(0px))`


    slidenumber = 0;
    change();

  }

})



left.addEventListener("click", () => {
  if (slidenumber > 1) {
    slider.style.transform = `translateX(-${(slidenumber - 2) * tra.offsetWidth}px)`
    slidenumber--;
   
    
    change();
  } else {
    slider.style.transform = `translateX(-${(length - 1) * tra.offsetWidth}px)`
    slidenumber = length;
    change();
        

  }
})





window.addEventListener("DOMContentLoaded",()=>{



maine.value="ks68521raja@gmail.com";




})