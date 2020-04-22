function init(){

   var box = document.getElementById('box');

   box.addEventListener('mousedown', mouseDown);
   box.addEventListener('mousemove', mouseMove);
   box.addEventListener('mouseup', mouseUp);
}

var isClick = false; 

function mouseDown(e){

   isClick = true;
}

function mouseMove(e){

   if( isClick == true ){

     box.style.left = e.clientX - 30 + 'px';
     box.style.top = e.clientY - 30 + 'px';
   }
}

function mouseUp(e){

   isClick = false;
}