const getStarsBtn = document.getElementById("get-stars-btn");
const refreshBtn = document.getElementById("refresh-btn");
const msg = document.getElementById("msg-container");

getStarsBtn.addEventListener("click", getRandomStarRating);
refreshBtn.addEventListener("click", refreshAll);

function getRandomStarRating() {
  getStarsBtn.disabled = true;
  const randomInputValue = Math.floor(Math.random() * 10) + 1;
  const inputElement = document.querySelector(
    `input[value="${randomInputValue}"]`
  );
  inputElement.checked = true;
  msg.innerHTML = `${randomInputValue / 2} stars tournament. Good Luck!`;
}

function refreshAll() {
  msg.innerHTML = "";

  const radioButtons = document.querySelectorAll("input[type=radio]");
  radioButtons.forEach((button) => {
    button.checked = false;
  });

  document.getElementById("stars-overlay").style.display = "none";

  const getStarsBtn = document.getElementById("get-stars-btn");
  getStarsBtn.disabled = false;
}
