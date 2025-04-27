console.log ("Lets learnn how to take inputs and return alerts in javascript");
//let username = prompt("Please enter your name: "); //prompt is used to take input from the user
//alert("Hello " + username + "! Welcome to the world of JavaScript!"); //alert is used to display a message to the user

let score = prompt("Please enter your score: "); //prompt is used to take input from the user
score = parseInt(score); //parseInt is used to convert the input to an integer

switch (true){
    case (score >= 90):
        alert("You got an A!");
        break;
    case (score >= 80 && score < 90):
        alert("You got a B!");
        break;
    case (score >= 70 && score < 80):
        alert("You got a C!");
        break;
    case (score >= 60 && score <70):
        alert("You got a D!");
        break;
    case (score >= 50 && score < 60):
        alert("You got an E!");
        break;

}