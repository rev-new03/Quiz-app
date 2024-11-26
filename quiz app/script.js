const questions = [
    {
        question: "what is the powerhouse of the cell?",
        answers: [
            { text: "The Nazi's", correct: false},
            { text: "Modi ji", correct: true},
            { text: "My Mom", correct: false},
            { text: "Mitochondria", correct: false},
        ]
    },
    {
        question: "who is the sarcastic god ever known?",
        answers: [
            { text: "funny's cousin", correct: false},
            { text: "AkshayKumar", correct: false},
            { text: "chanandlier bing", correct: false},
            { text: "chandler it is", correct: true},
        ] 
    },
    {
        question: "what is my favourite hobby?",
        answers: [
            { text: "scrolling reels", correct: false},
            { text: "annoying homies", correct: false},
            { text: "playing guitar", correct: false},
            { text: "chess", correct: true},
        ] 
    },
    {
        question: "money is everything?",
        answers: [
            { text: "no, its about the memories", correct: false},
            { text: "not totally, but yeah", correct: false},
            { text: "money can buy happiness", correct: true},
            { text: "chamshishhhh", correct: false},
        ] 
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex= 0;
    score = 0;
    nextButton.innerHTML= "Dab";
    showQuestion();
}
 function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.textContent = questionNo + ". " + currentQuestion.question;
 
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct; 
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
     Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
     });
     nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
 nextButton.addEventListener("click",() =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
 })
startQuiz();
