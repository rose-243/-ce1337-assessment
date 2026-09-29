const prompt = require("readline-sync");
/*  */ 

console.log("Guess the Country quiz!\n");

let name = prompt.question("Please enter your name: \n");

console.log("Welcome " + name + " to the Guess the Country quiz!\n");
console.log("There are 4 stages in this quiz, each stage has 5 questions. You will be scored at the end of each stage.\nYou can choose to quit after each stage.\n");
console.log("The first stage is the easiest, and the last stage is the hardest. Good luck!\n");
prompt.question("Press enter to start the quiz!\n");


//sotres the questions + the answers
let questionInfo =[
    {
        question: "Unscramble the Country name",
        answers: ["Malta","Colombia" ,"Cambodia","Australia","France"],
    },
    {
        question: "What country would you find",
        answers: ["Japan", "South Africa", "Greece", "Spain", "Mexico"],
    },
    {
        question: "What is the capital city of",
        answers: ["Nairobi","Ankara","Ottawa","Mogadishu","Nassau"],

    },
    {
        question: "was founded in what decade ",
        answers:  [1776, 1707, 2011, 1523,1960]

    }
]

totalPoints = 0;
           
//the first level of the quiz 
function levelEasy ()
{
    level1points = 0;

    console.log("=====Level Easy===== \n");
    console.log("The country names are scrambled, You have to guess the correct country name.\n");
    
    let scramble =["amlta","mbicolao","admibaoc","rauiaatsl","ncrfea"]

    for (i = 0; i < scramble.length; i++)
    {
        let easyQuestions = prompt.question(questionInfo[0].question + ": " +scramble[i] + "\n");  

        if (easyQuestions === questionInfo[0].answers[i])
        {
            level1points ++;
        }
            
    }

    console.log("\n" + "Congratulations on finishing level Easy\n");

    nextRound = prompt.question("Would you like continue to the next round? (yes or no)");

    if (nextRound == "yes" || nextRound == "Yes")
    {
        return level1points;
    }

    else
    {
        //display answers here + running total FIX LATER 
        console.log("Thank you for playing");
        console.log("You got " +level1points+ "/5 correct answers")
        process.exit(1);
    }
}

levelEasy();

console.log("Level 2 start");