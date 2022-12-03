const ratingCard = document.getElementById("rating-card");
const thankYouCard = document.getElementById("thankyou-card");
const submitBtn = document.getElementById("submit-btn");
const count = document.querySelector(".count");
const btns = document.querySelectorAll(".rating-card__button");
const ratingBtnsContainer = document.querySelector(".rating-card__buttons");

count.textContent = 0;

ratingBtnsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".rating-card__button");
  if (!clicked) return;
  btns.forEach((t) => t.classList.remove("active-btn"));
  clicked.classList.add("active-btn");
  count.textContent = clicked.textContent;
});

submitBtn.addEventListener("click", function () {
  ratingCard.classList.add("hidden");
  thankYouCard.classList.remove("hidden");
});

const newFeature = function () {
  console.log("Welcome to the application!");
};

newFeature();
