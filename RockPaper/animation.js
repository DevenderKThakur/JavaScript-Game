let rock_image = document.getElementById('r')
let paper_image = document.getElementById('p')
let scissors_image = document.getElementById('s')

let left_hand = document.getElementById('left__hand')

rock_image.addEventListener('click',()=>{
    left_hand.src = 'rock_left_hand.png'
})

paper_image.addEventListener('click',()=>{
    left_hand.src = 'paper_left_hand.png'
})

scissors_image.addEventListener('click',()=>{
    left_hand.src = 'scissors_left_hand.png'
})
