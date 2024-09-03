let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let you=document.querySelector("#you");
let comp=document.querySelector("#comp");

const genCompChoice=()=>{
    let arr=["rock","paper","scissor"];
    let choice=Math.floor(Math.random()*3);
    return arr[choice];
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    let userid=choice.getAttribute("id");
    playGame(userid);
    })
})
function playGame(userid){
    let compChoice=genCompChoice();
    let userWin=true;
    if(compChoice === userid){
        drawGame();
    }else{
        if(userid=="rock"){
         //paper scissor
         userWin=compChoice=="paper"?false:true;
        }else if(userid=="paper"){
            //rock scissor
        userWin=compChoice=="scissor"?false:true;
        }else{
            //rock paper
        userWin=compChoice=="rock"?false:true;
        }
        showResults(userWin,userid,compChoice);
    }
   
}
function drawGame(){
    msg.innerText="game draw ,Try Again!"
    msg.style.backgroundColor="#081b31";
}
function showResults(userWin,userid,compChoice){
    if(userWin){
     //user won
     userScore++;
     you.innerText=userScore;
     msg.innerText=`you ${userid} beats ${compChoice}`;
     msg.style.backgroundColor="green";
    }else{
     //computer won
     compScore++;
     comp.innerText=compScore;
     msg.innerText=`${compChoice} beats your ${userid}`;
     msg.style.backgroundColor="red";
    }
}
