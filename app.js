let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["red","skyblue","yellow","purple"];
let body = document.querySelector("body");
let h2n = document.querySelector(".hs");
let highScore = [];

document.addEventListener("keypress",function(){
    if(started === false){
        started = true;

        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },350);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },350);
}

function gameOverFlash(btn){
    btn.classList.add("gameOver");
    setTimeout(()=>{
        btn.classList.remove("gameOver");
    },250);

}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    highScore.push(level);
    let high = Math.max(...highScore);
    h2n.innerText = `Highest score is ${high}`;
    let randIdx = Math.floor(Math.random()*4);
    let randCol = btns[randIdx];
    gameSeq.push(randCol);
    let randBtn = document.querySelector(`.${randCol}`);
    gameFlash(randBtn);
}

function check(idx){
   
   if(gameSeq[idx]===userSeq[idx]){
     if(gameSeq.length == userSeq.length){
        setTimeout(levelUp,1000);
     }
   } else {
    h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> press any key.`;
    reset();
    gameOverFlash(body);
   }    
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
   
    check(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

// let arr = [1,2,5,10];
// console.log(Math.max(...arr));
