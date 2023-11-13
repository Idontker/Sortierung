// Function to check if a draggable element is within the place
function isElementInsidePlace(element, placeElement) {
  var elementRect = element.getBoundingClientRect();
  var placeRect = placeElement.getBoundingClientRect();

  var error = 15;
  return (
    elementRect.top >= placeRect.top - error &&
    elementRect.bottom <= placeRect.bottom + error &&
    elementRect.left >= placeRect.left - error &&
    elementRect.right <= placeRect.right + error
  );
}

function elementsInsidePlace(place) {
  let dragElements = document.getElementsByClassName("dragable");
  dragElements = Array.from(dragElements);
  ret = [];
  dragElements.forEach((ele) => {
    if (isElementInsidePlace(ele, place)) {
      ret.push(ele);
    }
  });
  return ret;
}

function update_places() {
  let dragElements = document.getElementsByClassName("dragable");
  let places = document.getElementsByClassName("place");

  let reset_border = [];
  for (let i = 0; i < Array.from(dragElements).length; i++) {
    reset_border.push(i);
  }

  Array.from(places).forEach((place) => {
    let i = 0;
    for (let j = 0; j < Array.from(dragElements).length; j++) {
      element = dragElements[j];
      if (isElementInsidePlace(element, place)) {
        element.style.border = "3px solid yellow";

        // remove j from resetting
        let indexToRemove = reset_border.indexOf(j);
        // Check if 5 is in the array before attempting to remove it
        if (indexToRemove !== -1) {
          // Remove 1 element at the found index
          reset_border.splice(indexToRemove, 1);
        }

        i++;
      }
    }
    if (i == 0) {
      antwort = document.getElementById("antwort");
      antwort.innerText = "-";
      place.style.backgroundColor = "transparent"; // Set background color to none
    } else if (i == 1) {
      place.style.backgroundColor = "lightgreen"; // Set lighter shade of green
    } else {
      place.style.backgroundColor = "lightcoral"; // Set lighter shade of red
    }
  });

  //   reset border of items

  reset_border.forEach((i) => {
    element = dragElements[i];
    element.style.border = "1px solid black";
  });
}
