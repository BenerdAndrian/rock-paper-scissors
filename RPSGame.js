

let computerScore=0;
let humanScore=0;
let roundNumber=0;
 getComputerChoice=()=>{
    const choice=Math.random();
    if(choice>=0 && choice <=1/3){
        return "rock";
    }else if(choice >1/3 && choice<=2/3){
        return "paper";
    }else if(choice>2/3){
        return "scissors";
    }
}

// getHumanChoice=()=>{
//    let humanChoice;
//     do{
//      humanChoice=prompt("Moi Nguoi Dung Nhap Mot trong Ba lua Chon Sau: rock,paper,scissors");
//     }while(humanChoice.toLowerCase()!=="rock"&&humanChoice.toLowerCase()!=="paper"&&humanChoice.toLowerCase()!=="scissors");
//     return humanChoice;
// }


function playRound(humanChoice){
    roundNumber++;
    const infoBoard=document.getElementById("infoBoard");
    if(roundNumber<=5){
        const score=document.getElementById("result");
       
        const firstSpan=score.querySelectorAll("span")[0];
    const secondSpan=score.querySelectorAll("span")[1];
    const round=document.getElementById("round");
    const roundNumberDOM=round.querySelectorAll("span")[0];
    roundNumberDOM.textContent=roundNumber;
    
        let result='';
        const computerChoice=getComputerChoice();
        infoBoard.innerHTML=`<p> computer chose ${computerChoice}</p>`;
        if(computerChoice.toLowerCase()==="rock"){
            if(humanChoice.toLowerCase()==="rock"){
                console.log("Hoa Nhau");
                result = "tie this round";
            }else if(humanChoice.toLowerCase()==="paper"){
                console.log("Ban Thang Van Nay.");
                humanScore++;
                result= "you win this round";
            }else if(humanChoice.toLowerCase()==="scissors"){
                console.log("May Tinh Thang Van Nay.");
                computerScore++;
                result="computer wins this round.";
            }
        }
        else if(computerChoice.toLowerCase()==="paper"){
            if(humanChoice.toLowerCase()==="rock"){
                console.log("May Tinh Thang Van Nay.");
                computerScore++;
                result="computer wins this round.";
            }else if(humanChoice.toLowerCase()==="paper"){
                console.log("Hoa Nhau")
                result="tie this round."
            }else if(humanChoice.toLowerCase()==="scissors"){
                console.log("Ban Thang Van Nay.");
                humanScore++;
                result="you win this round."
            }
        }
        else if(computerChoice.toLowerCase()==="scissors"){
            if(humanChoice.toLowerCase()==="rock"){
                console.log("Ban Thang Van Nay.");
                humanScore++;
                result="you win this round";
            }else if(humanChoice.toLowerCase()==="paper"){
                console.log("May Tinh Thang Van Nay.");
                computerScore++;
                result="computer wins this round."
            }else if(humanChoice.toLowerCase()==="scissors"){
                console.log("Hoa Nhau")
                result="tie this round";
            }
        }
        infoBoard.innerHTML+=`<p>${result}</p><br>`
        firstSpan.textContent=humanScore;
        secondSpan.textContent=computerScore;
        if(roundNumber===5){
            if(computerScore>humanScore){
                infoBoard.innerHTML+=`<p>Computer wins this game.</p>`
                }else if(computerScore<humanScore){
                infoBoard.innerHTML=`<p>Human win this game.</p>`
                }else if(computerScore===humanScore){
                 infoBoard.innerHTML=`<p>Tie this game.</p>`
            }
        
        }
    }
    
   
}

// function playGame(humanChoice){
//     let i=1;
//     while(i<=5){
//         roundNumber.textContent=i;
//        playRound(humanChoice);
//        i++;
//     }
//    if(computerScore>humanScore){
//    infoBoard.innerHTML+=`<p>Computer wins this game.</p>`
//    }else if(computerScore<humanScore){
//     infoBoard.innerHTML=`<p>Human win this game.</p>`
//    }else if(computerScore===humanScore){
//     infoBoard.innerHTML=`<p>Tie this game.</p>`
//    }
// }

