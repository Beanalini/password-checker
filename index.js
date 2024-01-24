const progressRating = {
  red: "Should be longer",
  orange: "Pretty good",
  green: "Grrrreat!",
};

const { red, orange, green } = progressRating;

const createMessageEl = () => {
  const container = document.querySelector(".container");
  const message = document.createElement("p");
  message.setAttribute("id", "outcome");
  message.setAttribute("class", "outcome");
  container.appendChild(message);
};

const removeBarClass = () => {
  const progressBarEl = document.getElementById("checker");
  progressBarEl.classList.remove(progressBarEl.classList[0]);
};

const setStrengthOutcome = (passwordLength, barColour) => {
  const progressBarEl = document.getElementById("checker");
  const messageEl = document.getElementById("outcome");
  let barValue = 5 * +passwordLength;

  progressBarEl.value = barValue;
  progressBarEl.classList.add(`${barColour}-color`);
  messageEl.innerText = progressRating[`${barColour}`];
};

const checkPasswordStrength = () => {
  const passwordLength = document.getElementById("password").value.length;
  const currentMessageEl = document.getElementById("outcome");
  const barColour = barColourMatch(passwordLength);

  //create message <p> element if it does not exist  otherwise remove the progress bar colour class
  currentMessageEl ? removeBarClass() : createMessageEl();
  setStrengthOutcome(passwordLength, barColour);
};

const barColourMatch = (passwordLength) => {
  if (passwordLength < 8) {
    return "red";
  } else if (passwordLength >= 8 && passwordLength < 12) {
    return "orange";
  } else {
    return "green";
  }
};
