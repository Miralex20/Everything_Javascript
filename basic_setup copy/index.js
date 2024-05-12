const mybox = document.getElementById("mybox");
const moveAmount = 10;

let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  mybox.textContent = "😒";
  mybox.style.backgroundColor = "pink";
});

document.addEventListener("keyup", (event) => {
  mybox.textContent = "😊";
  mybox.style.backgroundColor = "aquamarine";

  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }
    mybox.style.top = `${y}px`;
    mybox.style.left = `${x}px`;
  }
});
