import { questions } from "./data.js";

const questionElement = document.getElementById('question');
const answerButton = document.querySelectorAll('.js-button');
const nextButton = document.getElementById('next-btn');

questionElement.innerText = questions[0].question;

answerButton.forEach((button, index) => {
    button.innerHTML = questions[0].answers[index].text;
});

answerButton.forEach((button) => {
    button.addEventListener('click', ()=>{
        const target = document.querySelector('.js-next-button');
        console.log(target);
        if (target.classList.contains('next-second-button')){
            console.log('hello')
            target.classList.remove('next-second-button')
        }
        else{
            target.classList.add('next-second-button');
        }
    });
});