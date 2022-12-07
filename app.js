const btn = document.querySelector(".btn"),
  nav = document.querySelector("ul");

btn.addEventListener("click", function () {
  nav.classList.toggle("active");
  const isOpened = btn.getAttribute("aria-expanded");
  if (isOpened === "false") {
    btn.setAttribute("aria-expanded", "true");
  } else {
    btn.setAttribute("aria-expanded", "false");
  }
});
