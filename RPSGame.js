

let computerScore=0;
let humanScore=0;

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
    const infoBoard=document.getElementById("infoBoard");
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
    
   
}

function playGame(){
    let i=1;
    while(i<=5){
      const humanChoice=getHumanChoice();
        // const humanChoice=prompt("Moi Nguoi Dung Nhap Mot trong Ba lua Chon Sau: rock,paper,scissors");
       
       playRound(computerChoice,humanChoice);
       i++;
    }
   if(computerScore>humanScore){
    console.log("Computer wins.");
   }else if(computerScore<humanScore){
    console.log("Human wins.");
   }else if(computerScore===humanScore){
    console.log("Tie.");
   }
}

