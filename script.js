//Start
var startbtn  = document.querySelector("#start-quiz-btn");

//Quiz
var quiz = document.querySelector("#quiz-content");
var nextbtn = document.querySelector("#next");
var timer = document.querySelector("#clock");
var question = document.querySelector("#question");
var options = document.querySelector("options")
var option1 = document.querySelector(".option1");
var option2 = document.querySelector(".option2");
var option3 = document.querySelector(".option3");
var option4 = document.querySelector(".option4");
var time = document.querySelector("clock");
var secondsleft = 30;

//Score
var score = document.querySelector("score");
var againbtn = document.querySelector("#again");
var correct = 0;
var answer = undefined;

var index = 0;
var timer = 0;
var interval = 0;

//clicking start

startbtn.addEventListener("click", ()=>{
    startbtn.style.display = "none";
    
});

//Timer aka clock

/*function setTime() {

var timerinterval = setInterval(function() {
    secondsleft--;
    clock.textContent = secondsleft + "second left"

    if(secondsleft === 0){
        clearInterval(timerinterval)
    }
}, 1000);
}*/

var countdown = ()=>{
    if(timer === 30){
        clearInterval(interval);
        nextbtn.click();
    }
    else{
        timer++;
        timer.innerHTML = timer;
    }
}

var loadanswers = ()=>{
    question.innerHTML = answers[index].question;
    option1.innerHTML = answers[index].op1;
    option2.innerHTML = answers[index].op2;
    option3.innerHTML = answers[index].op3;
    option4.innerHTML = answers[index].op4;
    
    timer = 0;
}

loadanswers();

//Next button

nextbtn.addEventListener("click", ()=>{
    quiz.style.display = "block";
    interval = setInterval(countdown, 1000);
    loadanswers();
})

options.forEach((op, opNo) =>{
    op.addEventListener("click", ()=>{
        op.classList.add("active");
        //check ansswer
        if(opNo === answers[index].answer)
        {
            correct++;
        }
        else {
            correct += 0;
        }
        //Stop counter
        clearInterval(interval);

    })
});

next.addEventListener("click", ()=>{
    //if index is less than answers.lenght
        if(index !== answers.length -1){
            index++;
        //question
        loadanswers();
        //score
        score.style.display = "block";
        score.innerHTML = "You got" + `${correct = 0}` + "out of" + `${answers.length}` + "correct answers";
        clearInterval(interval);
        interval = setInterval(countDown, 1000);
    }
    else{
        index = 0;
        //when complete display points
        clearInterval(interval);
        quiz.style.display = 'none';
        score.innerHTML = "You got" + `${correct = 0}` + "out of" + `${answers.length}` + "correct answers";
        score.style.display = "block";
    }
    })


//Q&A

var answers = [
    {
        question: "What surrounds an if/else statement?",
        op1: "Quotations",
        op2: "Curly Brackets",
        op3: "Parenthesis",
        op4: "Square Brackets",
        answer: 3,
    }, 
    {
        question: "A string",
        op1: "Expresses a true false statement",
        op2: "Can contain letters, numbers, spaces, and symbols.",
        op3: "Takes in an input, does something with it, and then returns an output.",
        op4: "Runs a boolean (true/false) statement based on data entered",
        answer: 2,
    },
    { 
        question: "The conditional statement, in Javascript, begins with the word ",
        op1: "Then",
        op2: "Else",
        op3: "If",
        op4: "Ok",
        answer: 3,
    },
    { 
        question: "JavaScript is a ___ -side programming language.",
        op1: "Client",
        op2: "Server",
        op3: "None",
        op4: "Both",
        answer: 4,
    },
    { 
    question: "What will the code return? Boolean(3 < 7)",
        op1: "True",
        op2: "False",
        op3: "NaN",
        op4: "SyntaxError",
        answer: 1,
    },
    { 
    question: "Inside which HTML element do we put the JavaScript?",
        op1: "<script>",
        op2: "<javascript>",
        op3: "<js>",
        op4: "<scripting>",
        answer: 1,
    },
    { 
    question: "Which of the following type of variable is visible everywhere in your JavaScript code?",
        op1: "Local variable",
        op2: "Global variable",
        op3: "Both of the above.",
        op4: "None of the above.",
        answer: 2,
    },
    { 
    question: "Arrays in JavaScript are defined by which of the following statements?",
        op1: "It is an ordered list of values",
        op2: "It is an ordered list of objects",
        op3: "It is an ordered list of string",
        op4: "It is an ordered list of functions",
        answer: 1,
    },
    { 
    question: "Which of the following is not an error in JavaScript?",
        op1: "Missing of Bracket",
        op2: "Division by zero",
        op3: "Syntax error",
        op4: "Missing of semicolons",
        answer: 2,
    },
    { 
    question: "Which of the following is correct about JavaScript?",
        op1: "JavaScript is a High-level language",
        op2: "JavaScript is an Object-Oriented language",
        op3: "JavaScript is Assembly-language",
        op4: "JavaScript is an Object-Based language",
        answer: 4,
    }, 
]
