compare1 = document.getElementById("compare-place1");
compare2 = document.getElementById("compare-place2");
antwort = document.getElementById("antwort");
compareButton = document.getElementById("compare-button");

function vergleiche() {
  ele1 = elementsInsidePlace(compare1);
  ele2 = elementsInsidePlace(compare2);
  if (ele1.length > 1) {
    antwort.innerText = "Zu viele Elemente in [1]";
  } else if (ele1.length == 0) {
    antwort.innerText = "Kein Element in [1]";
  } else if (ele2.length > 1) {
    antwort.innerText = "Zu viele Elemente in [2]";
  } else if (ele2.length == 0) {
    antwort.innerText = "Kein Element in [2]";
  } else {
    val1 = ele1[0].getAttribute("data-value");
    val2 = ele2[0].getAttribute("data-value");
    label1 = ele1[0].getAttribute("data-name");
    label2 = ele2[0].getAttribute("data-name");

    if (val1 < val2) {
      antwort.innerText = `${label1} ist kleiner als das Elemnent in ${label2}.`;
      // antwort.innerText = "Die Elemente in [1] und [2] sind gleichwertig.";
    } else if (val1 == val2) {
      antwort.innerText = `${label1} und ${label2} sind gleichwertig.`;
      //   antwort.innerText = "Die Elemente in [1] und [2] sind gleichwertig.";
    } else {
      antwort.innerText = `${label1} ist größer als das Elemnent in ${label2}.`;
      //   antwort.innerText = "Element in [1] ist größer als das Elemnent in [2].";
    }
  }
}
compareButton.addEventListener("click", function () {
  vergleiche();
});
