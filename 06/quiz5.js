function dragElement(element){
   var drag1 = 0, drag2 = 0, drag3 = 0, drag4 = 0;
   element.onmousedown = dragMouseDown;
   function dragMouseDown(e){
      e = e || window.event;
      e.preventDefault();
      drag3 = e.clientX;
      drag4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
   }
   function elementDrag(e){
      e = e || window.event;
      e.preventDefault();
      drag1 = drag3 - e.clientX;
      drag2 = drag4 - e.clientY;
      drag3 = e.clientX;
      drag4 = e.clientY;
      element.style.top = (element.offsetTop - drag2) + "px";
      element.style.left = (element.offsetLeft - drag1) + "px";
   }
   function closeDragElement(){
      document.onmouseup = null;
      document.onmousemove = null;
   }
}
dragElement(document.getElementById("box1"));
dragElement(document.getElementById("box2"));

// 참조한 사이트:  https://www.w3schools.com/howto/howto_js_draggable.asp 

