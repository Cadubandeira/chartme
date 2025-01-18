let currentStep = 0;
let userName = "";
let userEmail = "";
let testAnswers = [];
const questions = [
    {
        text: "I enjoy spending time alone.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
        scores: [-2, -1, 0, 1, 2]
    },
    {
        text: "I am a very social person.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
        scores: [-2, -1, 0, 1, 2]
    },
      {
        text: "I am often lost in thoughts.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
        scores: [-2, -1, 0, 1, 2]
    },
    {
        text: "I am creative person.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
        scores: [-2, -1, 0, 1, 2]
    },
     {
        text: "I am always worried.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
        scores: [-2, -1, 0, 1, 2]
    },
      {
        text: "I feel calm in stressful situations.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
        scores: [-2, -1, 0, 1, 2]
    }
];


const radarChartConfig = {
     type: 'radar',
      data: {
        labels: ['Introversion', 'Extroversion', 'Intuition', 'Creativity', 'Anxiety', 'Calm'],
        datasets: [{
            label: 'Personality Traits',
            data: [],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
          }]
      },
      options: {
          scales: {
           r: {
              min: -10,
              max: 10,
           }
          },
          elements: {
            line: {
              borderWidth: 3
            }
          }

      }
};


function showEmailForm() {
    const name = document.getElementById('name').value;
    if (!name) {
      alert("Please, enter your name.");
      return;
    }
    userName = name;
    document.getElementById('name-form').classList.add('hidden');
    document.getElementById('email-form').classList.remove('hidden');
    // Focus on the email input and attach the listener
     document.getElementById('email').focus();
    document.getElementById('email').addEventListener('keypress', handleEnterEmail);

}

function handleEnterEmail(event) {
    if(event.key === 'Enter'){
        startTest();
    }
}


function startTest() {
    const email = document.getElementById('email').value;
    if (!email) {
      alert("Please, enter your email.");
      return;
    }
    userEmail = email;
     document.getElementById('email').removeEventListener('keypress', handleEnterEmail);
    document.getElementById('email-form').classList.add('hidden');
    document.getElementById('test-container').classList.remove('hidden');
    loadQuestion();
}

function handleEnterTest(event) {
   if(event.key === 'Enter'){
        nextQuestion();
    }
}


function loadQuestion() {
    document.getElementById('question-number').innerText = `Question ${currentStep + 1} of ${questions.length}`;
    const currentQuestion = questions[currentStep];
    document.getElementById('question-text').innerText = currentQuestion.text;
     const answerOptionsDiv = document.getElementById('answer-options');
      answerOptionsDiv.innerHTML = '';
     currentQuestion.options.forEach((option, index) => {
       const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'answer';
      input.value = index;
      input.id = `option-${index}`;
     const label = document.createElement('label');
      label.innerText = option;
      label.setAttribute('for', `option-${index}`);
        label.appendChild(input);
      answerOptionsDiv.appendChild(label);

    });
    // Attach enter listener only when options are loaded
    document.addEventListener('keypress', handleEnterTest);
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
     if(!selectedOption){
         alert('Please select an answer');
         return;
     }
    document.removeEventListener('keypress', handleEnterTest); // Remove listener to avoid multiple triggers
    testAnswers.push(parseInt(selectedOption.value));
    currentStep++;
     if (currentStep < questions.length) {
        loadQuestion();
    } else {
      showResults();
    }
}


function calculateScores() {
    const traitScores = [0, 0, 0, 0, 0, 0];
    testAnswers.forEach((answerIndex,questionIndex)=>{
        const question = questions[questionIndex];
        const score = question.scores[answerIndex];
        if(questionIndex===0){
           traitScores[0] += score;
        }
        else if(questionIndex === 1) {
             traitScores[1] += score;
        }
        else if (questionIndex === 2) {
             traitScores[2] += score;
        }
         else if(questionIndex===3) {
             traitScores[3] +=score;
         } else if(questionIndex===4) {
            traitScores[4] += score;
        }else if(questionIndex === 5){
            traitScores[5] +=score;
        }

    });
   return traitScores;
}


function showResults() {
    document.getElementById('test-container').classList.add('hidden');
    document.getElementById('results-container').classList.remove('hidden');

    const scores = calculateScores();
     radarChartConfig.data.datasets[0].data = scores;
    const ctx = document.getElementById('radarChart').getContext('2d');
     new Chart(ctx, radarChartConfig);
    const summary= generateSummary(scores);
    document.getElementById('personality-summary').innerText = summary;

}

function generateSummary(scores) {
  const introversion = scores[0]
  const extroversion = scores[1];
  const intuition = scores[2];
  const creativity = scores[3];
  const anxiety = scores[4];
  const calm = scores[5];


   let summary =`Based on your score: \n`;
   if (introversion > extroversion) {
    summary +=  `You tend to be more introverted.`;
   } else {
        summary += `You tend to be more extroverted.`;
   }

   if(intuition > 0){
    summary += ` You are an intuitive person. `;
   } else {
    summary += ` You are not an intuitive person. `;
   }

    if(creativity > 0) {
     summary +=`You are a very creative person.`;
    } else {
       summary += `You are not very creative person.`;
    }

    if(anxiety > calm){
        summary += ` You tend to be more anxious.`;
    }
    else {
        summary += `You tend to be a calm person`;
    }


  return summary;
}
