var timer = 3;
var score = 0;
var hitRn = 0;


function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
    hitRn=  Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitRn;
}

function makeBubble() {
    var clutter = "";

for (var i = 1; i <= 154; i++)
{
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
   var timerint= setInterval(function () {
       if (timer>0) {
        timer--;
       }
       else {
           clearInterval(timerint);
           document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
       }
      
        document.querySelector("#timerVal").textContent = timer;
    }, 1000);
}

document.querySelector("#pbtm")
    .addEventListener("click", function (dets) {
        var clickNum = Number(dets.target.textContent);
        if (clickNum === hitRn)
        {
            increaseScore();
            makeBubble();
            getNewHit();
            }
        
})


runTimer();
makeBubble();
getNewHit();
//increaseScore();
