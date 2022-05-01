const list = document.querySelector(".list2");
const burger = document.querySelector(".burg");
const close = document.querySelector(".close");

burger.addEventListener("click", () => {
  list.style.display = "flex";
  burger.classList.remove("burg");
});
close.addEventListener("click", () => {
  list.style.display = "none";
  burger.classList.add("burg");
});
