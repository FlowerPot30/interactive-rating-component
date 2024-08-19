"ีuse strict";

const rateButton = document.querySelectorAll(".button");
const subtmitButton = document.querySelector(".submit");
const mainSecion = document.querySelector(".main-section");
const thanksSection = document.querySelector(".thanks-section");
const selected = document.querySelector(".selected");

let ratePoint;

rateButton.forEach((rate, i) => {
  rate.addEventListener("click", function () {
    if (rate.classList.contains("active")) {
      rate.classList.remove("active");
    } else {
      rateButton.forEach((rate) => rate.classList.remove("active"));
      rate.classList.add("active");
      ratePoint = i + 1;
      console.log(ratePoint);
    }
  });
});

subtmitButton.addEventListener("click", function () {
  mainSecion.classList.add("hidden");
  thanksSection.style.display = "flex";
  selected.textContent = `You selected ${ratePoint} out of 5`;
});
