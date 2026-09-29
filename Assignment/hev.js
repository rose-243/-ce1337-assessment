const prompt = require("readline-sync");
/*  */ 
console.log("Guess the Country quiz!\n");

let name = prompt.question("Please enter your name: \n");



console.log("Welcome " + name + " to the Guess the Country quiz!\n");

console.log("There are 4 stages in this quiz, each stage has 5 questions. You will be scored at the end of each stage.\nYou can choose to quit after each stage.\n");

console.log("The first stage is the easiest, and the last stage is the hardest. Good luck!\n");

prompt.question("Press enter to start the quiz!\n");


//Array that holds answer


let answers = [["Malta","Colombia" ,"Cambodia","Australia","France"],
            ["Japan", "South Africa", "Greece", "Spain", "Mexico"],
            ["Nairobi","Ankara","Ottawa","Mogadishu","Nassau"],
            [1776, 1707, 2011, 1523,1960]];


//Easy


console.log("=====Level Easy===== \n");
console.log("The country names are scrambled, You have to guess the correct country name.\n");

let scramble = ["amlta","mbicolao","admibaoc","rauiaatsl","ncrfea"]

for (i = 0; i < scramble.length; i++)
{
   let answerEasy = prompt.question("Unscramble the Country name: " +scramble[i] + "\n");

}

console.log("\n" + "Congratulations on finishing level Easy!\n");

/*
   while (answerEasy === is(NaN))
    {
        answerEasy = prompt.question("Error type a word: " +scramble[i])
    }

*/

let easy = prompt.question("Would you like continue to the next round?\n");


//Medium


console.log("=====Level Medium===== \n");
console.log("In which country you would find these famous landmarks?\n")

let landmark = ["Mount Fuji", "Table Mountain", "Acropolis", "Sagrada Familia", "Chichen Itza"]

for (i = 0; i < landmark.length; i++)
{
   let answerMedium = prompt.question("Where would you find this landmark: " +landmark[i] + "\n");

}

/*

   while (answerMedium === is(NaN))
    {
        answerMedium = prompt.question("Error type a word: " +scramble[i])
    }

*/

console.log("\n" + "Congratulations on finishing level Medium!\n");
let medium = prompt.question("Would you like continue to the next round?\n");


//Hard


console.log("=====Level Hard===== \n");
console.log("What the capital city of these countries?\nYou must spell them correctly to earn a point\n")

let capital = ["Kenya", "Turkey", "Canada", "Somalia", "The Bahamas"]

for (i = 0; i < capital.length; i++)
{
   let answerHard = prompt.question("What is the capital city of " +capital[i] + "?\n");

}

/*

   while (answerHard === is(NaN))
    {
        answerHard = prompt.question("Error type a word: " +scramble[i])
    }

*/

//Extreme


console.log("=====Level Extreme===== \n");
console.log("You must answer which year these countries were founded\n");

let year = ["America", "United Kingdom", "South Sudan", "Sweden", "Cote d' ivoire"]

for (i = 0; i < year.length; i++)
{
    let answerExtreme = prompt.question("What year was " + year[i] + " founded?\n")
}

/*

   while (answerExtreme === is(NaN))
    {
        answerExtreme = prompt.question("Error type a word: " +scramble[i])
    }

*/
