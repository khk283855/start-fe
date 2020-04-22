// 솔직히 잘 못합니다... 그래도 문제 조건에서 벗어나지 않도록 열심히 해봤습니다!

// 문제1
var div1 = document.getElementById("red");
var box1 = document.getElementById("box1");

div1.addEventListener('click', function(){
    document.getElementById("box1").classList.add("red");
})

// 문제2
var div2 = document.getElementById("add");
var box2 = document.createElement("div");

div2.addEventListener('click', function(){
    document.getElementById("box1").appendChild(box2);
    if(box1.className === "box"){
        box2.className = "box";
        box2.id = "box1";
    }else{
        box2.className = "box red";
        box2.id = "box1";
    }
})

// 문제3
var div3 = document.getElementById("delete");

div3.addEventListener('click', function(){
    document.getElementById("box1").removeChild(box2);
})

// 문제4
var div4 = document.getElementById("text");

div4.addEventListener('click', function(){
    document.getElementById("box1").innerHTML="hello";
})

// 문제5
var div5 = document.getElementById("reset");

div5.addEventListener('click', function(){
    document.body.removeChild(document.getElementById("box1"));
})

// 문제6
var div6 = document.getElementById("toggle");
var count = 0;

div6.addEventListener('click', function(){
      count++;
      switch(count){
          case 1:
              document.getElementById("box1").style.display="none";
              break;
          case 2:
              document.getElementById("box1").style.display="block";
              break;
          default:
              alert(count+'번');
      }
})

// 문제7
var div7 = document.getElementById("image");

div7.addEventListener('click', function(){
    if(document.getElementById("box1").style.display="block"){
        document.getElementById("img").style.display="block";
    } else {
        document.getElementById("img").style.display="none";
    }
})