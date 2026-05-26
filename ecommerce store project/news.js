let cardimg = document.querySelectorAll(".card-img-top");
let producttopimg = document.querySelector(".productopimg img");
let decr = document.querySelector(".decre");
let incr = document.querySelector(".incre");
let additinse = document.querySelector(".addition");

cardimg.forEach((el) => {
  el.addEventListener("click", () => {
    let card = el.closest(".card");
    let name = card.querySelector(".card-title").innerText;
    let price = card.querySelector(".price").innerText;
    let image = card.querySelector("img").getAttribute("src");

    let productData = {
      name: name,
      price: price,
      image: image,
    };
    localStorage.setItem("selectedProduct", JSON.stringify(productData));
    window.location.href = "productopen.html";
  });
});

window.addEventListener("DOMContentLoaded", () => {
  let product = JSON.parse(localStorage.getItem("selectedProduct"));

  if ((product, producttopimg)) {
    producttopimg.setAttribute("src", product.image);

    document.getElementById("productName").innerText = product.name;

    document.getElementById("productPrice").innerText = product.price;
  }
});

if (incr) {
  incr.addEventListener("click", () => {
    let increase = additinse.innerText;
    increase++;
    additinse.innerText = increase;



 


  });
}

if (decr) {
  decr.addEventListener("click", () => {
    let decrease = additinse.innerText;
    let finaltell = JSON.parse(localStorage.getItem("finaltell"))
    let subtotal = document.querySelector(".subtotal h6")


    decrease--;
    additinse.innerText = decrease;
    



    if (additinse.innerText == 0) {
      let specificprice = document.querySelector(".specificpr .pricepr").innerText
      additinse.innerText = 1;
      subtotal.innerText = specificprice;
    }
  });
}
