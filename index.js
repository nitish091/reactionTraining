const row = 8;
const col = 8;
const total = row*col;

var time = null;

function setup(){
    const main = document.getElementById("main");
    
    for(var i = 0; i < row; i++){
        for(var  j = 0; j < col; j++){
            var div = document.createElement("div");
            div.setAttribute("class", "cell inactive");
            cellContainer.appendChild(div);
        }
        var br = document.createElement("br");
        cellContainer.appendChild(br);
    }
}
function lightUp(){
    var cells = document.getElementsByClassName("cell inactive");
    var s = Math.floor(Math.random()*(cells.length));
    console.log(cells);
    cells[s].setAttribute("class", "cell active");
    time = Date.now();
    // console.log(cells[s].classList)
}
// function lightOff(element){
//     if(1){
//         time = Date.now() - time;
//         console.log(time+"ms");
//         // element.removeEventListener("click", lightOff(element));
//         element.setAttribute("class","cell inactive");
//         lightUp();
//     }
// }

function showRes(){
    
}


var timerMM = 2;
var timerSS = 00;

timer.innerText = timerMM + ":" + timerSS;
// timer.style.display="block";
// timer.style.alignContent = "center";
// main.appendChild(timer);
// var br = document.createElement("br");
// main.appendChild(br);
setup();

A = document.getElementsByClassName("cell")
for(let element of A){
    element.addEventListener("click", ()=>{
        curr = Date.now();
        if(element.classList.contains("active")){
            time = curr - time;
            console.log(time+"ms");
            // element.removeEventListener("click", lightOff(element));
            element.setAttribute("class","cell inactive");
            console.log("jabba");
            lightUp();
        }
    });
}


var timerInterval = setInterval(()=>{
    if(timerSS>0){
        timerSS--;
    }
    else if(timerMM>0){
        timerMM--;
        timerSS=59;
    }
    else{
        clearInterval(timerInterval);
    }
    timer.innerText = timerMM + ":" +timerSS;
},1000);

var stopperInterval = setInterval(()=>{
    if(timerSS == timerMM == 0){
        showRes();
        clearInterval(stopperInterval);
    }
},1000);
lightUp();


