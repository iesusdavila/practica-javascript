const desktop_menu = document.querySelector(".desktop-menu");
const navbar_email = document.querySelector(".navbar-email");

navbar_email.addEventListener("click", () =>
  desktop_menu.classList.toggle("inactive")
);
