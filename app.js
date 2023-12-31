let gameSeq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let max=0;

let started=false;
let level=0;
let h2=document.querySelector("h2");

let start=document.querySelector(".start");

start.addEventListener("click",function(){
    if(started==false)
    {
        started=true;
        levelUp();
    } 
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randind=Math.floor(Math.random()*3);
    let randcolor=btns[randind];
    let randcls=document.querySelector(`.${randcolor}`);
    // console.log(randind);
    // console.log(randcolor);
    // console.log(randcls);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameFlash(randcls);
}

function check(idx){
//    let idx=level-1;
   if(userseq[idx]===gameSeq[idx])
   {
       if(userseq.length==gameSeq.length)
       {
            setTimeout(levelUp(),1000);
       }
   }else{
      max=Math.max(level-1,max);
      h2.innerHTML=`Game over!Your score was <b>${level}</b><br>click me to start the game<br>Highest score is ${max}`;
      let bod=document.querySelector("body");
      bod.classList.add("danger");
      setTimeout(function(){
        bod.classList.remove("danger");
      },150);
      reset();
   }
}


function btnPress(){
    let btn=this;
    // console.log(btn);
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userseq);
    check(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn)
{
    btn.addEventListener("click",btnPress);
}


function reset()
{
    started=false;
    gameSeq=[];
    userseq=[];
    level=0;
}