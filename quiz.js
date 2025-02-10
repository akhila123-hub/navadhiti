




const questions = [
    {
        question: "What is the capital of United Kingdom?",
        choices: ["London", "Paris", "Scotland"],
        correct: 0, 
    },
    {
        question: "Which animal is the largest primate in the world?",
        choices: ["Monkey", "Gorilla", "Elephant"],
        correct: 1,
    },
    {
        question: "Which animal can sleep for three years?",
        choices: ["Sloth", "Snail", "Elephant"],
        correct: 1,
    },
];

let currentQuestion = 0;
let correctAnswers = 0;


function showQuestion() {
    
    const questionText = document.getElementById("question-text");
    questionText.textContent = questions[currentQuestion].question;
     
    const choices = document.querySelectorAll(".choice");
  
    choices.forEach((choice, index) => {
        choice.textContent = questions[currentQuestion].choices[index];
        choice.classList.remove("selected"); 
    });

    
    document.getElementById("feedback").textContent = "";
    document.querySelector(".question").style.display = "block";
    document.getElementById("submit").style.display = "block";
    document.getElementById("next").style.display = "none";
}


function checkAnswer() {
    const selectedChoice = document.querySelector(".choice.selected");

    if (!selectedChoice) {
        alert("Please select an answer before submitting.");
        return; 
    }

    let selectedIndex;
document.querySelectorAll(".choice").forEach((choice, index) => {
    if (choice.classList.contains("selected")) {
        selectedIndex = index;
    }
});

    const correctIndex = questions[currentQuestion].correct; 
    const feedback = document.getElementById("feedback");

    
    if (selectedIndex === correctIndex) {
        feedback.textContent = "Correct!";
        correctAnswers++;
    } else {
        feedback.textContent = "Wrong! The correct answer is "+questions[currentQuestion].choices[correctIndex];
    }

    
    document.getElementById("submit").style.display = "none";
    document.getElementById("next").style.display = "block";
}


function nextQuestion() {
    currentQuestion++; 
    if (currentQuestion < questions.length) {
        showQuestion(); 
    } else {
        showResult(); 
    }
}


function showResult() {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "You answered" + correctAnswers + "out of"  + questions.length + "correctly!";
    resultContainer.style.display = "block"; 

    
    document.querySelector(".question").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("next").style.display = "none";
}                                                                                                                       


document.querySelectorAll(".choice").forEach(choice => {
    choice.onclick = function () {
        
        document.querySelectorAll(".choice").forEach(c => c.classList.remove("selected"));
        this.classList.add("selected");
    };
});

