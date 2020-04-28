var btn = document.getElementById("btn");
var result = document.getElementById("result");

// 그냥 input을 숫자만 입력가능하도록 만들었습니다...

btn.addEventListener('click', function(){
    
    var msg = document.getElementById("num");
    var resultstring = "<p>";
    for(var i = (msg.value)/10*10; i < (msg.value)/10*10+1; i++){
        for(var j = 1; j < 10; j++){
            resultstring += i + " X " + j + " = " + i*j + "<br>";
            resultstring += "</p>";
            result.innerHTML=resultstring;
        }
    }
})