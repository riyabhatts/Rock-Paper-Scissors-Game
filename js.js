let userScore=0;
let comprScore=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg")

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


//getting computer choice
const genCompChoice=()=>{
    const options=["rock", "paper", "scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
};

const drawGame=()=>{
    msg.innerText="Game was draw! Play again.";
    msg.style.backgroundColor="#081b31"

}

const showWinner=(userWin,userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        comprScore++;
        compScorePara.innerText=comprScore;
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    // console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    // console.log("comp choice = ", compChoice);

    if(userChoice===compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            // paper, scissors
            userWin= compChoice==="paper"? false: true;
        }
        else if(compChoice==="scissors" ){
            userWin= compChoice==="scissors"? false: true;
        }
        else{
            userWin= compChoice==="rock"? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("Choice was clicked ", userChoice);
        playGame(userChoice);
    });
});
