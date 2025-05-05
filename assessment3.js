let currentStep = 0;
let currentSection = 0;
let userName = "User";
let userEmail = "user@email.com";
let testAnswers = [];
const sections = [
    {
        title: "Relacionamento Próximo (RP)",
        instruction:
            "Capacidade de buscar ativamente e construir conexões com colegas de diferentes áreas e níveis hierárquicos.",
        questions: [
            {
                text: "Pergunta 1 sobre Relacionamento Próximo:",
                options: [
                    "Sempre",
                    "Frequentemente",
                    "Ocasionalmente",
                    "Raramente",
                ],
            },
            {
                text: "Pergunta 2 sobre Relacionamento Próximo:",
                options: [
                    "Sempre",
                    "Frequentemente",
                    "Ocasionalmente",
                    "Raramente",
                ],
            },
            {
                text: "Pergunta 3 sobre Relacionamento Próximo:",
                options: [
                    "Sempre",
                    "Frequentemente",
                    "Ocasionalmente",
                    "Raramente",
                ],
            },
            {
                text: "Pergunta 4 sobre Relacionamento Próximo:",
                options: [
                    "Sempre",
                    "Frequentemente",
                    "Ocasionalmente",
                    "Raramente",
                ],
            },
            {
                text: "Pergunta 5 sobre Relacionamento Próximo:",
                options: [
                    "Sempre",
                    "Frequentemente",
                    "Ocasionalmente",
                    "Raramente",
                ],
            },
        ],
    },
    {
        title: "Constância de Fomento (CF)",
        instruction:
            "Capacidade de manter conexões vivas com interações de valor frequentes e relevantes.",
        questions: [
            {
                text: "Pergunta 1 sobre Constância de Fomento:",
                options: [
                    "Sempre",
                    "Frequentemente",
                    "Ocasionalmente",
                    "Raramente",
                ],
            },
            {
                text: "Pergunta 2 sobre Constância de Fomento:",
                options: [
                    "Sempre",
                    "Frequentemente",
                    "Ocasionalmente",
                    "Raramente",
                ],
            },
            {
                text: "Pergunta 3 sobre Constância de Fomento:",
                options: [
                    "Sempre",
                    "Frequentemente",
                    "Ocasionalmente",
                    "Raramente",
                ],
            },
            {
                text: "Pergunta 4 sobre Constância de Fomento:",
                options: [
                    "Sempre",
                    "Frequentemente",
                    "Ocasionalmente",
                    "Raramente",
                ],
            },
            {
                text: "Pergunta 5 sobre Constância de Fomento:",
                options: [
                    "Sempre",
                    "Frequentemente",
                    "Ocasionalmente",
                    "Raramente",
                ],
            },
        ],
    },
    {
        title: "Alinhamento de Interesses (AI)",
        instruction:
            "Capacidade de identificar interesses em comum e também de criar novos interesses compartilhados, construindo parcerias genuínas.",
        questions: [
            {
                text: "Pergunta 1 sobre Alinhamento de Interesses:",
                options: [
                    "Sempre",
                    "Frequentemente",
                    "Ocasionalmente",
                    "Raramente",
                ],
            },
            {
                text: "Pergunta 2 sobre Alinhamento de Interesses:",
                options: [
                    "Sempre",
                    "Frequentemente",
                    "Ocasionalmente",
                    "Raramente",
                ],
            },
            {
                text: "Pergunta 3 sobre Alinhamento de Interesses:",
                options: [
                    "Sempre",
                    "Frequentemente",
                    "Ocasionalmente",
                    "Raramente",
                ],
            },
            {
                text: "Pergunta 4 sobre Alinhamento de Interesses:",
                options: [
                    "Sempre",
                    "Frequentemente",
                    "Ocasionalmente",
                    "Raramente",
                ],
            },
            {
                text: "Pergunta 5 sobre Alinhamento de Interesses:",
                options: [
                    "Sempre",
                    "Frequentemente",
                    "Ocasionalmente",
                    "Raramente",
                ],
            },
        ],
    },
    {
        title: "Atuação Estratégica (AE)",
        instruction:
            "Ações intencionais e proativas para agregar valor em interações, demonstrando valor com discrição e naturalidade.",
        questions: [
            {
                text: "Pergunta 1 sobre Atuação Estratégica:",
                options: [
                    "Sempre",
                    "Frequentemente",
                    "Ocasionalmente",
                    "Raramente",
                ],
            },
            {
                text: "Pergunta 2 sobre Atuação Estratégica:",
                options: [
                    "Sempre",
                    "Frequentemente",
                    "Ocasionalmente",
                    "Raramente",
                ],
            },
            {
                text: "Pergunta 3 sobre Atuação Estratégica:",
                options: [
                    "Sempre",
                    "Frequentemente",
                    "Ocasionalmente",
                    "Raramente",
                ],
            },
            {
                text: "Pergunta 4 sobre Atuação Estratégica:",
                options: [
                    "Sempre",
                    "Frequentemente",
                    "Ocasionalmente",
                    "Raramente",
                ],
            },
            {
                text: "Pergunta 5 sobre Atuação Estratégica:",
                options: [
                    "Sempre",
                    "Frequentemente",
                    "Ocasionalmente",
                    "Raramente",
                ],
            },
        ],
    },
];

const questionOptions = [
    { text: "Sempre", value: 4 },
    { text: "Frequentemente", value: 3 },
    { text: "Ocasionalmente", value: 2 },
    { text: "Raramente", value: 1 },
];

function createQuestionElement(question, sectionId, questionIndex) {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const label = document.createElement("label");
    label.textContent = question.text;
    label.setAttribute("for", `<span class="math-inline">\{sectionId\}\-q</span>{questionIndex + 1}`);
    questionDiv.appendChild(label);

    const select = document.createElement("select");
    select.id = `<span class="math-inline">\{sectionId\}\-q</span>{questionIndex + 1}`;
    select.name = `<span class="math-inline">\{sectionId\}\-q</span>{questionIndex + 1}`;

    questionOptions.forEach((option, index) => {
        const optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        select.appendChild(optionElement);
    });

    questionDiv.appendChild(select);
    return questionDiv;
}

function displaySection() {
    const form = document.getElementById("assessment-form");
    form.innerHTML = ""; // Clear previous content

    const section = sections[currentSection];

    const title = document.createElement("h2");
    title.textContent = section.title;
    form.appendChild(title);

    const instruction = document.createElement("p");
    instruction.textContent = section.instruction;
    form.appendChild(instruction);

    section.questions.forEach((question, index) => {
        const questionElement = createQuestionElement(question, section.title.replace(/ /g, '').toLowerCase(), index);
        form.appendChild(questionElement);
    });

    // Navigation buttons
    const prevButton = document.createElement("button");
    prevButton.type = "button";
    prevButton.id = "prev-section";
    prevButton.textContent = "Anterior";
    prevButton.addEventListener("click", showPreviousSection);
    form.appendChild(prevButton);

    const nextButton = document.createElement("button");
    nextButton.type = "button";
    nextButton.id = "next-section";
    nextButton.textContent = "Próximo";
    nextButton.addEventListener("click", showNextSection);
    form.appendChild(nextButton);

    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.id = "submit-test";
    submitButton.textContent = "Finalizar Teste";
    submitButton.addEventListener("click", submitTest);
    form.appendChild(submitButton);

    // Hide/show buttons based on current section
    prevButton.style.display = currentSection === 0 ? "none" : "";
    nextButton.style.display = currentSection === sections.length - 1 ? "none" : "";
    submitButton.style.display = currentSection === sections.length - 1 ? "" : "none";
}

function showNextSection() {
    saveAnswers();
    if (currentSection < sections.length - 1) {
        currentSection++;
        displaySection();
    }
}

function showPreviousSection() {
    saveAnswers();
    if (currentSection > 0) {
        currentSection--;
        displaySection();
    }
}

function saveAnswers() {
    const section = sections[currentSection];
    section.questions.forEach((question, index) => {
        const select = document.getElementById(`<span class="math-inline">\{section\.title\.replace\(/ /g, ''\)\.toLowerCase\(\)\}\-q</span>{index + 1}`);
        if (select) {
            testAnswers[currentSection * 5 + index] = parseInt(select.value, 10);
        }
    });
}

function submitTest() {
    saveAnswers();
    document.getElementById('assessment-form').classList.add('hidden');
    document.getElementById('initial-modal').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    displayResults();
}

function calculateScores() {
    let sectionScores = sections.map((_, index) => {
        let sectionTotal = 0;
        for (let i = 0; i < 5; i++) {
            sectionTotal += testAnswers[index * 5 + i] || 0;
        }
        return sectionTotal;
    });

    let totalScore = sectionScores.reduce((a, b) => a + b, 0);

    return { totalScore, sectionScores };
}

function getResultInterpretation(totalScore) {
    const maxScore = sections.length * 5 * 4; // Total sections * questions per section * max points per question
    const percentage = (totalScore / maxScore) * 100;

    if (percentage >= 90) {
        return "Excelente! Seu networking é altamente eficaz em todas as áreas.";
    } else if (percentage >= 70) {
        return "Bom! Seu networking é forte, mas há espaço para melhorias.";
    } else if (percentage >= 50) {
        return "Regular. Seu networking pode ser aprimorado em várias áreas.";
    } else {
        return "Abaixo da média. Há necessidade de desenvolver significativamente suas habilidades de networking.";
    }
}

function displayResults() {
    const { totalScore, sectionScores } = calculateScores();
    const totalResultTitle = document.getElementById("totalResultTitle");
    const totalResult = document.getElementById("totalResult");
    const totalResultInterpretation = document.getElementById(
        "totalResultInterpretation"
    );
    const chartContainer = document.getElementById("chart-container");

    totalResultTitle.innerText = "Seu índice total foi de:";
    totalResult.innerText = `${totalScore} pontos`;
    totalResultInterpretation.innerText = getResultInterpretation(totalScore);

    if (chartContainer) {
        displayChart(sectionScores);
    }
}

function displayChart(sectionScores) {
    const ctx = document.getElementById("result-chart").getContext("2d");
    const sectionLabels = sections.map((section) => section.title); // Get section titles

    const chartData = {
        labels: sectionLabels, // Use section titles as labels
        datasets: [
            {
                label: "Pontuação por Seção",
                data: sectionScores,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        scales: {
            r: {
                beginAtZero: true,
                max: 20, // Adjust the max value to match the maximum possible score per section (5 questions * 4 points max)
            },
        },
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
        },
    };

    new Chart(ctx, {
        type: "radar",
        data: chartData,
        options: chartOptions,
    });
}

function startTest() {
    document.getElementById('initial-modal').classList.add('hidden');
    document.getElementById('assessment-form').classList.remove('hidden');
    displaySection();
}

function showLoading() {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.id = 'loading-overlay';
    loadingOverlay.style.position = 'fixed';
    loadingOverlay.style.top = '0';
    loadingOverlay.style.left = '0';
    loadingOverlay.style.width = '100%';
    loadingOverlay.style.height = '100%';
    loadingOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent black
    loadingOverlay.style.zIndex = '1000'; // High z-index to be on top of everything
    loadingOverlay.style.display = 'flex';
    loadingOverlay.style.justifyContent = 'center';
    loadingOverlay.style.alignItems = 'center';

    const loadingMessage = document.createElement('div');
    loadingMessage.id = 'loading-message';
    loadingMessage.textContent = 'Salvando os resultados...';
    loadingMessage.style.color = 'white';
    loadingMessage.style.fontSize = '1.5em';

    loadingOverlay.appendChild(loadingMessage);
    document.body.appendChild(loadingOverlay);
}

function hideLoading() {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.remove();
    }
}

async function saveResults() {
    showLoading(); // Show loading overlay

    const { totalScore, sectionScores } = calculateScores();
    const resultInterpretation = getResultInterpretation(totalScore);

    if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const results = {
            userId: userId,
            userName: userName,
            userEmail: userEmail,
            testAnswers: testAnswers,
            totalScore: totalScore,
            sectionScores: sectionScores,
            resultInterpretation: resultInterpretation,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        };

        try {
            await db.collection("assessmentResults").add(results);
            hideLoading(); // Hide loading overlay
            alert("Resultados salvos com sucesso!");
        } catch (error) {
            console.error("Erro ao salvar os resultados:", error);
            hideLoading(); // Hide loading overlay in case of error
            alert("Erro ao salvar os resultados. Por favor, tente novamente.");
        }
    } else {
        console.log("Usuário não autenticado.");
        hideLoading();
        alert("Usuário não autenticado. Por favor, faça login para salvar os resultados.");
    }
}

function dataURLToBlob(dataURL) {
    const BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) === -1) {
      const parts = dataURL.split(',');
      const contentType = parts[0].split(':')[1];
      const raw = parts[1];
  
      return new Blob([raw], {type: contentType});
    }
  
    const parts = dataURL.split(BASE64_MARKER);
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
  
    const uInt8Array = new Uint8Array(rawLength);
  
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
  
    return new Blob([uInt8Array], {type: contentType});
  }
  
  async function uploadChartImage(userId, chartBase64) {
    try {
      const chartBlob = dataURLToBlob(chartBase64);
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(`users/${userId}/chart.png`);
      
      await fileRef.put(chartBlob);
      const downloadURL = await fileRef.getDownloadURL();
      return downloadURL;
  
    } catch (error) {
      console.error("Error uploading chart image:", error);
      throw error; // Propagate the error to the caller
    }
  }
  

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-test-button');
    const initialModal = document.getElementById('initial-modal');
    if (startButton) {
        startButton.addEventListener('click', startTest);
    }
    const saveResultsButton = document.getElementById('save-results-button');
    if (saveResultsButton) {
        saveResultsButton.addEventListener('click', () => {
            if (auth.currentUser) {
                saveResults();
            } else {
                console.log("User is not logged in.");
                alert("Usuário não autenticado. Por favor, faça login para salvar os resultados.");
            }
        });
    }

    initialModal.classList.remove('hidden');
});
// Make these functions globally accessible
window.showLoading = showLoading;
window.hideLoading = hideLoading;
window.loadingMessage = loadingMessage; // Also expose the loadingMessage element