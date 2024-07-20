function rollDice() {
  const numOfDice = document.getElementById("numberofdice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for (i = 0; i < numOfDice; i++) {
    let result = Math.floor(Math.random() * 6) + 1;
    values.push(result);
    images.push(`<img src="images/dice${result}.jpeg">`);
  }

  diceResult.textContent = `dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join("");
}
