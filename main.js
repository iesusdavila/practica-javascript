const desktop_menu = document.querySelector(".desktop-menu");
const navbar_email = document.querySelector(".navbar-email");
const mobile_menu = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");
const product_detail = document.querySelector(".product-detail");
const navbar_shopping_cart = document.querySelector(".navbar-shopping-cart");
const cards_container = document.querySelector(".cards-container");
const listaProductos = [];

listaProductos.push({
  nombre: "Bicicleta",
  precio: 120,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
listaProductos.push({
  nombre: "Computadora",
  precio: 800,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
listaProductos.push({
  nombre: "Celular",
  precio: 750,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
listaProductos.push({
  nombre: "Bicicleta",
  precio: 120,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
listaProductos.push({
  nombre: "Computadora",
  precio: 800,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
listaProductos.push({
  nombre: "Celular",
  precio: 750,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

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

listaProductos.forEach((producto) => {
  const product_card = document.createElement("div");
  product_card.classList.add("product-card");

  const img = document.createElement("img");
  img.setAttribute("src", producto.imagen);

  const product_info = document.createElement("div");
  product_info.classList.add("product-info");

  const precio_nombre = document.createElement("div");
  const precio = document.createElement("p");
  precio.innerText = "$" + producto.precio;
  const nombre = document.createElement("p");
  nombre.innerText = producto.nombre;
  precio_nombre.appendChild(nombre);
  precio_nombre.appendChild(precio);

  const figura = document.createElement("figure");
  const imagen = document.createElement("img");
  imagen.setAttribute("src", "./icons/bt_add_to_cart.svg");
  figura.appendChild(imagen);

  product_info.appendChild(precio_nombre);
  product_info.appendChild(figura);

  product_card.appendChild(img);
  product_card.appendChild(product_info);

  cards_container.appendChild(product_card);
});
