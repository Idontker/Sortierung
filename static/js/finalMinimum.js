finalButton = document.getElementById("final-test");
finalText = document.getElementById("final-test-text");

finalButton.addEventListener("click", function () {
  final = document.getElementById("final-minimum");
  elements = document.getElementsByClassName("dragable");
  values = [];
  Array.from(elements).forEach((ele) => {
    values.push(ele.getAttribute("data-value"));
  });

  temp = elementsInsidePlace(final);
  if (temp.length > 1) {
    finalText.innerText = "Zu viele Elemente in " + final.innerText;
    return;
  } else if (temp.length == 0) {
    finalText.innerText = "Kein Element in " + final.innerText;
    return;
  }

  selected = temp[0].getAttribute("data-value");

  let min = values[0];
  values.forEach((value) => {
    if (min > value) {
      min = value;
    }
  });

  if (selected == min) {
    finalText.innerText = "Richtig! Glückwunsch :)";
    richtig();
    final.style.background = "green";
  } else {
    finalText.innerText = "Leider flasch.";
    final.style.background = "red";
  }
});
