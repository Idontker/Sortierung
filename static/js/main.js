function richtig() {
  // Pass in the id of an element
  let confetti = new Confetti("verwirrt");

  // Edit given parameters
  confetti.setCount(75);
  confetti.setSize(1);
  confetti.setPower(25);
  confetti.setFade(false);
  confetti.destroyTarget(true);
}
document.getElementById("verwirrt").addEventListener("click", function () {
  console.log("done");
  richtig();
});

CANVAS_HEIGHT = 400;
CANVAS_WIDTH = 700;
ELEMENT_HEIGHT = 50;
ELEMENT_WIDTH = 50;

var canvas = document.getElementById("canvas");

// Set the width and height attributes
canvas.style.width = CANVAS_WIDTH + "px"; // Set the width
canvas.style.height = CANVAS_HEIGHT + "px"; // Set the height

let dragElements = document.getElementsByClassName("dragable");

//Make the DIV element draggagle:
Array.from(dragElements).forEach((element) => {
  element.style.width = ELEMENT_HEIGHT + "px"; // Set the width
  element.style.height = ELEMENT_WIDTH + "px"; // Set the height
  addDragNdrop(element);
});

let places = document.getElementsByClassName("place");
Array.from(places).forEach((element) => {
  element.style.width = ELEMENT_HEIGHT + 30 + "px"; // Set the width
  element.style.height = ELEMENT_WIDTH + 30 + "px"; // Set the height
});

function updateAll() {
  update_places();
}
