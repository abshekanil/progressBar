const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const stepEle = document.querySelectorAll(".step");
let currentIdx = 1;
const progressElement = document.querySelector(".progress-bar-front");

nextBtn.addEventListener("click", function () {
  currentIdx++;

  if (currentIdx > stepEle.length) {
    currentIdx = stepEle.length;
  }
  updateStepProgress();
});

prevBtn.addEventListener("click", function () {
  currentIdx--;

  if (currentIdx < 1) {
    currentIdx = 1;
  }
  updateStepProgress();
});

function updateStepProgress() {
  stepEle.forEach((stepEle, idx) => {
    if (idx < currentIdx) {
      stepEle.classList.add("checked");
      stepEle.innerHTML = `
            <i class="fa-solid fa-check"></i>
            <small>${
              idx === 4 ? "Final" : idx === 0 ? "Start" : "Step " + idx
            }</small>
            `;
    } else {
      stepEle.classList.remove("checked");
      stepEle.innerHTML = `
        <i class="fa-solid fa-xmark"></i>
        `;
    }
  });

  const checkedNumber = document.querySelectorAll(".checked");

  progressElement.style.width =
    ((checkedNumber.length - 1) / (stepEle.length - 1)) * 100 + "%";

  if (currentIdx === 1) {
    prevBtn.disabled = true;
  } else if (currentIdx === stepEle.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
