const prompt = require("readline-sync");

console.log("Guess the Country quiz!\n");

let name = prompt.question("Please enter your name: \n");

console.log("Welcome " + name + " to the Guess the Country quiz!\n");
console.log("There are 4 stages in this quiz, each stage has 5 questions. You will be scored at the end of each stage.\nYou can choose to quit after each stage.\n");
console.log("Press enter to skip a question. You will not be able to return to the question again.\n");
prompt.question("Press enter to start the quiz!\n");

//sorts the questions + the answers
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
        question: "is the capital city of what country?",
        answers: ["Kenya","Turkey","Canada","Somalia","The Bahamas"],
    },
    {
        question: "was founded in what year?",
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
        //converts both to lower case so no matter the caps its correct
        if (easyQuestions.toLowerCase() === questionInfo[0].answers[i].toLowerCase())
        {
            level1points ++;
            totalPoints ++;
        }
            
    }

    console.log("Congratulations on finishing level Easy\n");
   
    let nextRound = prompt.question("Would you like continue to the next round? (yes or no)\n");

    //input validation to make sure user enters yes or no
      while (nextRound.toLowerCase() !== "yes"  && nextRound.toLowerCase() !== "no")
    {
        nextRound = prompt.question ("Please enter yes or no!\n");
    }

    //allowing any yes to be accepted no matter the caps 
    switch (nextRound.toLowerCase()){
        case "yes": 
        prompt.question("Press enter to move on to the next round\n");
        return totalPoints;
        
    //if no stops program from continuing to run
    default: 
        console.log("===SUMMARY===")
        console.log("You got " +level1points+ "/5 correct answers")
        console.log("Thank you for playing " +name+ " :D");
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
        let mediumQuestions = prompt.question(questionInfo[1].question + ": " +landMarks[i] + "?\n");  

        if (mediumQuestions.toLowerCase() === questionInfo[1].answers[i].toLowerCase())
        {
            level2points ++;
            totalPoints ++;
        }
    }

    console.log("Congratulations on finishing level Medium\n");

    let nextRound = prompt.question("Would you like continue to the next round? (yes or no)\n");

      while (nextRound.toLowerCase() !== "yes"  && nextRound.toLowerCase() !== "no")
    {
        nextRound = prompt.question ("Please enter yes or no!\n");
    }

    switch (nextRound.toLowerCase()){
        case "yes": 
        prompt.question("Press enter to move on to the next round\n");
        return totalPoints;
        
    //displays the level total 
    //displays total of levels played 
    default: 
        console.log("===SUMMARY===")
        console.log ("You got " +level1points+ "/5 correct answers for level easy")
        console.log ("You got " +level2points+ "/5 correct answers for level medium")
        console.log("For a total of " +totalPoints+ "/10 correct answers");
        console.log("Thank you for playing " +name+ " :D");
        
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

        if (hardQuestions.toLowerCase()=== questionInfo[2].answers[i].toLowerCase())
        {
            level3points ++;
            totalPoints ++;
        }
            
    }

    console.log("Congratulations on finishing level Hard\n");

    let nextRound = prompt.question("Would you like continue to the next round? (yes or no)\n");

    while (nextRound.toLowerCase() !== "yes"  && nextRound.toLowerCase() !== "no")
    {
        nextRound = prompt.question ("Please enter yes or no!\n");
    }

    switch (nextRound.toLowerCase()){
        case "yes": 
        prompt.question("Press enter to move on to the next round\n");
        return totalPoints;
        

    default: 
        console.log("===SUMMARY===")
        console.log ("You got " +level1points+ "/5 correct answers for level easy")
        console.log ("You got " +level2points+ "/5 correct answers for level medium")
        console.log ("You got " +level3points+ "/5 correct answers for level hard")
        console.log("For a total of " +totalPoints+ "/15 correct answers");
        console.log("Thank you for playing " +name+ " :D");
        process.exit(1);
        break;
    }

}

//level extreme
function levelExtreme (totalPoints)
{

    let countries = ["America","United Kingdom","South Sudan","Sweden","Cote d'Ivoire"]

    console.log("=====Extreme===== \n");
    console.log("You must enter which year the country was founded\nAnswers within 5 years either way will be accepted");
    

    for (let i = 0; i < countries.length; i++)
    {
        let extremeQuestions = prompt.question(countries[i] + " " + questionInfo[3].question + ": \n"); 
        
        //input validation to ensure the user enters a number
        while (isNaN(extremeQuestions))
        {
            console.log("make sure its a number");
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
    }

    return totalPoints; 
    
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
    console.log("Level Easy: " +level1points+ "/5");
    console.log("Level Medium: " +level2points+ "/5");
    console.log("Level Hard: " +level3points+ "/5");
    console.log("Level Extreme: " +level4points+ "/5");
    console.log("Total Points: " +score+ "/20");

    //response depending on how well the user did 
    if (score >= 14)
    {
        console.log("Congrats you did amazing!");
    }

    else if (score >=12 && score < 14)
    {
        console.log("Well done, you did well!")
    }

    else if (score >= 10 && score < 12)
    {
        console.log("You did okay?")
    }

    else
    {
        console.log("You suck!!")
    }

    console.log("Thank you for playing " +name+ " :D");

}

displayAnswer();
