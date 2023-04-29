const getStarsBtn = document.getElementById("get-stars-btn");
const refreshBtn = document.getElementById("refresh-btn");
const msg = document.getElementById("msg-container");

getStarsBtn.addEventListener("click", getRandomStarRating);
refreshBtn.addEventListener("click", refreshAll);

function getRandomStarRating() {
  getStarsBtn.style.display = "none";
  const randomInputValue = Math.floor(Math.random() * 10) + 1;
  const inputElement = document.querySelector(
    `input[value="${randomInputValue}"]`
  );
  inputElement.checked = true;
  msg.innerHTML = `${randomInputValue / 2} stars tournament. Good Luck!`;
  refreshBtn.style.display = "block";
}

function refreshAll() {
  msg.innerHTML = "";

  const radioButtons = document.querySelectorAll("input[type=radio]");
  radioButtons.forEach((button) => {
    button.checked = false;
  });

  const getStarsBtn = document.getElementById("get-stars-btn");
  refreshBtn.style.display = "none";
  getStarsBtn.style.display = "block";
}
