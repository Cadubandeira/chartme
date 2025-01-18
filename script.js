let currentStep = 0;
let userName = "";
let userEmail = "";
let testAnswers = [];
const questions = [
    {
        text: "Eu gosto de passar tempo sozinha(o).",
        options: ["Discordo totalmente", "Discordo", "Neutro", "Concordo", "Concordo totalmente"],
        scores: [-2, -1, 0, 1, 2]
    },
    {
        text: "Eu sou uma pessoa muito sociável.",
        options: ["Discordo totalmente", "Discordo", "Neutro", "Concordo", "Concordo totalmente"],
        scores: [-2, -1, 0, 1, 2]
    },
      {
        text: "Eu frequentemente fico perdida(o) em pensamentos.",
        options: ["Discordo totalmente", "Discordo", "Neutro", "Concordo", "Concordo totalmente"],
        scores: [-2, -1, 0, 1, 2]
    },
    {
        text: "Eu sou uma pessoa criativa.",
        options: ["Discordo totalmente", "Discordo", "Neutro", "Concordo", "Concordo totalmente"],
        scores: [-2, -1, 0, 1, 2]
    },
     {
        text: "Eu estou sempre preocupada(o).",
        options: ["Discordo totalmente", "Discordo", "Neutro", "Concordo", "Concordo totalmente"],
        scores: [-2, -1, 0, 1, 2]
    },
      {
        text: "Eu me sinto calma(o) em situações estressantes.",
        options: ["Discordo totalmente", "Discordo", "Neutro", "Concordo", "Concordo totalmente"],
        scores: [-2, -1, 0, 1, 2]
    }
];


const radarChartConfig = {
     type: 'radar',
      data: {
        labels: ['Introversão', 'Extroversão', 'Intuição', 'Criatividade', 'Ansiedade', 'Tranquilidade'],
        datasets: [{
            label: 'Traços de Personalidade',
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
              min: 0,
              max: 7,
           }
          },
          elements: {
            line: {
              borderWidth: 3
            }
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function(context) {
                  const label = context.label || '';
                  const value = context.parsed.r || 0;

                  return `${label}: ${value}`;
                }
              }
            }
        }


      }
};

function handleEnterName(event){
    if (event.key === 'Enter') {
        showEmailForm();
     }
}


function showEmailForm() {
    const name = document.getElementById('name').value;
    if (!name) {
      alert("Please, enter your name.");
      return;
    }
     document.getElementById('name').removeEventListener('keypress', handleEnterName);
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

    let scores = calculateScores();
    scores = scores.map(score => Math.max(0, score));
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


   let summary =`Baseado nos seus resultados: \n`;
   if (introversion > extroversion) {
    summary +=  `Você tende a ser uma pessoa mais introvertida.`;
   } else {
        summary += `Você tende a ser uma pessoa mais extrovertida.`;
   }

   if(intuition > 0){
    summary += ` E também pode ser considerada intuitiva. `;
   } else {
    summary += ` E não é considerada muito intuitiva. `;
   }

    if(creativity > 0) {
     summary +=`Sua criatividade é evidente.`;
    } else {
       summary += `Talvez você possa exercitar mais sua criatividade.`;
    }

    if(anxiety > calm){
        summary += ` Também notamos que tem seus momentos de ansiosedade.`;
    }
    else {
        summary += `Também notamos que costuma ser calma(o).`;
    }


  return summary;
}
//Focus on name field when page loads and attach keypress event listener
document.getElementById('name').focus();
document.getElementById('name').addEventListener('keypress', handleEnterName);
