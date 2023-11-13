finalButton = document.getElementById("final-test");
finalText = document.getElementById("final-test-text");

finalButton.addEventListener("click", function () {
  finals = Array.from(document.getElementsByClassName("final"));
  failed = false;
  final_items = [];
  finals.forEach((final) => {
    temp = elementsInsidePlace(final);
    if (temp.length > 1) {
      finalText.innerText = "Zu viele Elemente in " + final.innerText;
      failed = true;
    } else if (temp.length == 0) {
      finalText.innerText = "Kein Element in " + final.innerText;
      failed = true;
    } else {
      final_items.push(temp[0].getAttribute("data-value"));
    }
  });
  if (failed) {
    return;
  }
  for (let i = 0; i < final_items.length - 1; i++) {
    if (final_items[i] > final_items[i + 1]) {
      increment();

      finalText.innerText =
        "Fehler: Das Element in " +
        finals[i].innerText +
        " ist größer als das Element in " +
        finals[i + 1].innerText;
      finals[i].style.background = "red";
      finals[i + 1].style.background = "red";
      i = i + 2;
      for (; i < final_items.length; i++) {
        finals[i].style.background = "transparent";
      }
      return;
    } else {
      finals[i].style.background = "green";
    }
  }
  finals[final_items.length - 1].style.background = "green";
  finalText.innerText = "Richtig! Glückwunsch :)";
  richtig();
});
