playHiLo();
function playHiLo()
{
 //userAnswer is the answer to determine whether game ends or continues
var userAnswer = "YES";
var numTries = 0;

userAnswer=prompt ("Want to play a game?");
userAnswer= userAnswer.toUpperCase();
while (userAnswer == "YES")
    {
        //Hard coded secret number to test; replace with rando num call later
        //var secretNum = 11;
        var secretNum = Math.floor(Math.random()* 100 +1);
        //alert(secretNum);
        userGuess= prompt("Guess a number between 1 & 100");
        numTries ++
        //alert(secretNum);
        //alert(userGuess);
        while (userGuess != secretNum) 
        { 
            if (secretNum < userGuess) 
                {
                    alert( userGuess + " is too high!");
                }
            else if(secretNum > userGuess) 
                {
                alert(userGuess + " is too Low");
                }
            userGuess = prompt("Guess again")

        }
            alert("Excellent guess! The secret number was " + secretNum+ ". It only took you " +numTries+ " tries");
            userAnswer = prompt("Do you want to play again?")
            userAnswer= userAnswer.toUpperCase();
    }
    alert("bye, felicia!");
}