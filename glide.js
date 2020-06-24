// // Glide code

const carousels = document.querySelectorAll(".glide");

Object.values(carousels).map((carousel) => {
  const slider = new Glide(carousel, {
    type: "carousel",
    perView: 4,
    animationDuration: 1000,
    gap: 10,
    breakpoints: {
      1400: {
        perView: 3,
      },
      900: {
        perView: 2,
      },
      600: {
        perView: 1,
      },
    },
  });
  slider.mount();
});

glide.update({ startAt: 0 });
const config = {
  type: "carousel",
  perView: 4,
  animationDuration: 1000,
  gap: 10,
  breakpoints: {
    1400: {
      perView: 3,
    },
    900: {
      perView: 2,
    },
    600: {
      perView: 1,
    },
  },

  startAt: 0,
};

new Glide(".glide", config).mount();
