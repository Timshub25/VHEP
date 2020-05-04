// // Glide code
const config = {
  type: "carousel",
  perView: 3,
  animationDuration: 1000,
  breakpoints: {
    1024: {
      perView: 3,
    },
    900: {
      perView: 2,
    },
    600: {
      perView: 1,
    },
  },
};
new Glide(".glide", config).mount();
