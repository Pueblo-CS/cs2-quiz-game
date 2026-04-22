console.log("Script started");

let questions = [
    {
        question: "What is the capital of Arizona?",
        option1: "Tucson",
        option2: "Phoenix",
        option3: "Yuma",
        option4: "Flagstaff",
        answer: "Phoenix"
    },
    {
        question: "How many nickels in a quarter?",
        option1: 25,
        option2: 10,
        option3: 5,
        option4: 3,
        answer: 5
    },
    {
        question: "What gets wetter as it dries?",
        option1: "Paint",
        option2: "A dolphin",
        option3: "Hair",
        option4: "A towel",
        answer: "A towel"
    }
]

let userAnswers = [];

let index = 0;

function showNextQuestion() {
    if (index == questions.length) {
        checkAnswers();
        return;
    }
    let current = questions[index];
    
    let questionText = document.getElementById("question");
    questionText.innerText = current.question;

    let choice1 = document.getElementById("option1text");
    choice1.innerText = current.option1;

    let choice2 = document.getElementById("option2text");
    choice2.innerText = current.option2;

    let choice3 = document.getElementById("option3text");
    choice3.innerText = current.option3;

    let choice4 = document.getElementById("option4text");
    choice4.innerText = current.option4;
}

function submitAnswer(event) {
    event.preventDefault();
    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");
    let option4 = document.getElementById("option4");

    let currentQ = questions[index];
    if (option1.checked) {
        userAnswers.push(currentQ.option1);
        option1.checked = false;
    }
    else if (option2.checked) {
        userAnswers.push(currentQ.option2);
        option2.checked = false;
    }
    else if (option3.checked) {
        userAnswers.push(currentQ.option3);
        option3.checked = false;
    }
    else if (option4.checked) {
        userAnswers.push(currentQ.option4);
        option4.checked = false;
    }
    else {
        alert("You must select an answer");
        return;
    }

    console.log(userAnswers);
    index++;
    showNextQuestion();
}

function checkAnswers() {
    let numCorrect= 0;
    for (let i = 0; i < userAnswers.length; i++) {
        let userAns = userAnswers[i];
        let question = questions[i];
        if (userAns == question.answer) {
            numCorrect++;
        }
    }
    alert("You got " + numCorrect + " out of " + questions.length + " correct!");
    index = 0;
    showNextQuestion();
}

showNextQuestion();