let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("reset-btr");

let turn =//playerX , playerO

const winPatterns = {
       [0,1,2],
       [0,3,6],
       [0,4,8],
       [1,4,7],
       [2,5,8],
       [2,4,6],
       [3,4,5],
       [6,7,8],
};

boxes.forEach(box) => {
 box.addEventlistener("click" ,() => {
    console.log("box was clicked");
    if (turnO) { 
         //playerO
        box.innerText = "o";
        turno = false;
    } else {  
        //playerx
        box.innerText = "x"
        trueO = true;
    
    }
 });
};