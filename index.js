const start = document.getElementById("start");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const lap = document.getElementById("lap");

let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");


minute.textContent = "00";
second.textContent = "00";

//                        Start                     //

start.addEventListener("click" , IntervalStartFn);

function IntervalStartFn(){
    setInterval( startFn , 1000 );
}
function startFn(){
    if(second.textContent < 58){
        second.textContent++;
        second.textContent = ("0"+ second.textContent).slice(-2);
        
    }
    else{
        second.textContent="00";
        minute.textContent++;
        minute.textContent = ("0" + minute.textContent).slice(-2);
    }
}

//                       Lap                       //

const laps = document.getElementById("laps");

lap.addEventListener("click", lapFn);

function lapFn(){
    lapRecorded = minute.textContent +":"+second.textContent ;
    
    const listElement = document.createElement("li");
    let listElementContent = document.createTextNode(lapRecorded);
    listElement.appendChild(listElementContent);
    listElement.classList.add("eachLap");
    
    laps.appendChild(listElement);
    
    console.log(lapRecorded);
}

//                        Stop                       //

stop.addEventListener("click" , stopFn );

function stopFn(){
    clearInterval( IntervalStartFn );
    console.log("stopped");
}

//                      Pause                       //