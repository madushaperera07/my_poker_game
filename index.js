let num1 = getRandomCard()
let num2 = getRandomCard()
let card = [num1 , num2]
let sum = num1 + num2
let message = ""
let hasBlackJack = false;
let isAlive = true;

let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")

function getRandomCard(){
    let randomNum =  Math.floor(Math.random()*13) + 1
    if(randomNum === 1){
        return 11
    }else if(randomNum > 10){
        return 10
    }else{
        return randomNum
    }
}
function startgame(){
    cardEl.textContent = `Card :  `

    for(let i =0; i<card.length; i++){
        cardEl.textContent += `${card[i]}  `
    }
    sumEl.textContent = `Sum : ${sum}`
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }else{
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message;
    /* console.log(message) */
}

function newcard(){
 if(isAlive === true && hasBlackJack === false){
    let newcard1 = getRandomCard()
    sum += newcard1
    card.push(newcard1)
    startgame()
 }
}