const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
const carouselImage = document.querySelectorAll(".carousel__image");

let activeIndex;

carouselImage.forEach((element, index) => {
  if (element.classList.contains("active")) {
    activeIndex = index;
  }
  element.addEventListener("mousedown", (e) => e.preventDefault());
});

const carouselMove = (button) => {
  carouselImage.forEach((item) => {
    item.classList.remove("active");
  });
  if (button === btnNext) {
    activeIndex = activeIndex >= carouselImage.length - 1 ? 0 : ++activeIndex;
  } else {
    activeIndex = activeIndex <= 0 ? carouselImage.length - 1 : --activeIndex;
  }
  carouselImage[activeIndex].classList.add("active");
};

btnNext.addEventListener("click", () => carouselMove(btnNext));
btnPrev.addEventListener("click", () => carouselMove(btnPrev));
addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") carouselMove(btnNext);
  else if (e.key === "ArrowLeft" || e.key === "ArrowUp") carouselMove(btnPrev);
});
let interval = setInterval(() => carouselMove(btnNext), 2000);
addEventListener("mouseover", () => clearInterval(interval));
addEventListener(
  "mouseout",
  () => (interval = setInterval(() => carouselMove(btnNext), 2000))
);
