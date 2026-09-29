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
        question: "is the capital city of what country",
        answers: ["Kenya","Turkey","Canada","Somalia","The Bahamas"],
    },
    {
        question: "was founded in what year (5 years either way leeway)",
        answers:  [1776, 1707, 2011, 1523,1960]

    }
]

level1points = 0;
level2points = 0;
level3points = 0;
level4points = 0;


//the first level of the quiz 
function levelEasy ()
{
   
    totalPoints = 0;

    console.log("=====Level Easy===== \n");
    console.log("The country names are scrambled, You have to guess the correct country name.\n");
    
    let scramble =["amlta","mbicolao","admibaoc","rauiaatsl","ncrfea"]

    for (let i = 0; i < scramble.length; i++)
    {
        let easyQuestions = prompt.question(questionInfo[0].question + ": " +scramble[i] + "\n");  

        if (easyQuestions === questionInfo[0].answers[i])
        {
            level1points ++;
            totalPoints ++;
        }
            
    }

    console.log("\n" + "Congratulations on finishing level Easy\n");

    let nextRound = prompt.question("Would you like continue to the next round? (yes or no)");

      while (nextRound.toLocaleLowerCase() !== "yes"  && nextRound.toLocaleLowerCase() !== "no")
    {
        nextRound = prompt.question ("Please enter yes or no!");
    }

    switch (nextRound.toLowerCase()){
        case "yes": 
        console.log ("You are moving on to the next level");
        return totalPoints;
        

    default: 
        console.log("Thank you for playing");
        console.log("You got " +level1points+ "/5 correct answers")
        process.exit(1);
        break;
    }

}

function levelMedium(totalPoints)
{
   

    let landMarks = ["Mount Fuji","Table Mountain","Acropolis","Sagrada Familia","Chichen Itza"]

    console.log("=====Level Medium===== \n");

    for (let i = 0; i < landMarks.length; i++)
    {
        let mediumQuestions = prompt.question(questionInfo[1].question + ": " +landMarks[i] + "\n");  

        if (mediumQuestions === questionInfo[1].answers[i])
        {
            level2points ++;
            totalPoints ++;
        }
            
    }

    console.log("\n" + "Congratulations on finishing level Medium\n");

    let nextRound = prompt.question("Would you like continue to the next round? (yes or no)");

      while (nextRound.toLocaleLowerCase() !== "yes"  && nextRound.toLocaleLowerCase() !== "no")
    {
        nextRound = prompt.question ("Please enter yes or no!");
    }

    switch (nextRound.toLowerCase()){
        case "yes": 
        console.log ("You are moving on to the next level");
        return totalPoints;
        

    default: 
        console.log("Thank you for playing");
        console.log ("You got " +level2points+ "/5 correct answers")
        console.log("For a total of " +totalPoints+ "/10 correct answers");
        process.exit(1);
        break;
    }

}

function levelHard(totalPoints)
{

    level3points = 0;

    let cities = ["Nairobi","Ankara","Ottawa","Mogadishu","Nassau"]

        console.log("=====Level Hard===== \n");

    for (let i = 0; i < cities.length; i++)
    {
        let hardQuestions = prompt.question( cities[i] + " " + questionInfo[2].question + ": \n");  

        if (hardQuestions === questionInfo[2].answers[i])
        {
            level3points ++;
            totalPoints ++;
        }
            
    }

     console.log("\n" + "Congratulations on finishing level Hard\n");

    let nextRound = prompt.question("Would you like continue to the next round? (yes or no)");

    while (nextRound.toLocaleLowerCase() !== "yes"  && nextRound.toLocaleLowerCase() !== "no")
    {
        nextRound = prompt.question ("Please enter yes or no!");
    }

    switch (nextRound.toLowerCase()){
        case "yes": 
        console.log ("You are moving on to the next level");
        return totalPoints;
        

    default: 
        console.log("Thank you for playing");
        console.log ("You got " +level3points+ "/5 correct answers")
        console.log("For a total of " +totalPoints+ "/15 correct answers");
        process.exit(1);
        break;
    }

}

function levelExtreme (totalPoints)
{

    let countries = ["America","United Kingdom","South Sudan","Sweden","Cote d'Ivorie"]

    console.log("=====Extremely Hard===== \n");

    for (let i = 0; i < countries.length; i++)
    {
        let extremeQuestions = prompt.question( countries[i] + " " + questionInfo[3].question + ": \n"); 
        
        while (isNaN(extremeQuestions))
        {
            console.log("make sure its a number")
            extremeQuestions = prompt.question( countries[i] + " " + questionInfo[3].question + ": \n"); 
        }
        extremeQuestions = Number(extremeQuestions) 

        if (Math.abs(extremeQuestions - questionInfo[3].answers[i]) <= 5)
        {
            level4points ++;
            totalPoints++;
        }
            
    }

    console.log("Thank you for playing");
    console.log ("You got " +level4points+ "/5 correct answers")
    console.log("For a total of " +totalPoints+ "/20 correct answers");
    return totalPoints
}

levelEasy()
levelMedium(totalPoints)
levelHard(totalPoints)
levelExtreme(totalPoints)



