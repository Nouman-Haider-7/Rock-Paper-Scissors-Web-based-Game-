let userScore=0;
let compScore=0;

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

let choices=document.querySelectorAll(".choice");

const GencompChoice=()=>{
    let options=["rock", "paper", "siccors"];
    let randomNum=Math.floor(Math.random()*3);
    return options[randomNum];
}

const drawGame=()=>{
   msg.innerText = "🤝 Game Draw! Try again!";
}

showWinner=(userWin)=>{
    if(userWin===true){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText = "🎉 You won! Great job! 🏆";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText = "👾 Defeated by the machine! 🤖";
    }
}

const playGame=(userChoice)=>{
    // user choice
    // computer choice
    let compChoice= GencompChoice();

    if(userChoice===compChoice)
    {
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = (compChoice==="paper")? false:true;
        }else if(userChoice==="paper"){
            userWin = (compChoice==="scissors")? false:true;
        }else{
             userWin = (compChoice==="rock")? false:true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});