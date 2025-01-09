



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

getHumanChoice=()=>{
   let humanChoice;
    do{
     humanChoice=prompt("Moi Nguoi Dung Nhap Mot trong Ba lua Chon Sau: rock,paper,scissors");
    }while(humanChoice.toLowerCase()!=="rock"&&humanChoice.toLowerCase()!=="paper"&&humanChoice.toLowerCase()!=="scissors");
    return humanChoice;
}

function playRound(computerChoice,humanChoice){
    if(computerChoice.toLowerCase()==="rock"){
        if(humanChoice.toLowerCase()==="rock"){
            console.log("Hoa Nhau");
        }else if(humanChoice.toLowerCase()==="paper"){
            console.log("Ban Thang Van Nay.");
            humanScore++;
        }else if(humanChoice.toLowerCase()==="scissors"){
            console.log("May Tinh Thang Van Nay.");
            computerScore++;
        }
    }
    else if(computerChoice.toLowerCase()==="paper"){
        if(humanChoice.toLowerCase()==="rock"){
            console.log("May Tinh Thang Van Nay.");
            computerScore++;
        }else if(humanChoice.toLowerCase()==="paper"){
            console.log("Hoa Nhau")
        }else if(humanChoice.toLowerCase()==="scissors"){
            console.log("Ban Thang Van Nay.");
            humanScore++;
        }
    }
    else if(computerChoice.toLowerCase()==="scissors"){
        if(humanChoice.toLowerCase()==="rock"){
            console.log("Ban Thang Van Nay.");
            humanScore++;
        }else if(humanChoice.toLowerCase()==="paper"){
            console.log("May Tinh Thang Van Nay.");
            computerScore++;
        }else if(humanChoice.toLowerCase()==="scissors"){
            console.log("Hoa Nhau")
        }
    }
    console.log("May Tinh Chon: "+computerChoice);
    console.log("Ti so: Human "+humanScore+" : "+computerScore+" Computer.")
   
}
let computerScore=0;
let humanScore=0;
function lastResult(){
    
    while(computerScore<3 && humanScore <3){
     const computerChoice=getComputerChoice();
      const humanChoice=getHumanChoice();
        // const humanChoice=prompt("Moi Nguoi Dung Nhap Mot trong Ba lua Chon Sau: rock,paper,scissors");
       
       playRound(computerChoice,humanChoice);
    }
    if(computerScore===3){
        console.log("May Tinh Thang Vong Dau.");
        return;
    }else if(humanScore===3){
        console.log("Ban Chien Thang Vong Dau.")
        return;
    }
}
lastResult();
