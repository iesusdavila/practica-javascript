const desktop_menu = document.querySelector(".desktop-menu");
const navbar_email = document.querySelector(".navbar-email");
const mobile_menu = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");
const product_detail = document.querySelector(".product-detail");
const navbar_shopping_cart = document.querySelector(".navbar-shopping-cart");

navbar_email.addEventListener("click", () => {
  if (!product_detail.classList.contains("inactive")) {
    product_detail.classList.add("inactive");
  }
  desktop_menu.classList.toggle("inactive");
});

menu.addEventListener("click", () => {
  if (!product_detail.classList.contains("inactive")) {
    product_detail.classList.add("inactive");
  }
  mobile_menu.classList.toggle("inactive");
});

navbar_shopping_cart.addEventListener("click", () => {
  if (!desktop_menu.classList.contains("inactive")) {
    desktop_menu.classList.add("inactive");
  }
  if (!mobile_menu.classList.contains("inactive")) {
    mobile_menu.classList.add("inactive");
  }
  product_detail.classList.toggle("inactive");
});
