function addDragNdrop(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    let top = elmnt.offsetTop - pos2;
    let left = elmnt.offsetLeft - pos1;
    // set the element's new position:
    elmnt.style.top = top + "px";
    elmnt.style.left = left + "px";
  }

  function closeDragElement() {
    let top = elmnt.offsetTop;
    let left = elmnt.offsetLeft;
    top = Math.max(0, top);
    left = Math.max(0, left);
    top = Math.min(CANVAS_HEIGHT - ELEMENT_HEIGHT, top);
    left = Math.min(CANVAS_WIDTH - ELEMENT_WIDTH, left);
    elmnt.style.top = top + "px";
    elmnt.style.left = left + "px";
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    updateAll();
  }
}
