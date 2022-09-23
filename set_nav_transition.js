setTimeout(() => {
  let dropdowns = document.querySelectorAll("header nav ul li ul.dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.style.transition = "all 0.3s ease";
  });
}, 0);
