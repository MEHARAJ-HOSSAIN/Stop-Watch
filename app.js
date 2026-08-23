const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

let second=0;
let minute=0;
let hours=0;
let timer=0;
let clickTime=0;
let runningTime=0;
let time=false;

function start(){
    if(time==false){
    clickTime=Date.now()-runningTime;
    timer=setInterval(update,1000);
    time=true;
    }
}
function reset(){
        clearInterval(timer);
        clickTime=0;
        runningTime=0;
        hour.innerHTML="00";
        min.innerHTML="00";
        sec.innerHTML="00";
        time=false;
}
function pause(){
    if(time==true){
        clearInterval(timer);
        time=false;
    }
}
function update(){
    runningTime=Date.now()-clickTime;
    hours=String(Math.floor(runningTime/(1000*3600))).padStart(2,"0");
    minute=String(Math.floor((runningTime/(1000*60))%60)).padStart(2,"0");
    second=String(Math.floor((runningTime/(1000))%60)).padStart(2,"0");
    hour.innerHTML=`${hours}`;
    min.innerHTML=`${minute}`;
    sec.innerHTML=`${second}`;
}
