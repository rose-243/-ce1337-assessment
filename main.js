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
        question: "In what country would you find",
        answers: ["Japan", "South Africa", "Greece", "Spain", "Mexico"],
    },
    {
        question: " is the capital city of what country? ",
        answers: ["Kenya","Turkey","Canada","Somalia","The Bahamas"],

    },
    {
        question: "was founded in what decade ",
        answers:  [1776, 1707, 2011, 1523,1960]

    }
]




           
//the first level of the quiz 
levelEasy()

function levelEasy()
{
    level1points = 0;

    console.log("=====Level Easy===== \n");
    console.log("The country names are scrambled, You have to guess the correct country name.\n");
    
    let scramble =["amlta","mbicolao","admibaoc","rauiaatsl","ncrfea"]

    for (let i = 0; i < scramble.length; i++)
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
        console.log("Thank you for playing");
        console.log("You got " + level1points + "/5 correct answers")
        process.exit(1);
    }
}

levelMedium()

function levelMedium()
{
    level2points = 0;
    
    console.log("=====Level Medium===== \n");
    console.log("There are landmarks and you have to type in the country of origin\n");
    prompt.question("Press enter to continue the quiz!\n");

    let landmarks = ["Mount Fuji","Table Mountain","Acropolis","Sagrada Familia","Chichen Itza"]

  for (let i = 0; i < landmarks.length; i++)
    {
        let mediumQuestions = prompt.question(questionInfo[1].question + ": " +landmarks[i] + "\n");  

        if (mediumQuestions === questionInfo[1].answers[i])
        {
            level2points ++;
        }
            
    }

  console.log("\n" + "Congratulations on finishing level Medium\n");

    ContinueMedium = prompt.question("Would you like continue to the next round? (yes or no)\n");

    if (ContinueMedium == "yes" || ContinueMedium == "Yes")
    {
        return level2points;
    }

    else
    {
        //display answers here + running total FIX LATER 
        console.log("Thank you for playing");
        console.log("You got " +(level1points+level2points) + "/10 correct answers")
        process.exit(1);
    }
}

levelHard()

function levelHard()
{
    level3points = 0;
    
    console.log ("\n  =====Level Hard===== \n");
   console.log("Name the country based on the capital cities\n");
    prompt.question("Press enter to continue the quiz!\n");

let capital =["Nairobi","Ankara","Ottawa","Mogadishu","Nassau"]


  for (let i = 0; i < capital.length; i++)
    {
        let hardQuestions = prompt.question(capital[i] +  questionInfo[2].question + ":" + "\n");  

        if (hardQuestions === questionInfo[2].answers[i])
        {
            level3points ++;
        }
            
    }

  console.log("\n" + "Congratulations on finishing level Hard\n");

    ContinueHard = prompt.question("Would you like continue to the next round? (yes or no)\n");

    if (ContinueHard== "yes" || ContinueHard == "Yes")
    {
        return level3points;
    }

    else
    {
        //display answers here + running total FIX LATER 
        console.log("Thank you for playing");
        console.log("You got " +(level1points+level2points+level3points) + "/15 correct answers")
        process.exit(1);
    }
}


levelExtreme()

function levelExtreme()
{
    level4points = 0;
    
    console.log ("\n  =====Level Extreme===== \n");
   console.log("This level is Extremely Hard\n");
console.log("In this last round you must input the decade in which the country was founded \n");
    prompt.question("If you're ready, press enter to continue the quiz!\n");

let founded =["United States Of America ","United Kingdom ","South Sudan ","Sweden ","Cote d'Ivoire "]


  for (let i = 0; i < founded.length; i++)
    {
        let extremeQuestions = prompt.question(founded[i] +  questionInfo[3].question + ":" + "\n");  
while (isNaN(extremeQuestions))
console. log("make sure its a number")
extremeQuestions - prompt.question(founded[i] + " " + questionInfo[3].question + ": \n");
extremeQuestions = Number (extremeQuestions)
if
(Math. abs(extremeQuestions - questionInfo[3] .answers[i]) <= 5)
        {
            level4points ++;
        }
            
    }
}

overallTotal ()



function overallTotal()
{
let totalPoints = (level1points+level2points+level3points+level4points);
 
console.log("=====SCORE SUMMARY=====")
        console.log("You got "+level1points+ "/5 correct answers on level Easy")
    console.log("You got "+level2points+"/5 correct answers level on Medium")
console.log("You got "+level3points+ "/5 correct answers level on Hard")
console.log("You got "+level4points+"/5 correct answers level on  Extreme")
        console.log("You got " + totalPoints + "/20 correct answers")
                console.log("Thank you for playing, "+name+" :)" );
        process.exit(1);

    }



