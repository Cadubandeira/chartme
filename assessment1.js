let currentStep = 0;
let userName = "User"; // Set a default user name
let userEmail = "user@email.com";  //Set a default user email
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



function startTest() {
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
    document.getElementById('question-number').innerText = `Questão ${currentStep + 1} de ${questions.length}`;
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

    let scores = calculateScores();


     radarChartConfig.data.datasets[0].data = scores;
    const ctx = document.getElementById('radarChart').getContext('2d');
     const myChart = new Chart(ctx, radarChartConfig);
    const summary= generateSummary(scores);
    document.getElementById('personality-summary').innerText = summary;
	const shareButton = document.getElementById('share-button');
    shareButton.addEventListener('click', () => shareOnWhatsApp(myChart));
}


async function shareOnWhatsApp(chart) {
    const message = `Olá! Acabei de fazer um teste de personalidade incrível e olha só o resultado:  ${document.querySelector('#results-container h2').innerText}, ${document.getElementById('personality-summary').innerText} \n Você também pode fazer o teste em https://cadubandeira.github.io/chartme/. Veja meus resultados em`;
    const encodedMessage = encodeURIComponent(message);

    const chartImageBase64 = chart.toBase64Image();

    try {
        const imageUrl = await uploadToImgBB(chartImageBase64);

        const whatsappUrl = `https://wa.me/?text=${encodedMessage}%0A${imageUrl}`;
         window.open(whatsappUrl, '_blank');
    } catch (error) {
        console.error("Error sharing the image:", error);
          alert("Error sharing image. Please try again.");  // Optional user message
    }
}



async function uploadToImgBB(base64Image) {
    const apiKey = '96b3d56795dfee4c17973e9e5184e3c2'; // Replace with your ImgBB API Key
    const formData = new FormData();
    const base64Data = base64Image.split(',')[1];
     const blob = b64toBlob(base64Data, 'image/png')
     formData.append('image', blob);

    try {
        const response = await fetch('https://api.imgbb.com/1/upload?key=' + apiKey, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if(data.success){
            return data.data.url;
        } else{
             throw new Error(`ImgBB API error! Details: ${JSON.stringify(data.error)}`);
        }
    } catch (error) {
         console.error('Error uploading image to ImgBB:', error);
        throw error;
    }
}

function b64toBlob(b64Data, contentType='', sliceSize=512) {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {type: contentType});
  return blob;
}


function generateSummary(scores) {
  const introversion = scores[0]
  const extroversion = scores[1];
  const intuition = scores[2];
  const creativity = scores[3];
  const anxiety = scores[4];
  const calm = scores[5];


    let summary =`Como seus resultados podem ser interpretados: \n`;
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

startTest();