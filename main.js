const prompt = require("readline-sync");
/*  */ 
console.log("Guess the Country quiz!\n");

let name = prompt.question("Please enter your name: \n");



console.log("Welcome " + name + " to the Guess the Country quiz!\n");

console.log("There are 4 stages in this quiz, each stage has 5 questions. You will be scored at the end of each stage.\nYou can choose to quit after each stage.\n");

console.log("The first stage is the easiest, and the last stage is the hardest. Good luck!\n");

prompt.question("Press enter to start the quiz!\n");

console.log("=====Level Easy===== \n");
console.log("The country names are scrambled, You have to guess the correct country name.\n");


//Array that holds answer


let answers = [["Malta","Colombia" ,"Cambodia","Australia","France"],
            ["Japan", "South Africa", "Greece", "Spain", "Mexico"],
            ["Nairobi","Ankara","Ottawa","Mogadishu","Nassau"],
            [1776, 1707, 2011, 1523,1960]];

let scramble =["amlta","mbicolao","admibaoc","rauiaatsl","ncrfea"]



for (i = 0; i < scramble.length; i++)
{
   let answerEasy = prompt.question("Unscramble the Country name: " +scramble[i] + "\n")

}

console.log("\n" + "Congratulations on finishing level Easy\n");

prompt.question("Would you like continue to the next round?");


/*
   while (answerEasy === is(NaN))
    {
        answerEasy = prompt.question("Error type a word: " +scramble[i])
    }

*/


