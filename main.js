const prompt = require("readline-sync");

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

let level1points = 0;
let level2points = 0;
let level3points = 0;
let level4points = 0;

//the first level of the quiz 
function levelEasy ()
{
   
    let totalPoints = 0;

    console.log("=====Level Easy===== \n");
    console.log("The country names are scrambled, You have to guess the correct country name.\n");
    
    let scramble =["amlta","mbicolao","admibaoc","rauiaatsl","ncrfea"]

    //looping through the easy questions 
    for (let i = 0; i < scramble.length; i++)
    {
        let easyQuestions = prompt.question(questionInfo[0].question + ": " +scramble[i] + "\n");  

        //keeps track of level 1 correct answers
        //keeps running total for the quiz overall
        if (easyQuestions === questionInfo[0].answers[i])
        {
            level1points ++;
            totalPoints ++;
        }
            
    }

    console.log("\n" + "Congratulations on finishing level Easy\n");

    let nextRound = prompt.question("Would you like continue to the next round? (yes or no)");

    //input validation to make sure user enters yes or no
      while (nextRound.toLocaleLowerCase() !== "yes"  && nextRound.toLocaleLowerCase() !== "no")
    {
        nextRound = prompt.question ("Please enter yes or no!");
    }

    //allowing any yes to be accepted no matter the caps 
    switch (nextRound.toLowerCase()){
        case "yes": 
        console.log ("You are moving on to the next level");
        return totalPoints;
        

    //if no stops program from continuing to run
    default: 
        console.log("Thank you for playing");
        console.log("You got " +level1points+ "/5 correct answers")
        process.exit(1);
        break;
    }

}

//level medium 
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
        
    //displays the level total 
    ///displays total of levels played 
    default: 
        console.log("Thank you for playing");
        console.log ("You got " +level2points+ "/5 correct answers")
        console.log("For a total of " +totalPoints+ "/10 correct answers");
        process.exit(1);
        break;
    }

}

//hard level
function levelHard(totalPoints)
{

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

//level extremly hard
function levelExtreme (totalPoints)
{

    let countries = ["America","United Kingdom","South Sudan","Sweden","Cote d'Ivorie"]

    console.log("=====Extremely Hard===== \n");

    for (let i = 0; i < countries.length; i++)
    {
        let extremeQuestions = prompt.question( countries[i] + " " + questionInfo[3].question + ": \n"); 
        
        //input validation to ensure the user enters a number
        while (isNaN(extremeQuestions))
        {
            console.log("make sure its a number")
            extremeQuestions = prompt.question( countries[i] + " " + questionInfo[3].question + ": \n"); 
        }

        extremeQuestions = Number(extremeQuestions) 

        //allows the user 5 years either way
        //maths absolute to turn all the numbers positive
        if (Math.abs(extremeQuestions - questionInfo[3].answers[i]) <= 5)
        {
            level4points ++;
            totalPoints++;
        }

        return totalPoints;
            
    }
}

//displays the quiz and overall total
function displayAnswer()
{

    let score = 0;

    //passes score into function
    score = levelEasy(score)
    score = levelMedium(score)
    score = levelHard(score)
    score = levelExtreme(score)

    console.log("===SUMMARY===");
    console.log("Level easy: " +level1points+ "/5");
    console.log("Level medium: " +level2points+ "/5");
    console.log("Level hard: " +level3points+ "/5");
    console.log("Level extremly hard: " +level4points+ "/5");
    console.log("Total points: " +score+ "/20");


    //response depending on how well the user did 
    if (score >= 14)
    {
        console.log("Congrats you did amazing");
    }

    else if (score >=12 && score < 14)
    {
        console.log("Well done you did well")
    }

    else if (score >= 10 && score < 12)
    {
        console.log("You did okay")
    }

    else
    {
        console.log("You didn't do very well")
    }

}

displayAnswer();



