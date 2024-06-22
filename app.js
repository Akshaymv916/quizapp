const questions = [{
    question: "Python is known as:?",
    a: "A compiled language",
    b: "An interpreted language",
    c: "A machine language",
    d: "An assembly language",
    correct: "b",
},
{
    question: "Python is a:?",
    a: "Low-level language",
    b: "High-level language",
    c: "Middle-level language",
    d: "Machine-level language",
    correct: "b",
},
{
    question: "Which of these data types does Python not natively support?",
    a: "List",
    b: "Tuple",
    c: "Dictionaries",
    d: "Arrays",
    correct: "c",
},
{
    question: "Which of the following is a mutable data type in Python?",
    a: "String",
    b: "Tuple",
    c: "List",
    d: "Integer",
    correct: "c",
}
];
let index = 0;
let cur = 0,
wrong = 0,
total = questions.length;
let qustbox = document.getElementById("qustbox");
let options = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizend()
}
reset()
const data = questions[index]
qustbox.innerHTML = `${index + 1}) ${data.question}`
options[0].nextElementSibling.innerText = data.a
options[1].nextElementSibling.innerText = data.b
options[2].nextElementSibling.innerText = data.c
options[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = questions[index]
    const ans = getanswer()
    if (ans === data.correct) {
        cur++;
        document.getElementById('box')
    } else {
        wrong++;
    }
    index++;
    loadQuestion()
}
)

const getanswer = () => {
let ans;
options.forEach(
    (input) => {
        if (input.checked) {
            ans = input.value;
        }
    }
)
return ans;
}

const reset = () => {
options.forEach(
    (input) => {
        input.checked = false;
    }
)
}

const quizend = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col" style="color:red;  align-items: center;">
        <h2 class="w-300"> Your Score is ${cur} / ${total} </h2>
    </div>
`
}
loadQuestion(index);