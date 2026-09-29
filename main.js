const prompt = require("readline-sync");
/*  */ 

console.log("Guess the Country quiz!\n");

let name = prompt.question("Please enter your name: \n");

console.log("Welcome " + name + " to the Guess the Country quiz!\n");
console.log("There are 4 stages in this quiz, each stage has 5 questions. You will be scored at the end of each stage.\nYou can choose to quit after each stage.\n");
console.log("The first stage is the easiest, and the last stage is the hardest. Good luck!\n");
prompt.question("Press enter to start the quiz!\n");


//sorts the questions + the answers
let questionInfo =[
    {
        question: "Unscramble the Country name",
        answers: ["Malta","Colombia" ,"Cambodia","Australia","France"],
    },
    {
        question: "In what country would you find",
        answers: ["Japan", "South Africa", "Greece", "Spain", "Mexico"],
    },
    {
        question: " is the capital city of what country?",
        answers: ["Kenya", "Turkey", "Canada", "Somalia", "Bahamas"],

    },
    {
        question: "was founded in what year?",
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

    nextRound = prompt.question("Would you like continue to the next round? (yes or no)\n");

    if (nextRound == "yes" || nextRound == "Yes")
    {
        return level1points;
    }

    else
    {
        //display answers here + running total FIX LATER 
        console.log("Thank you for playing, " + name);
        console.log("You got " +level1points+ "/5 correct answers")
        process.exit(1);
    }
}

levelEasy();

console.log("\nLevel 2 start\n");

prompt.question("Press enter to begin Level 2\n")


//The second level of the quiz
levelMedium()

function levelMedium ()
{
    level2points = 0;

    console.log("===Level Medium===\n");
    console.log("In which country would you find these famous landmarks?\n");
    
    let landmark = ["Mount Fuji", "Table Mountain", "Acropolis", "Sagrada Familia", "Chichen Itza"]
    
    for(i = 0; i < landmark.length; i++)
{
    let mediumQuestions = prompt.question(questionInfo[1].question + ": " + landmark[i] + "\n");
    
    if (mediumQuestions === questionInfo[1].answers[i])
        {
            level2points ++;
        }
}

console.log("\n" + "Congratulations on finishing level Medium\n");

    nextRound = prompt.question("Would you like continue to the next round? (yes or no)\n");

    if (nextRound == "yes" || nextRound == "Yes")
    {
        return level2points;
    }

    else
    {
        console.log("Thank you for playing, " + name);
        console.log("You got " +(level1points+level2points)+ "/10 correct answers")
        process.exit(1);
    }
}


//The third level of the quiz
levelHard()

function levelHard()
{
    level3points = 0;

    console.log("\n===Level Hard===\n");
    console.log("Guess the country based on its capital city\n");

    let capital = ["Nairobi","Ankara","Ottawa","Mogadishu","Nassau"]

    for(i = 0; i < capital.length; i++)
{
    let hardQuestions = prompt.question(capital[i] + questionInfo[2].question + "\n");

    if(hardQuestions === questionInfo[2].answers[i])
    {
        level3points++;
    }
}
console.log("\n" + "Congratulations on finishing level Hard\n");

    nextRound = prompt.question("Would you like continue to the next round? (yes or no)\n");

    if (nextRound == "yes" || nextRound == "Yes")
    {
        return level3points;
    }

    else
    { 
        console.log("Thank you for playing, " + name);
        console.log("You got " +(level1points+level2points+level3points)+ "/15 correct answers")
        process.exit(1);
    }
}

//The fourth level of the quiz
levelExtreme()

function levelExtreme()
{
    level4points = 0;

    console.log("\n===Level Extreme===\n");
    console.log("You must answer which year these countries were founded\nThere is a 10 year leeway on your answer\n");

    let year = ["America ", "United Kingdom ", "South Sudan ", "Sweden ", "Cote d' ivoire "]
    
    extremeQuestions = Number (extremeQuestions);

    for(i = 0; i < year.length; i++)
{
    let extremeQuestions = prompt.question(year[i] + questionInfo[3].question + "\n");

    if(extremeQuestions === questionInfo[3].answers[i])
    {
        level4points++;
    }
}
console.log("\n" + "Congratulations on finishing level Extreme\n");

        console.log("Thank you for playing, " + name);
        console.log("You got " +(level1points+level2points+level3points+level4points)+ "/20 correct answers\n")
        console.log("You have successfully completed the quiz! Well done for making it this far")
}

//Calculating the overall total
overallTotal()

let sumOfPoints = (level1points+level2points+level3points+level4points);

function overallTotal()
{
    console.log("\n=====SCORE SUMMARY=====");
    console.log("Your Level 1 total is: " + level1points + "/5");
    console.log("Your Level 2 total is: " + level2points + "/5");
    console.log("Your Level 3 total is: " + level3points + "/5");
    console.log("Your Level 4 total is: " + level4points + "/5");
    console.log("Your quiz total is: " + sumOfPoints + "/20");

    process.exit(1);
}
