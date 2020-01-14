/*
- Добавить еще один кубик;
GAME RULES:
- Игра для двух игроков, играют по раундам;
- В течении хода, игрок бросает кубики, результаты каждого его броска суммируются; 
- Игрок может сохранить свой прогресс в суммарный счёт. После этого ход переходит другому игроку.
- Но, если игроку выпадает "1" не сохраненный в прогрес счёт обнуляется, ход переходит другому игроку.
- Выигрывает игрок, набравший первым 100 очков в "score"
*/

var Player1, Player2, Current1, Current2;
var Img1 = document.getElementById('dice1');
var Img2 = document.getElementById('dice2');
var dice = 0;
var ActivePlayer = 1;
var Value1 = 0;
var Value2 = 0;

document.getElementById("btn-roll").disabled = true;
document.getElementById("btn-hold").disabled = true;

function StartGame() {
    alert('- Start New Game -');
    Player1 = 0; Player2 = 0; Current1 = 0; Current2 = 0;
    document.getElementById('score-0').innerText = Player1;
    document.getElementById('score-1').innerText = Player2;
    document.getElementById('current-0').innerText = Current1;
    document.getElementById('current-1').innerText = Current2;
    document.getElementById('name-0').innerHTML = '<b>Player 1</b>'
    document.getElementById("btn-roll").disabled = false;
    document.getElementById("btn-hold").disabled = false;
}

function RollDice() {

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);_
    }

    let dice1 = getRandomInt(1, 6);
    let dice2 = getRandomInt(1, 6);

    let dice1IMG = "dice-" + dice1 + ".png";
    let dice2IMG = "dice-" + dice2 + ".png";
    Img1.setAttribute('src', dice1IMG);
    Img2.setAttribute('src', dice2IMG);

    if (dice1 == 1 || dice2 == 1) {
        dice = 0;
        Hold()
    } else {
        dice = dice + dice1 + dice2;
        
        
        if (ActivePlayer == 1) {
            document.getElementById('current-0').innerText = dice;
        }

        if (ActivePlayer == 2) {
            document.getElementById('current-1').innerText = dice;
        }
    }

}

function Hold() {
    if (ActivePlayer == 1) {
        ActivePlayer = 2;
        Value1 = Value1 + dice;
        document.getElementById('score-0').innerText = Value1;
        document.getElementById('current-0').innerText = Current1;
        if (Value1 >= 100) {
            alert('Winner Player 1')
            document.getElementById("btn-roll").disabled = true;
            document.getElementById("btn-hold").disabled = true;
        }
        document.getElementById('name-0').innerHTML = 'Player 1'
        document.getElementById('name-1').innerHTML = '<b>Player 2</b>'
    } else {
        ActivePlayer = 1
        Value2 = Value2 + dice;
        document.getElementById('score-1').innerText = Value2;
        document.getElementById('current-1').innerText = Current2;
        if (Value2 >= 100) {
            alert('Winner Player 2')
            document.getElementById("btn-roll").disabled = true;
            document.getElementById("btn-hold").disabled = true;
        }
        document.getElementById('name-0').innerHTML = '<b>Player 1</b>'
        document.getElementById('name-1').innerHTML = 'Player 2'
    }
    dice = 0;
}