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

   

function runGame() {
    totalpoints = 0;
    randomNumber = Math.floor((Math.random() * 120) +19);
    $('#randomNumber').text(randomNumber);
    $('.blackCrystal').attr('crystalData', crystalNumberButtons.black.value)
    $('.blueCrystal').attr('crystalData', crystalNumberButtons.blue.value)
    $('.greenCrystal').attr('crystalData', crystalNumberButtons.green.value)
    $('.purpleCrystal').attr('crystalData', crystalNumberButtons.purple.value)
};

var winsHTML = $('#wins').text(wins);
var lossesHTML = $('#losses').text(losses)

 runGame();

 $('#wins').append(winsHTML);
 $('#losses').append(lossesHTML);
 $('#totalpoints').text(totalpoints);
 $(".crystal").on("click", function(){
    let crystalVal = parseInt($(this).attr('crystalData'));
    totalpoints += crystalVal;

    $('#total').text('Your total is: ' + totalpoints);

    console.log(totalpoints);
    console.log(crystalVal)
    console.log("Wins  " + wins)
    console.log("losses " + losses) 

    if (totalpoints == randomNumber) {
        wins++;
        $('#playerUpdate').text('Perfect!');
        $('#wins').text(wins);
        runGame()
    } else if (totalpoints > randomNumber) {
        losses++;
        $('#playerUpdate').text('you fucked up!');
        $('#losses').text(losses);

        runGame()
    } else {
        $('#playerUpdate').text('getting close!')
    }
    ;

});



console.log('crystalNumberButtons');
console.log('Black Value ' + crystalNumberButtons.black.value);
console.log("Total Points " + totalpoints)
console.log("Target " + randomNumber)
