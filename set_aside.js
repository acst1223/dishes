function setAsidePosition() {
  let screenHeight = innerHeight;
  let navBar = document.querySelector("nav");
  let navBarHeight = navBar.clientHeight;

  let aside = document.querySelector("aside");
  aside.style.top = `${navBarHeight}px`;
  aside.style.height = `${screenHeight - navBarHeight}px`;
}
setAsidePosition();

addEventListener("resize", () => {
  setAsidePosition();
});
