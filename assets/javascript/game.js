var wins = 0;
var losses = 0;
var totalpoints = 0;
var randomNumber; 

    

    var crystalNumberButtons = {
        black:
        {
            name: "black",
            value:  Math.floor((Math.random() * 12)+1)
        },

        blue:
        {
            name: "blue",
            value:  Math.floor((Math.random() * 12)+1)
        },

        green:
        {
            name: "green",
            value:  Math.floor((Math.random() * 12)+1),
        },

        purple:
        {
            name: "purple",
            value:  Math.floor((Math.random() * 12)+1)
        }
    };

    $('#wins').append(wins);
    $('#losses').append(losses);
    $('#totalpoints').append(totalpoints);

function runGame() {
    totalpoints = 0;
    randomNumber = Math.floor((Math.random() * 120) +19);
    $('#randomNumber').text(randomNumber);
};

 runGame();

$('.blackCrystal').on('click', function(){
    $('.blackCrystal').text(crystalNumberButtons.black.value);
    $('#totalpoints').append(crystalNumberButtons.black.value);
    updateTotalPoints();
});
$('.blueCrystal').on('click', function (){
    $('.blueCrystal').text(crystalNumberButtons.blue.value);
});
$('.greenCrystal').on('click', function (){
    $('.greenCrystal').text(crystalNumberButtons.green.value);
});
$('.purpleCrystal').on('click', function (){
    $('.purpleCrystal').text(crystalNumberButtons.purple.value);
});

// get value of button, update the total score, append to page



function updateTotalPoints(crystalButtons) {
    totalpoints += crystalNumberButtons[crystalNumberButtons.attr('.buttons')].points;
    $('#totalpoints').append(totalpoints);
};




console.log(crystalNumberButtons)



console.log('crystalNumberButtons.black.value' + randomNumberCrystalBlack);
console.log('Blue ' + randomNumberCrystalBlue);
console.log('Green ' + randomNumberCrystalGreen);
console.log('Purple ' + randomNumberCrystalPurple);
console.log(randomNumber)
console.log(updateTotalPoints)


/*

function resetGame() {
    // set new random number
}


*/