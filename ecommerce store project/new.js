let addy = document.querySelectorAll(".addy");
let butt = document.querySelector(".butt");
let additins = document.querySelector(".addition");
let paddy = document.querySelector(".paddy");
let butty = document.querySelector(".butty");
let cardbodyname = document.querySelector(".card-body h5");
let cardbodyprice = document.querySelectorAll(".price");
let person = document.querySelector(".bi-person-lines-fill");
let body = document.querySelector("body");
let form = document.querySelector(".formss");
let hero = document.querySelector(".hero");
let formcontrl = document.querySelector(".form-control");
let formcontrlr = document.querySelector(".form-controlr");
let producthead = document.querySelector(".product-head");
let mainpro = document.querySelector(".mainpro");
let mainprot = document.querySelector(".mainprot");
let search = document.querySelector(".bi-search");
let incredecre = document.querySelector(".incredecre");
let serchbutton = document.querySelector(".searchbutton");
let crdynames = document.querySelectorAll(".card-title");
let til = document.querySelector(".til");
let pricebtw = document.querySelector(".pricebtw");
let headingcart = document.querySelector(".headingcart");
let noticart = document.querySelector(".noticart");
let cartbut = document.querySelector(".cartbut");
let hrs = document.querySelector(".hrs");
let specificprice = document.querySelector(".specificpr .pricepr");
let subtotal = document.querySelector(".subtotal h6");
let centertex = document.querySelector(".centertext");
let addt = document.querySelector(".addt");
let updater = document.querySelector(".updater");
let gettotal = document.querySelector(".gettotal");
let cartotals = document.querySelector(".carttotals");
let subtotalmain = document.querySelector(".subtotalmain h5");
let totalmain = document.querySelector(".totalmain h5");
let geto = document.querySelector(".geto");
let reset = document.querySelector(".reset");
let allinony = document.querySelector(".allinone");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
if (cart.length == 0) {
  let count = 0;
  localStorage.setItem("total", count);
}
// CART COUNT

let count = Number(localStorage.getItem("total")) || 0;

if (butt) {
  butt.innerText = count;
}

// ADD TO CART BUTTONS
let addButtons = document.querySelectorAll(".addy");

addButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    let card = btn.closest(".card");

    let name = card.querySelector(".card-title").innerText;
    let price = card.querySelector(".price").innerText.replace("$", "");
    let image = card.querySelector("img").getAttribute("src");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // CHECK IF PRODUCT ALREADY EXISTS
    let existingProduct = cart.find((item) => item.name === name);

    if (existingProduct) {
      existingProduct.quantitiy += 1;
    } else {
      let product = {
        name: name,
        price: price,
        image: image,
        quantitiy: 1,
      };

      cart.push(product);
    }

    // UPDATE BAG COUNT
    count++;
    localStorage.setItem("total", count);

    if (butt) {
      butt.innerText = count;
    }

    // SAVE CART
    localStorage.setItem("cart", JSON.stringify(cart));
  });
});

// DISPLAY CART PRODUCTS
window.addEventListener("DOMContentLoaded", (e) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cart);

  localStorage.setItem("total", count);

  let cartContainer = document.querySelector(".pricebtw");

  if (!cartContainer) return;

  cartContainer.innerHTML = "";

  cart.forEach((item) => {
    displaycart();
    document.querySelectorAll(".incre").forEach((bt) => {
      bt.addEventListener("click", (e) => {
        let count = 1;
        e.target.nextElementSibling.innerText =
          parseInt(e.target.nextElementSibling.innerText) + parseInt(count);

        count++;

        let subtotal =
          e.target.parentElement.parentElement.children[1].innerText;
        let mainprice =
          e.target.parentElement.parentElement.previousElementSibling
            .children[1].childNodes[3].innerText;

        let total =
          parseInt(subtotal.replace("$", "")) +
          parseInt(mainprice.replace("$", ""));
        e.target.parentElement.parentElement.children[1].innerText = `$${total}.00`;
      });
    });
    document.querySelectorAll(".decre").forEach((bt) => {
      bt.addEventListener("click", (e) => {
        let cent = document.querySelectorAll(".centertext");

        if (e.target.previousElementSibling.innerText == 1) {
          e.target.previousElementSibling.innerText = 1;
        } else {
          e.target.previousElementSibling.innerText--;
        }

        let subtotal =
          e.target.parentElement.parentElement.children[1].innerText;
        let mainprice =
          e.target.parentElement.parentElement.previousElementSibling
            .children[1].childNodes[3].innerText;

        let total = subtotal.replace("$", "") - mainprice.replace("$", "");
        let cr = total.toString();

        if (total == 0) {
          e.target.parentElement.parentElement.children[1].innerText;
        } else {
          e.target.parentElement.parentElement.children[1].innerText = `$${cr}.00`;
        }
      });
    });

    document.querySelectorAll(".bi-trash3-fill").forEach((btn, i) => {
      btn.onclick = function () {
        e.preventDefault();
        location.reload();

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(i, 1);
        localStorage.setItem("cart", JSON.stringify(cart));

        displaycart();

        attachEvents();

        let count = Number(localStorage.getItem("total")) - 1;

        if (butt) {
          butt.innerText = count;
        }
        localStorage.setItem("total", count);
      };
    });
  });
});

function displaycart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartotals = document.querySelector(".carttotals");
  let til = document.querySelector(".til");
  let hrs = document.querySelector(".hrs");
  let headingcart = document.querySelector(".headingcart");

  let cartContainer = document.querySelector(".pricebtw");

  if (cart.length === 0) {
    til.classList.add("d-none");
    cartContainer.innerHTML = "<h2>Your Cart is Empty 🛒</h2>";

    return;
  }

  if (!cartContainer) return;

  cartContainer.innerHTML = "";

  cart.forEach((item) => {
    let subtotal = item.price * item.quantitiy;
    localStorage.setItem("subtotal", subtotal);

    let html = `
        <div class="trex">

            <div class="pil">

                <div class="imgprctotal">
                    <img src="${item.image}" width="80">
                </div>

                <div class="specificpr">
                    <h6 class="namepr">${item.name}</h6>
                    <h6 class="pricepr">$${item.price}</h6>
                </div>

            </div>

            <div class="quantitymainpr">

                <div class="buttonmake">
                       <p class="incre">+</p>
                 
                    <p class="centertext">${item.quantitiy}</p>
                           <p class="decre">-</p>
                 
                </div>

                <div class="subtotal">
                    $${subtotal}.00
                </div>
                     <div class="deletebutton">
              <i class="bi bi-trash3-fill"></i>
                
            </div>
          
 
            </div>
     
       

        </div>
             <div class="divline">

            </div>









        
        `;

    cartContainer.innerHTML += html;
  });
}

// OPEN CART PAGE

if (updater) {
  updater.addEventListener("click", () => {
    window.location.href = "cart.html";
  });
}

if (paddy) {
  paddy.addEventListener("click", () => {
    let quantitiy = 1;
    let roll = Number(butt.innerText);
    let total = quantitiy + roll;
    butt.innerText = total;
    let maint = Number(additins.innerText);

    localStorage.setItem("total", total);

    let productopen = paddy.closest(".productopen");
    let productopimg = productopen
      .querySelector(".productopimg img")
      .getAttribute("src");
    let rtex = productopen.querySelector(".rtex");

    let productheading = rtex.querySelector(".productheading");
    let productopname =
      productheading.querySelector(".additionheads h1").innerText;
    let productopprice = productheading
      .querySelector(".additionheads h3")
      .innerText.replace("$", "");

    let finalprice = productopprice * quantitiy;
    console.log("img", productopimg);

    console.log("name", productopname);
    console.log("quantitiy", quantitiy);
    console.log("price", productopprice);
    console.log(maint);

    console.log("final", finalprice);
    let newset = {
      name: productopname,
      image: productopimg,
      quantitiy: quantitiy,
      price: productopprice,
      mainquantity: maint,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let exist = cart.find((item) => item.name === newset.name);

    if (exist) {
      exist.quantitiy += newset.mainquantity;
    } else {
      let newset = {
        name: productopname,
        image: productopimg,
        quantitiy: maint,
        price: productopprice,
      };

      cart.push(newset);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  });
}

let opy = (text) => {
  window.location.href = text;
};

document.addEventListener("DOMContentLoaded", function () {
  let searchInput = document.querySelector(".searchInput");
  let searchButton = document.querySelector(".searchbutton");

  if (searchButton) {
    searchButton.addEventListener("click", function (e) {
      e.preventDefault();

      let searchValue = searchInput.value.toLowerCase().trim();

      let products = [
        { name: "Brown Shoes", price: "$30.00", image: "img/shoes/5.jpg" },
        { name: "Red Sportswear", price: "$40.00", image: "img/shoes/5.jpg" },
        { name: "Grey Watch", price: "$60.00", image: "img/watches/2.jpg" },
        { name: "Black Watch", price: "$100.00", image: "img/watches/1.jpg" },
        { name: "Black T-shirt", price: "$75.00", image: "img/clothes/3.jpg" },
        { name: "Strips Shirt", price: "$84.00", image: "img/clothes/1.jpg" },
      ];

      let foundProduct = products.find((product) =>
        product.name.toLowerCase().includes(searchValue),
      );

      if (foundProduct) {
        localStorage.setItem("selectedProduct", JSON.stringify(foundProduct));

        window.location.href = "productopen.html";
      } else {
        alert("Product not found");
      }
    });
  }
});

if ((til, pricebtw, hrs, headingcart, noticart, cartbut)) {
  if (count == 0) {
    til.classList.add("d-none");
    pricebtw.classList.add("d-none");
    headingcart.style.paddingBottom = "3%";
    hrs.classList.add("d-none");
    cartotals.classList.add("d-none");
  } else {
    til.classList.remove("d-none");
    pricebtw.classList.remove("d-none");
    headingcart.style.paddingBottom = "10%";
    noticart.classList.add("d-none");
    cartbut.classList.add("d-none");
  }
}
search.addEventListener("click", () => {
  opy("search.html");
});

person.addEventListener("click", () => {
  opy("login.html");
});

function attachEvents() {
  // DELETE
  document.querySelectorAll(".bi-trash3-fill").forEach((btn, i) => {
    btn.onclick = function () {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.splice(i, 1);

      localStorage.setItem("cart", JSON.stringify(cart));

      displaycart();
      attachEvents();
      let count = Number(localStorage.getItem("total")) - 1;

      if (butt) {
        butt.innerText = count;
      }
      localStorage.setItem("total", count);
    };
  });

  document.querySelectorAll(".incre").forEach((bt) => {
    bt.addEventListener("click", (e) => {
      let count = 1;
      e.target.nextElementSibling.innerText =
        parseInt(e.target.nextElementSibling.innerText) + parseInt(count);

      count++;

      let subtotal = e.target.parentElement.parentElement.children[1].innerText;
      let mainprice =
        e.target.parentElement.parentElement.previousElementSibling.children[1]
          .childNodes[3].innerText;

      let total =
        parseInt(subtotal.replace("$", "")) +
        parseInt(mainprice.replace("$", ""));
      e.target.parentElement.parentElement.children[1].innerText = `$${total}.00`;
    });
  });
  document.querySelectorAll(".decre").forEach((bt) => {
    bt.addEventListener("click", (e) => {
      let cent = document.querySelectorAll(".centertext");

      if (e.target.previousElementSibling.innerText == 1) {
        e.target.previousElementSibling.innerText = 1;
      } else {
        e.target.previousElementSibling.innerText--;
      }

      let subtotal = e.target.parentElement.parentElement.children[1].innerText;
      let mainprice =
        e.target.parentElement.parentElement.previousElementSibling.children[1]
          .childNodes[3].innerText;

      let total = subtotal.replace("$", "") - mainprice.replace("$", "");
      let cr = total.toString();

      if (total == 0) {
        e.target.parentElement.parentElement.children[1].innerText;
      } else {
        e.target.parentElement.parentElement.children[1].innerText = `$${cr}.00`;
      }
    });
  });
}

gettotal.addEventListener("click", (e) => {
  e.preventDefault();

  let Result = [];

  let subtot = document.querySelectorAll(".subtotal");
  subtot.forEach((e) => {
    let t = Number(e.innerText.replace("$", ""));

    Result.push(t);
  });

  let sum = Result.reduce((a, b) => a + b, 0);

  e.target.parentElement.parentElement.children[1].children[1].innerText = `$${sum}.00`;
  e.target.parentElement.parentElement.children[3].children[1].innerText = `$${sum}.00`;
});
