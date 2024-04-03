let randomNumberInBody = document.querySelector(".number");
let inputUser = document.querySelector(".guess");
let headerResult = document.querySelector("h1");
let checkBtn = document.querySelector(".check");
let againBtn = document.querySelector(".again");
let scoreLabel = document.querySelector(".score");
let score = 20;
let randomNumber;

scoreLabel.textContent = score.toString();

checkBtn.addEventListener("click", playGame);

againBtn.addEventListener("click", playAgain);

function getRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
}

randomNumber = getRandomNumber();

console.log(randomNumber);


function playGame() {

    let userValue = Number(inputUser.value);

    if (userValue === 0) {
        alert("Please Enter a random number");
    }

    else if (userValue === randomNumber) {
        headerResult.textContent = "Winner 🤑🤑🤑";
        document.body.style.backgroundColor = '#60b347';
        score += 1;
        scoreLabel.textContent = score.toString();
        randomNumberInBody.textContent = randomNumber.toString();
        randomNumber = getRandomNumber();
        console.log(randomNumber);
    }

    else {
        headerResult.textContent = "Try again 😭😭😭";
        document.body.style.backgroundColor = 'crimson';
        score -= 1;
        scoreLabel.textContent = score.toString();
    }

    inputUser.value = "";
}

function playAgain() {
    location.reload();
}