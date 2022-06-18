const toggle = document.querySelector('input[type="checkbox"]');
const card1 = document.querySelector(".card__1");
const card2 = document.querySelector(".card__2");
const card3 = document.querySelector(".card__3");
const card = card1.querySelector(".price__header");
//check for change Event
toggle.addEventListener("change", function (e) {
  if (!e.target.checked) {
    priceMonth(false);
    localStorage.setItem("pricing", false);
  } else {
    priceMonth(true);
    localStorage.setItem("pricing", true);
  }
});
//check for monthly and weekly price
const priceMonth = function (price) {
  card1.querySelector(".price__header").textContent = `$ ${
    price ? 19.99 : 199.99
  }`;
  card2.querySelector(".price__header").textContent = `$ ${
    price ? 24.99 : 249.99
  }`;
  card3.querySelector(".price__header").textContent = `$ ${
    price ? 39.99 : 399.99
  }`;
};
// check if subscription is monthly or annually before closing browser
const price = localStorage.getItem("pricing");
if (price == 'false') {
  priceMonth(false);
  toggle.checked = false;
} else {
  priceMonth(true);
  toggle.checked = true;
}

//check previous selection
