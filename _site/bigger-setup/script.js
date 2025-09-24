document.addEventListener("click", function (event) {
  if (
    !event.target.closest(".menu-hamburger") &&
    !event.target.closest(".menu-close")
  ) {
    return;
  }

  document.body.classList.toggle("menu-open");
});
