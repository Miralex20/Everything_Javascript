let buttons = document.querySelectorAll(".mybtns");
console.log(buttons);

buttons.forEach((btn) => {
  btn.addEventListener("mouseover", (event) => {
    btn.style.backgroundColor = "red";
  });
});

const newbtn = document.createElement("button");

newbtn.textContent = "button5";
newbtn.classList = "mybtns";

document.body.appendChild(newbtn);
