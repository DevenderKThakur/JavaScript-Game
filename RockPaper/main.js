let  user_score = 0
let  computer_score = 0

const user_score_span = document.getElementById('user__score')
const computer_score_span = document.getElementById('computer__score')

const score_board_div = document.querySelector('.scoreboard')

const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')

const right_hand = document.getElementById('right__hand')

function getComputerChoice(){
    const choices = ['r','p','s']
    const randomNumber = Math.floor(Math.random()*3)
    return choices[randomNumber]
}

function win(){
  user_score++
  user_score_span.innerHTML = user_score
}
function lose(){
  computer_score++
  computer_score_span.innerHTML = computer_score
}
function draw(){

}

function game(userChoice){
   const computerChoice = getComputerChoice()
   if(computerChoice == 'r'){
     right_hand.src = 'rock_right_hand.png'
   }
   else if(computerChoice == 'p'){
    right_hand.src = 'paper_right_hand.png'
   }
   else{
    right_hand.src = 'scissors_right_hand.png'
   }
   switch(userChoice+computerChoice){
     case 'rs':
     case 'sp':
     case 'pr':
        win()
        break
     case 'sr':
     case 'ps':
     case 'rp':
        lose()
        break
     case 'rr':
     case 'pp':
     case 'ss':
        draw() 
        break                      
   }
}

function main(){
    rock_div.addEventListener('click',()=>{
       game('r')
    })
    paper_div.addEventListener('click',()=>{
        game('p')
    })
    scissors_div.addEventListener('click',()=>{
        game('s')
    })
}
main()