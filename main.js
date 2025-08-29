const icon = document.querySelector(".links");

const links = icon.querySelector("ul");

const secondSpan = icon.querySelector("span:nth-child(2)");

let isOpened = false;

const toggleMenu = (_) => {
  isOpened = !isOpened;
  links.classList.toggle("open");
  secondSpan.classList.toggle("full");
};

icon.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", (_) => {
  if (isOpened) {
    links.classList.remove("open");
    secondSpan.classList.toggle("full");
    isOpened = !isOpened;
  }
});
