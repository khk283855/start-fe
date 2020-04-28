var bug = document.getElementById("bug");
var box = document.getElementById("box");
var point = document.getElementById("point");
var life = document.getElementById("life");

function getRandomPosition(){
    var randomX = Math.floor(Math.random()*400)+1;
    var randomY = Math.floor(Math.random()*400)+1;
    return [randomX,randomY];
}

var count = 0;
bug.addEventListener('click', function(){
    var xy = getRandomPosition(bug);
    bug.style.top = xy[0] + 'px';
    bug.style.left = xy[1] + 'px';
    count++;
    if(count<100){
        document.getElementById("point").innerHTML=count;
    }
    count2++;
})

var count2 = 10;
box.addEventListener('click', function(){
    count2--;
    document.getElementById("life").innerHTML=count2;
    if(count2 < 1){
        alert("game over!");
    }
})
