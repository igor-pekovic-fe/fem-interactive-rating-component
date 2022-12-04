const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thankyou-card");
const submitBtn = document.querySelector(".rating-card__submit-btn");
const ratingCount = document.querySelector(".count");
const btnAll = document.querySelectorAll(".rating-card__button");
const ratingBtnsContainer = document.querySelector(".rating-card__buttons");

ratingBtnsContainer.addEventListener("click", function (e) {
  // Reset active button class on each click to avoid multiple active buttons
  btnAll.forEach((btn) => btn.classList.remove("active-btn"));
  // Select buttons in the button container
  const selectedBtn = e.target.closest(".rating-card__button");
  // Guard clause if clicking outside of button element
  if (!selectedBtn) return;
  // If a button is selected, toggle active class and activate Submit button
  selectedBtn.classList.add("active-btn");
  ratingCount.textContent = selectedBtn.textContent;
  submitBtn.addEventListener("click", function () {
    ratingCard.classList.add("hidden");
    thankYouCard.classList.remove("hidden");
  });
});
