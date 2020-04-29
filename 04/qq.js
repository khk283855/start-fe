function colorNormal(x, y, color) {
    var chessBoard = document.getElementById("board");
    for (var i = 0; i < x; i++) {
        var row = chessBoard.appendChild(document.createElement("div"));
        for (var j = 0; j < y; j++) {
            var span = document.createElement('span');
            if(i & 1){
                if(j & 1){
                } else {
                    span.style.backgroundColor = color;
                }
            } else {
                if(j & 1){
                    span.style.backgroundColor = color;        
                }
            }
            row.appendChild(span);
        }
    }
        span.addEventListener('click', function(){
            span.style.backgroundColor = "red";
        span.addEventListener('click', function(){
            span.style.backgroundColor = null;
        })
    })

        
    
    
}
colorNormal(4, 4, 'white');





// https://jsfiddle.net/vqczbh3x/ 의 코드를 참조했습니다..