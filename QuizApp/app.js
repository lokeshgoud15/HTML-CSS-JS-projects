const quizData = [
  {
    question: "how old is QWERTY?",
    a: "18",
    b: "20",
    c: "23",
    d: "26",
    correct: "d",
  },
  {
    question: "what is the most used  programming Language?",
    a: "java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "a",
  },
  {
    question: "who is the  President of Us?",
    a: "poweisf",
    b: "shbsdffs",
    c: "cnddusfw",
    d: "fuhsf",
    correct: "b",
  },
  {
    question: "what does HTML stands for ?",
    a: "Hyper Text MarkUp Language",
    b: "Cascading Style Sheet",
    c: "jason Object Notation",
    d: "Heli Terminates Master Limborghini",
    correct: "a",
  },
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

const quest = document.getElementById("quest");
const a_text = document.getElementById("a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const clickBtn = document.getElementById("btn");

let currentQuiz = 0;

let score = 0;

loadQuiz();

//Load QUiz

function loadQuiz() {
  deSelectAnswers();
  const currentQuizData = quizData[currentQuiz];
  quest.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  b_text.innerText = currentQuizData.b;
}

//Option Selected

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function deSelectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

// event Listener

clickBtn.addEventListener("click", () => {
  const answer = getSelected();

  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly to at ${score}/${quizData.length} questions.</h2> <button onclick='location.reload()'>Reload </button>`;
    }
  }
});
