const checkStrength = () => {
  console.log("hello");
  let message = "";
  let userInput = document.getElementById("password").value;
  const passwordLength = userInput.length;

  if (passwordLength < 8) {
    message = "Should be longer";
    setMessage(message, passwordLength);
  } else if (passwordLength >= 8 && passwordLength < 12) {
    message = "Pretty good";
    setMessage(message, passwordLength);
  } else {
    message = "Grrrreat!";
    setMessage(message, passwordLength);
  }

  console.log(userInput.length);
};

const setMessage = (message, passwordLength) => {
  //if p element exits and current text content is the same do nothing
  //if p element exists and message has changed update message
  //if doesn't exist create and set message
  let outcomeMessage = document.getElementById("outcome");
  let progressBar = document.getElementById("checker");
  console.log("1", progressBar.value);
  let progressBarRating = 5 * +passwordLength;
  console.log("2", progressBarRating);
  if (outcomeMessage) {
    progressBar.value = progressBarRating;
    if (outcomeMessage.innerText !== message) {
      outcomeMessage.innerText = message;
      progressBar.classList.add("red-color");
      console.log(progressBar.classList);

      //progressBar.setAttribute("value", progressBarRating);
      progressBar.value = progressBarRating;
      console.log("3", progressBarRating);
    }
  } else {
    const result = document.createElement("p");
    result.setAttribute("id", "outcome");
    result.setAttribute("class", "outcome");
    result.innerText = message;
    progressBar.value = progressBarRating;
    console.log(message);
    document.body.appendChild(result);
  }
};
