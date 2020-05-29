// Selector functions
const get = (element) => document.querySelector(element);
const getAll = (element) => document.querySelectorAll(element);

//resize square
window.addEventListener("resize", (e) => {
  let screenWidth = get(".screen-width");
  screenWidth.innerText = window.innerWidth;
});

//GSAP
const tl = gsap.timeline();

//change navigation
const burger = get(".burger");
const navbar = get(".nav-bar");
const line1 = get(".line1");
const line2 = get(".line2");

burger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  line1.classList.toggle("active");
  line2.classList.toggle("active");
  burger.classList.toggle("fixed");
});

//experimenting with dropdown hover

// const sub = get(".sub");
// const submenus = getAll(".submenu");
// sub.addEventListener("mouseover", (e) => {
//   submenus[0].style.display = "block";
//   e.preventDefault();
// });
// sub.addEventListener("mouseleave", (e) => {
//   submenus[0].style.display = "none";
// });

//experimnting with clicking on nav

// //Drop down nav  for about
// const about = get(".about");
// const submenu1 = get(".submenu");
// const triangle1 = get(".triangle1");
// about.addEventListener("click", (e) => {
//   e.preventDefault();
//   submenu1.classList.toggle("active");
//   triangle1.classList.toggle("flipped");
// });

// //Drop down nav  for research
// const research = get(".research");
// const submenu2 = get(".submenu");
// const triangle2 = get(".triangle2");
// research.addEventListener("click", (e) => {
//   e.preventDefault();
//   submenu2.classList.toggle("active");
//   triangle2.classList.toggle("flipped");
// });

//Use data is click?
