const colors = [
  "blue",
  "red",
  "cyan",
  "orange",
  "#ff0080",
  "#00ff00",
  "#9900e0",
  "#ff7b00",
  "",
];

let position = 0;

function changeBackground() {
  document.getElementById("card").style.borderColor = colors[position];

  if (position < colors.length - 1) {
    position = position + 1;
  } else {
    position = 0;
  }
}
