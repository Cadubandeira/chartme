let currentStep = 0;
let userName = "";
let userEmail = "";
let testAnswers = [];
const questions = [
    {
        text: "Em geral, você diria que gosta de passar tempo sozinha(o)?",
        options: ["Discordo totalmente", "Discordo", "Neutro", "Concordo", "Concordo totalmente"],
         scores: [-2, -1, 0, 1, 2]
    },
    {
        text: "Você se considera uma pessoa muito sociável?",
        options: ["Discordo totalmente", "Discordo", "Neutro", "Concordo", "Concordo totalmente"],
        scores: [-2, -1, 0, 1, 2]

    },
      {
         text: "Você se pega, frequentemente, perdida(o) em seus pensamentos?",
        options: ["Discordo totalmente", "Discordo", "Neutro", "Concordo", "Concordo totalmente"],
        scores: [-2, -1, 0, 1, 2]
    },
    {
       text: "Você se considera uma pessoa criativa?",
        options: ["Discordo totalmente", "Discordo", "Neutro", "Concordo", "Concordo totalmente"],
         scores: [-2, -1, 0, 1, 2]
    },
     {
       text: "Você se preocupa com muita frequência?",
        options: ["Discordo totalmente", "Discordo", "Neutro", "Concordo", "Concordo totalmente"],
        scores: [-2, -1, 0, 1, 2]
    },
      {
         text: "Você se sente calma(o) mesmo em situações estressantes?",
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
              max: 10,
               ticks: {
                 stepSize: 1
               }
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

function showError(id, show, mandatory = false, message = ''){
   const errorElement = document.getElementById(id);
    errorElement.innerText = message;
   errorElement.classList.toggle('mandatory-error', mandatory);
    if(show){
         errorElement.style.display = 'block';
    } else {
         errorElement.style.display = 'none';
    }
}


function showEmailForm() {
    const name = document.getElementById('name').value;
     showError('name-error', false);
    if (!name) {
      showError('name-error', true, false, "Por favor, diga seu nome");
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
     showError('email-error', false);
    if (!email) {
        showError('email-error', true, true, "Campo obrigatório.");
      return;
    }

    if(!validateEmail(email)){
       showError('email-error', true, false, "E-mail inválido.");
        return;
    }

    userEmail = email;
     document.getElementById('email').removeEventListener('keypress', handleEnterEmail);
    document.getElementById('email-form').classList.add('hidden');
    document.getElementById('test-container').classList.remove('hidden');
     document.removeEventListener('keypress', handleEnterTest);
    loadQuestion();
}

function handleEnterTest(event) {
   if(event.key === 'Enter'){
        nextQuestion();
    }
}


function loadQuestion() {
    document.getElementById('question-number').innerText = `Pergunta ${currentStep + 1} de ${questions.length}`;
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
      label.insertBefore(input, label.firstChild);
      answerOptionsDiv.appendChild(label);

    });
        const firstRadioButton = document.querySelector('input[name="answer"]');
       if(firstRadioButton){
           firstRadioButton.focus();
       }
    // Attach enter listener only when options are loaded
    document.addEventListener('keypress', handleEnterTest);
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

     if(!selectedOption){
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
        // Calculate base scores for each trait
       testAnswers.forEach((answerIndex, questionIndex) => {
        const score = questions[questionIndex].scores[answerIndex];

           if(questionIndex === 0){
               traitScores[0] += score;
           }
           else if(questionIndex === 1){
                traitScores[1] += score;
            }
           else if(questionIndex === 2){
                traitScores[2] += score;
            }
           else if(questionIndex === 3){
                 traitScores[3] += score;
           }
            else if(questionIndex === 4){
                 traitScores[4] += score;
            }
           else if(questionIndex === 5){
                traitScores[5] += score;
           }
        });

         // Adjust scores to achieve 10 on "Strongly Agree" for two questions
          if(testAnswers[0]===4){
              traitScores[0] += 8;
          }

          if(testAnswers[1]===4){
              traitScores[1] += 8;
          }

          if(testAnswers[2]===4){
              traitScores[2] += 8;
          }

          if(testAnswers[3]===4){
              traitScores[3] += 8;
          }

          if(testAnswers[4]===4){
              traitScores[4] += 8;
          }
          if(testAnswers[5]===4){
              traitScores[5] += 8;
          }

       for(let i = 0; i < traitScores.length; i++){
           traitScores[i] = Math.max(0, traitScores[i])
       }
      return traitScores;
}


function showResults() {
    document.getElementById('test-container').classList.add('hidden');
    document.getElementById('results-container').classList.remove('hidden');
    document.querySelector('#results-container h2').innerText = ` ${userName}, aqui está o resultado do seu teste de personalidade`;
    document.querySelector('#results-container h1').innerText = ` `;


    let scores = calculateScores();


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
    summary +=  `Você tende a ser uma pessoa mais introvertida, o que significa que provavelmente valoriza momentos de reflexão e prefere ambientes calmos ou atividades individuais para recarregar suas energias.`;
   } else {
        summary += `Você tende a ser uma pessoa mais extrovertida, o que indica que é energizado(a) pela interação social e geralmente se sente confortável em ambientes dinâmicos e cheios de pessoas.`;
   }

   if(intuition > 0){
    summary += `Além disso, você parece ser uma pessoa intuitiva, confiando mais em padrões e possibilidades abstratas do que nos detalhes imediatos da realidade.`;
   } else {
    summary += `Além disso, você parece valorizar mais a percepção prática e concreta, preferindo lidar com fatos e experiências diretas.`;
   }

    if(creativity > 0) {
     summary +=`Sua criatividade é um ponto forte, sugerindo que você tem facilidade para gerar ideias inovadoras e explorar soluções originais para problemas`;
    } else {
       summary += `Sua criatividade pode ser menos evidente no momento, mas isso não significa que você não possa desenvolvê-la por meio de práticas que estimulem o pensamento criativo.`;
    }

    if(anxiety > calm){
        summary += `Também observamos uma tendência à ansiedade, o que pode significar que você frequentemente se preocupa ou se sente tenso(a) diante de desafios. Trabalhar em estratégias para lidar com o estresse pode ser benéfico para seu bem-estar.`;
    }
    else {
        summary += `Você demonstra uma tendência a permanecer calmo(a) mesmo em situações potencialmente estressantes, o que reflete uma habilidade valiosa para lidar com desafios de forma equilibrada.`;
    }


  return summary;
}

function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
//Focus on name field when page loads and attach keypress event listener
document.getElementById('name').focus();
document.getElementById('name').addEventListener('keypress', handleEnterName);