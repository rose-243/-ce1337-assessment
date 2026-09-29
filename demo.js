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


let continueEasy = prompt.question("Would you like continue to the next round?\n");

switch (continueEasy.toLowerCase()){
    case "yes": 
    console.log ("\n  =====Level Medium===== \n");
    break;
   case "no": 
    console.log ("Thank You for Playing");
    break;
default: 
    console.log ("Please enter yes or no!");
}

console.log("There are landmarks and you have to type in the country of origin\n");

prompt.question("Press enter to start the quiz!\n");

let landmark =["Mount Fuji","Table Mountain","Acropolis","Sagrada Familia","Chichen Itza"]



for (i = 0; i < landmark.length; i++)
{
   let answerEasy = prompt.question("In what country would you find " +landmark[i] +"?" +"\n")

}

console.log("\n" + "Congratulations on finishing level Medium\n");

let continueMedium = prompt.question("Would you like continue to the next round?\n");

switch (continueMedium.toLowerCase()){
    case "yes": 
    console.log ("\n  =====Level Hard===== \n");
    break;
   case "no": 
    console.log ("Thank You for Playing");
    break;
default: 
    console.log ("Please enter yes or no!");
}



console.log("Name the country based on the capital cities\n");

prompt.question("Press enter to start the quiz!\n");

let capital =["Nairobi","Ankara","Ottawa","Mogadishu","Nassau"]



for (i = 0; i < capital.length; i++)
{
   let answerEasy = prompt.question(capital[i] + " is the capital city of what country? "+"\n")

}



console.log("\n" + "Congratulations on finishing level Hard\n");

let continueHard = prompt.question("Would you like continue to the next round?\n");

switch (continueHard.toLowerCase()){
    case "yes": 
    console.log ("\n  =====Level Extreme===== \n");
    break;
   case "no": 
    console.log ("Thank You for Playing");
    break;
default: 
    console.log ("Please enter yes or no!");
}
console.log("This level is Extremely Hard\n");
console.log("In this last round you must input the decade in which the country was founded \n");
prompt.question("If you're ready, press enter to start the quiz!\n");


let founded =["United States Of America","United Kingdom","South Sudan","Sweden","Cote d'Ivoire"]



for (i = 0; i < founded.length; i++)
{
   let answerEasy = prompt.question( "In which Decade was "+ founded[i] +" founded?"+"\n")

}

console.log("\n" + "Congratulations on completing the whole quiz\n");
prompt.question("Please press enter to see your score!\n");

/*
   while (answerEasy === is(NaN))
    {
        answerEasy = prompt.question("Error type a word: " +scramble[i])
    }

*/