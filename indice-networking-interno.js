let currentStep = 0;
let currentSection = 0;
let userName = "User";
let userEmail = "user@email.com";
let testAnswers = [];
const sections = [
    {
        title: "1. RELACIONAMENTO PRÓXIMO (RP)",
        instruction:
            "O Relacionamento Próximo (RP) é a capacidade de buscar ativamente e construir conexões com colegas de diferentes áreas e níveis hierárquicos, mostrando interesse genuíno e iniciativa para se aproximar, fortalecer laços e ampliar a rede interna de relações.",
        questions: [
            {
                text: "Participo de projetos interdepartamentais ou colaborações fora da minha área imediata.",
                options: [
                    "Sempre: Participo ativamente de projetos ou colaborações interdepartamentais, buscando integrar diferentes áreas da empresa.",
                    "Frequentemente: Participo de projetos interdepartamentais com boa frequência, mas nem sempre de forma proativa.",
                    "Ocasionalmente: Participo apenas quando sou convidado ou quando o projeto exige minha presença.",
                    "Raramente: Raramente participo ou procuro oportunidades de interação entre diferentes áreas.",
                ],
            },
            {
                text: "Busco conhecer colegas de diferentes níveis hierárquicos de maneira genuína e respeitosa.",
                options: [
                    "Sempre: Busco e valorizo o contato com colegas de todos os níveis hierárquicos de forma genuína e respeitosa.",
                    "Frequentemente: Normalmente interajo com colegas de diferentes níveis, mas nem sempre priorizo essa aproximação.",
                    "Ocasionalmente: Conheço colegas de outros níveis apenas se houver uma necessidade pontual.",
                    "Raramente: Mantenho contato apenas com pessoas do meu nível hierárquico ou departamento.",
                ],
            },
            {
                text: "Demonstro interesse real pelas metas e desafios dos colegas e da empresa.",
                options: [
                    "Sempre: Demonstro verdadeiro interesse pelos objetivos dos colegas e pelas metas da organização, buscando colaborar sempre que possível.",
                    "Frequentemente: Mostro interesse pelas metas dos colegas e da empresa, mas isso acontece de forma mais pontual.",
                    "Ocasionalmente: Demonstro interesse apenas quando as metas afetam diretamente meu trabalho.",
                    "Raramente: Tenho pouco interesse ou envolvimento com as metas dos colegas ou da empresa.",
                ],
            },
            {
                text: "Aproveito interações informais (cafés, eventos internos) para fortalecer relações.",
                options: [
                    "Sempre: Uso ativamente essas ocasiões para fortalecer vínculos e criar conexões genuínas.",
                    "Frequentemente: Aproveito algumas interações informais, mas nem sempre de maneira intencional.",
                    "Ocasionalmente: Participo de eventos informais, mas raramente os utilizo para aprofundar relações.",
                    "Raramente: Evito ou não aproveito eventos informais para me conectar com colegas.",
                ],
            },
            {
                text: "Facilito a integração de pessoas e conhecimentos entre áreas da organização.",
                options: [
                    "Sempre: Busco de forma intencional integrar pessoas e compartilhar conhecimentos entre áreas distintas.",
                    "Frequentemente: Promovo integrações entre áreas em algumas oportunidades.",
                    "Ocasionalmente: Facilito integrações apenas quando requisitado ou por necessidade do projeto.",
                    "Raramente: Não costumo atuar para integrar pessoas ou promover troca entre áreas diferentes.",
                ],
            },
        ],
    },
    {
        title: "2. FREQUÊNCIA",
        instruction:
            "A frequência consiste na regularidade e no ritmo com que se interage com suas conexões (por exemplo, semanalmente, mensalmente ou trimestralmente), mantendo o relacionamento ativo por meio de contatos presenciais e online, com foco na interação pessoal. A frequência avalia o nível de consistência e a regularidade da interação na interação, mantendo a conexão ativa.",
        questions: [
            {
                text: "Regularidade das interações\nCom que frequência você mantém contato ativo com essa pessoa?",
                options: [
                    "Sempre: Mantemos contato contínuo e natural, independentemente do meio. A comunicação flui regularmente, seja por mensagens, encontros presenciais ou ligações, sem necessidade de grandes esforços para que aconteça. Nossa conexão tem uma cadência orgânica, e interagimos de maneira regular, sem grandes intervalos de silêncio.",
                    "Frequentemente: Interagimos regularmente, mas às vezes passamos períodos sem contato. Quando há uma pausa, retomamos naturalmente, mas sem um padrão fixo. Em alguns momentos, o contato é mais intenso, mas pode haver fases de menor interação sem que a relação seja prejudicada.",
                    "Ocasionalmente: O contato ocorre de forma esporádica, sem um padrão definido. Às vezes, passamos longos períodos sem interação e só retomamos quando há uma necessidade ou evento específico. É comum que a relação tenha altos e baixos, com períodos de proximidade e outros de distanciamento.",
                    "Raramente: Nossa relação está praticamente inativa, sem trocas consistentes ou interações significativas. Se nos falamos, é por acaso ou porque alguma situação exige. O contato é mínimo e só acontece quando há um fator externo forçando essa interação.",
                ],
            },
            {
                text: "Tempo de Duração da Relação\nEssa relação tem se mantido ativa ao longo do tempo, ou é algo recente ou passageiro?",
                options: [
                    "Sempre: Essa é uma relação de longa duração, construída ao longo do tempo com consistência. Independentemente de mudanças externas, conseguimos manter a conexão ativa e significativa, preservando o vínculo mesmo diante de novas fases ou desafios.",
                    "Frequentemente: A relação já existe há algum tempo e tem se mantido relativamente ativa. No entanto, em algumas fases, houve períodos de menor contato, embora a conexão nunca tenha sido completamente perdida.",
                    "Ocasionalmente: Essa relação é mais recente ou passou por grandes períodos de afastamento. Embora já tenhamos interagido em diferentes momentos, o vínculo não se manteve forte ou contínuo ao longo do tempo.",
                    "Raramente: A relação é passageira ou surgiu apenas em um contexto específico. Não há um histórico de conexão sólida ou de longa duração, e a interação foi pontual ou restrita a uma fase específica.",
                ],
            },
            {
                text: "Retomada da conexão após períodos sem contato\nQuando há um tempo sem contato, como você age?",
                options: [
                    "Sempre: Retomo o contato naturalmente, independentemente do tempo passado. Não me sinto desconfortável em reaproximar e, sempre que percebo uma oportunidade, envio uma mensagem ou marco uma conversa. Mesmo depois de longos períodos sem contato, a relação continua fluida e sem constrangimentos.",
                    "Frequentemente: Tento reativar a relação, mas às vezes demoro para tomar essa iniciativa. Se o tempo sem contato for muito longo, fico um pouco hesitante, mas ainda faço o movimento. Geralmente, a retomada do contato depende da situação ou do contexto que nos reúne novamente.",
                    "Ocasionalmente: Retomo o contato apenas se houver um motivo claro, como uma necessidade específica ou uma situação que exija essa interação. Se não houver um motivo evidente, não faço nada. A relação pode ficar meses ou até anos sem interação até que algo específico justifique o contato.",
                    "Raramente: Se passamos um tempo sem contato, dificilmente eu retomo a conexão. A relação vai esfriando até desaparecer, a menos que a outra pessoa tome a iniciativa primeiro. A desconexão se torna cada vez mais permanente, tornando improvável qualquer reaproximação futura.",
                ],
            },
            {
                text: "Evolução da relação ao longo do tempo\nComo essa relação tem se desenvolvido?",
                options: [
                    "Sempre: A confiança e o envolvimento mútuo aumentaram ao longo do tempo, tornando a relação mais sólida e valiosa. Quanto mais interagimos, mais a conexão se fortalece. Existe um histórico de evolução e amadurecimento na forma como nos relacionamos.",
                    "Frequentemente: A relação se mantém estável, sem grandes avanços, mas sem perder qualidade. Não necessariamente nos tornamos mais próximos, mas há consistência na conexão. O nível de interação não mudou muito desde o início, mas ainda é positivo.",
                    "Ocasionalmente: A relação tem esfriado com o tempo e há menos troca de valor. Ainda há interação, mas cada vez mais espaçada e menos significativa. Percebo que estamos nos distanciando progressivamente, sem um esforço concreto para reverter isso.",
                    "Raramente: A conexão perdeu força e praticamente não existe mais. Se comparada ao passado, nossa relação já não tem o mesmo impacto ou importância. O afastamento aconteceu gradualmente, até o ponto em que nos tornamos praticamente desconhecidos novamente.",
                ],
            },
            {
                text: "Impacto da relação no seu desenvolvimento\nEssa conexão tem trazido benefícios para você e para a outra pessoa?",
                options: [
                    "Sempre: Essa relação tem sido enriquecedora, gerando oportunidades, crescimento profissional e aprendizados constantes. Sinto que tanto eu quanto essa pessoa ganhamos valor a partir dessa conexão. É um relacionamento que fortalece minha trajetória e se traduz em experiências positivas.",
                    "Frequentemente: Há benefícios na relação, mas nem sempre são tão evidentes ou constantes. Algumas interações são produtivas, mas outras acabam sendo neutras. Embora essa conexão já tenha sido mais relevante, ainda há momentos em que ela agrega valor.",
                    "Ocasionalmente: Vejo pouco impacto dessa conexão na minha vida profissional. Às vezes, há algo útil, mas na maior parte do tempo não há ganhos relevantes. É uma relação mais social do que estratégica, sem impacto prático na minha evolução.",
                    "Raramente: Essa relação não traz benefícios nem gera valor para mim. Parece ser apenas uma conexão passiva, sem impacto prático. Não vejo utilidade em manter esse vínculo ativo.",
                ],
            },
        ],
    },
    {

        title: "3. SINTONIA DE INTERESSES",
        instruction:
            "A Sintonia de Interesses se refere à capacidade de prospectar, identificar e usar objetivos e interesses em comum para fortalecer as relações, compartilhando assuntos, conhecimentos, experiencias, valores ou desafios diversos, priorizando o contato humano e a construção de confiança. Essa dimensão avalia o nível de alinhamento de valores, interesses, objetivos e benefícios mútuos dentro da relação.",
        questions: [
            {
                text: "Alinhamento de interesses\nO quanto essa relação se baseia em interesses ou objetivos profissionais em comum?",
                options: [
                    "Sempre: Compartilhamos interesses claros e bem alinhados. Há sintonia em objetivos e oportunidades, e frequentemente encontramos formas de colaborar de maneira significativa. Nossos valores e propósitos convergem, tornando a relação mutuamente benéfica. Há uma conexão natural entre nossas trajetórias e, sempre que surge uma oportunidade, conseguimos nos ajudar de forma estratégica e genuína.",
                    "Frequentemente: Temos alguns interesses em comum, mas há momentos em que nossas prioridades diferem. Geralmente encontramos pontos de convergência, mas nem sempre conseguimos atuar juntos de maneira estratégica. Algumas vezes percebo que temos alinhamento, mas em outras situações seguimos caminhos distintos.",
                    "Ocasionalmente: Existem poucos pontos de conexão entre nossos interesses. Às vezes, identificamos alguma sinergia, mas ela não é suficiente para sustentar uma colaboração contínua. Nossos objetivos costumam seguir caminhos distintos. O interesse em se manter conectado ocorre mais por conveniência do que por alinhamento genuíno.",
                    "Raramente: Não vejo conexões claras entre nossos interesses ou objetivos. A relação parece ser mais circunstancial do que intencional, sem alinhamento significativo em termos de valores ou propósitos. Cada um segue sua própria trajetória sem que essa relação tenha impacto real.",
                ],
            },
            {
                text: "Troca de informações e oportunidades\nEssa relação envolve troca mútua de informações e oportunidades?",
                options: [
                    "Sempre: Compartilhamos conhecimento, insights e oportunidades de maneira contínua e genuína. Costumamos trocar informações estratégicas que agregam valor um ao outro e frequentemente abrimos portas para novas conexões ou possibilidades de crescimento. Quando tenho algo relevante para compartilhar, essa pessoa é uma das primeiras em quem penso, e vice-versa.",
                    "Frequentemente: Compartilhamos informações relevantes, mas sem uma regularidade fixa. Em algumas ocasiões, trocamos oportunidades, mas nem sempre há um fluxo contínuo de aprendizado ou crescimento mútuo. Às vezes há uma troca interessante, mas pode passar um tempo sem que compartilhemos algo de valor.",
                    "Ocasionalmente: Raramente trocamos informações relevantes ou oportunidades. Ocasionalmente há alguma troca de conhecimento, mas não há um hábito ou compromisso real em contribuir para o crescimento do outro. Quando interagimos, a troca de valor é mínima e acontece mais por formalidade do que por intenção estratégica.",
                    "Raramente: Não há compartilhamento de informações ou oportunidades de valor. Quando interagimos, dificilmente há troca de insights ou qualquer colaboração produtiva. A relação se mantém superficial e sem impacto real. Mesmo quando surge algo interessante, não há a iniciativa de compartilhar.",
                ],
            },
            {
                text: "Confiança e transparência na relação\nVocê sente que há confiança mútua e abertura para compartilhar desafios e oportunidades?",
                options: [
                    "Sempre: Confio totalmente nessa pessoa e sinto que a confiança é recíproca. Podemos conversar sobre desafios, oportunidades e situações estratégicas com total abertura. Sei que posso contar com essa pessoa sem receios, e vice-versa. Quando há uma questão relevante, posso falar de forma transparente sem medo de julgamentos ou mal-entendidos.",
                    "Frequentemente: Confio na maioria das interações, mas há algumas barreiras que limitam a abertura total. Compartilhamos informações de forma razoavelmente transparente, mas sem entrar em tópicos mais sensíveis. A relação tem um bom nível de confiança, mas nem sempre sinto que posso me abrir completamente.",
                    "Ocasionalmente: Há certa distância na relação, e nem sempre me sinto confortável para compartilhar desafios ou temas importantes. O nível de confiança varia, dependendo do contexto e da situação. Em alguns momentos sinto que posso contar com essa pessoa, mas em outros, não tenho tanta certeza.",
                    "Raramente: Não sinto confiança na relação e evito compartilhar informações mais estratégicas ou sensíveis. Não tenho certeza se essa pessoa agiria com integridade caso precisássemos colaborar em algo relevante. Prefiro manter a relação mais superficial, sem me expor muito.",
                ],
            },
            {
                text: "Grau de colaboração e suporte mútuo\nO quanto essa relação envolve apoio mútuo e colaboração?",
                options: [
                    "Sempre: Há uma cultura de suporte genuíno entre nós. Se um de nós precisa de ajuda ou suporte, o outro se prontifica rapidamente. Já colaboramos em projetos, desafios ou decisões importantes de maneira ativa. Sei que posso contar com essa pessoa para algo relevante e ela pode contar comigo da mesma forma.",
                    "Frequentemente: Costumamos nos apoiar quando necessário, mas nem sempre de forma proativa. Se solicitado, oferecemos suporte um ao outro, mas sem um envolvimento frequente. Há um nível de colaboração na relação, mas não acontece de forma automática.",
                    "Ocasionalmente: O apoio entre nós é limitado e ocorre apenas em momentos muito específicos. Quando preciso de algo, não sei ao certo se essa pessoa estaria disposta a colaborar. O suporte ocorre apenas quando há uma necessidade evidente, mas não há uma cultura de ajuda mútua.",
                    "Raramente: Não há colaboração real entre nós. Se precisarmos de algo, dificilmente recorreríamos um ao outro. A relação não envolve suporte ou engajamento mútuo significativo. Não percebo essa pessoa como alguém que naturalmente ajudaria se eu precisasse.",
                ],
            },
            {
                text: "Visão de futuro na relação\nVocê enxerga essa conexão como uma relação que pode gerar benefícios no longo prazo?",
                options: [
                    "Sempre: Vejo essa relação como um vínculo estratégico e duradouro, que pode gerar benefícios contínuos no futuro. Considero essa conexão importante para minha jornada profissional e pessoal. Tenho interesse em cultivar essa relação e fortalecê-la ao longo do tempo.",
                    "Frequentemente: Acredito que há potencial para essa relação crescer e se fortalecer, mas isso depende de como nossa trajetória se desenvolverá. A relação já gerou valor e pode continuar sendo relevante, mas ainda não há certeza de que isso ocorrerá naturalmente.",
                    "Ocasionalmente: Há incerteza sobre o futuro dessa relação. Às vezes penso que pode ser útil, mas não tenho clareza sobre como essa conexão poderá agregar valor no longo prazo. A relação existe, mas pode se tornar irrelevante com o tempo.",
                    "Raramente: Não vejo essa relação como algo estratégico para o futuro. Nossa conexão parece estar estagnada ou sem perspectivas de crescimento significativo. Se a relação terminar, não fará diferença para mim.",
                ],
            },
        ],
    },
];

const sectionScores = [];

// Configuração do gráfico de radar
const radarChartConfig = {
    type: 'radar',
    data: {
        labels: ['Proximidade', 'Frequência', 'Sintonia de interesses'],
        datasets: [{
            label: 'Pontos',
            data: sectionScores,
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
                max: 20, // Escala de 0 a 20 (pontuação máxima por seção)
                ticks: {
                    stepSize: 4 // Define o intervalo entre os valores exibidos
                }
            }
        },
        elements: {
            line: {
                borderWidth: 3
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed && context.parsed.r !== null) {
                            label += context.parsed.r;
                        }
                        return label;
                    }
                }
            }
        }
    }
};


const loadingOverlay = document.getElementById("loading-overlay");
const loadingMessage = document.getElementById("loading-message");
function showLoading() {
    loadingOverlay.classList.add("show");
}

function hideLoading() {
    loadingOverlay.classList.remove("show");
}

async function startTest() {
    showLoading();
    loadingMessage.innerText = "Prepare-se para conhecer a Fórmula do Networking"
    await new Promise(resolve => setTimeout(resolve, 2500));
    document.getElementById('initial-modal').classList.add('hidden');
    document.getElementById('test-container').classList.remove('hidden');
    document.removeEventListener('keypress', handleEnterTest);
    await loadSectionInstructions(); // Load instructions first
    hideLoading();
}

function handleEnterTest(event) {
    if (event.key === "Enter") {
        nextQuestion();
    }
}

async function loadSectionInstructions() {
    document.getElementById("question-number").innerText = "";
    document.getElementById("question-text").innerText = "";
    const section = sections[currentSection];
    document.getElementById("section-title").innerText = section.title;
    document.getElementById("section-instruction").innerText = section.instruction;

    const answerOptionsDiv = document.getElementById("answer-options");
    answerOptionsDiv.innerHTML = "";

    const continueButton = document.querySelector('#test-container button');
    continueButton.onclick = loadQuestion;
    continueButton.innerText = "Continuar";

    // Remove any existing section background classes
    document.body.classList.remove(
        "bg-section-1",
        "bg-section-2",
        "bg-section-3"
    );

    // Add the background class for the current section
    document.body.classList.add(`bg-section-${currentSection + 1}`);

    // Scroll to top
    window.scrollTo(0, 0);

}
async function loadQuestion() {
    document.getElementById("section-title").innerText = sections[currentSection].title;
    document.getElementById("section-instruction").innerText = ""; // Clear instruction after initial load
    document.getElementById("question-number").innerText = `Questão ${currentStep + 1} de ${sections[currentSection].questions.length}`;
    const currentQuestion = sections[currentSection].questions[currentStep];
    document.getElementById("question-text").innerText = currentQuestion.text;
    const answerOptionsDiv = document.getElementById("answer-options");
    answerOptionsDiv.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = index;
        input.id = `option-${index}`;
        const label = document.createElement("label");
        label.innerText = option;
        label.setAttribute("for", `option-${index}`);
        label.insertBefore(input, label.firstChild);
        answerOptionsDiv.appendChild(label);

    });
    const firstRadioButton = document.querySelector('input[name="answer"]');
    if (firstRadioButton) {
        firstRadioButton.focus();
    }
    document.addEventListener("keypress", handleEnterTest);

    // Modify button behavior for questions
    const continueButton = document.querySelector('#test-container button');
    continueButton.onclick = nextQuestion;
    continueButton.innerText = "Continuar";

    await new Promise((resolve) => setTimeout(resolve, 100));
    // Scroll to top
    window.scrollTo(0, 0);
}

async function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        showError('answer-error', true);
        return;
    } else {
        showError('answer-error', false);
    }
    document.removeEventListener('keypress', handleEnterTest);

    // ADD the question index
    testAnswers.push({
        questionIndex: getQuestionNumber(),
        answerIndex: parseInt(selectedOption.value)
    });
    console.log("testAnswers:", testAnswers);
    currentStep++;

    showLoading();
    loadingMessage.innerText = "Carregando"; // Loading message

    await new Promise(resolve => setTimeout(resolve, 500));  // simulate saving

    if (currentStep < sections[currentSection].questions.length) {
        await loadQuestion();
    } else {
        currentStep = 0;
        currentSection++;
        if (currentSection < sections.length) {
            loadingMessage.innerText = "Prepare-se para a próxima seção";
            await loadSectionInstructions(); // Load next section's instructions
        } else {
            loadingMessage.innerText = "Calculando resultados...";
            await showResults();
            console.log("Final testAnswers:", testAnswers);
        }
    }

    hideLoading();  // Hide loading after the next step is loaded

    // Scroll to top
    window.scrollTo(0, 0);
}
function getQuestionNumber() {
    let counter = 0;
    for (let i = 0; i < currentSection; i++) {
        counter += sections[i].questions.length;
    }
    return counter + currentStep;
}

function showError(id, show, mandatory = false, message = "") {
    const errorElement = document.getElementById(id);
    errorElement.innerText = message;
    errorElement.classList.toggle("mandatory-error", mandatory);
    if (show) {
        errorElement.style.display = "block";
    } else {
        errorElement.style.display = "none";
    }
}

function calculateScores() {
    let totalScore = 0;
    sections.forEach((section, sectionIndex) => {
        let sectionScore = 0;
        // Iterate through the *questions* in this *section*
        for (let questionIndex = 0; questionIndex < section.questions.length; questionIndex++) {
            // Get the index of the answer that *corresponds* to this question
            const answerIndexForQuestion = (sectionIndex * section.questions.length) + questionIndex;
            if (answerIndexForQuestion < testAnswers.length) {
                // Get the *answer object* from the testAnswers array
                const answerObject = testAnswers[answerIndexForQuestion];

                 // Extract the *answerIndex* from the object
                 const answerValue = answerObject.answerIndex;

                 console.log(`AnswerValue: ${answerValue}`);

                 sectionScore += (4 - answerValue);

            }
        }
        sectionScores.push(sectionScore);
        totalScore += sectionScore;
    });
    return { totalScore, sectionScores };
}

const totalResultInterpretations = {
    excellent: "<strong>Alta Maturidade Relacional</strong>:\nSua relação demonstra um alto nível de engajamento, consistência e alinhamento de interesses. Há um equilíbrio entre proximidade, frequência e sintonia, o que indica um relacionamento forte e sustentável. Essa relação provavelmente gera valor contínuo para ambas as partes e tem grande potencial de crescimento no longo prazo.\n<strong>Ações recomendadas</strong>: Continue nutrindo essa relação e explorando novas oportunidades de colaboração. Busque consolidar ainda mais o vínculo e identificar formas de expandir essa conexão para outras oportunidades estratégicas.",
    good: "<strong>Boa Maturidade Relacional, com espaço para evolução</strong>:\nSua conexão já apresenta boas bases, mas há aspectos que podem ser aprimorados. Você mantém um contato frequente e genuíno, mas pode haver momentos de inconsistência ou falta de alinhamento estratégico.\n<strong>Ações recomendadas</strong>: Analise quais dimensões tiveram pontuações mais baixas e concentre seus esforços nelas. Pequenos ajustes, como aumentar a profundidade das conversas ou criar uma cadência mais previsível de interação, podem fortalecer significativamente essa relação.",
    average: "<strong>Maturidade Relacional Moderada, com oportunidades de crescimento</strong>:\nExiste certa maturidade na relação, mas existem oscilações na proximidade, frequência ou sintonia de interesses. Pode ser uma conexão que perdeu força ao longo do tempo ou que ainda não se consolidou plenamente.\n<strong>Ações recomendadas</strong>: Se essa relação for importante para você, busque formas de reativá-la. Aumente a frequência das interações, aprofunde as conversas e explore pontos de interesse comuns para fortalecer o vínculo.",
    bad: "<strong>Baixa Maturidade Relacional, com necessidade de atenção</strong>:\nEssa relação apresenta desafios significativos, seja pela falta de contato, pela baixa sintonia de interesses ou pela ausência de iniciativa de ambas as partes. Provavelmente, não há um engajamento mútuo consistente e a conexão pode estar enfraquecendo com o tempo.\n<strong>Ações recomendadas</strong>: Avalie se essa relação realmente é estratégica para você. Se for, tome a iniciativa para reativá-la. Caso contrário, pode ser o momento de direcionar sua energia para conexões mais promissoras.",
    irrelevant: "<strong>Relação pouco madura ou irrelevante</strong>:\nA conexão é praticamente inexistente ou extremamente frágil. Pode ser uma relação pontual ou circunstancial, sem real impacto para você ou para a outra pessoa.\n<strong>Ações recomendadas</strong>: Reflita sobre se vale a pena investir tempo e esforço para fortalecer essa conexão ou se é melhor redirecionar seu foco para outros relacionamentos mais estratégicos."

};

const sectionInterpretations = {
    "1. PROXIMIDADE": {
        excellent:
            "<strong>Alta Proximidade</strong>:\nVocê mantém uma <strong>conexão forte e ativa</strong>, investindo tempo e energia para fortalecer esse vínculo. Seu networking não é apenas circunstancial, mas <strong>estrategicamente construído</strong>, seja por meio de interações presenciais frequentes, trocas profundas e sustentação digital. Você demonstra interesse genuíno na relação e tende a ser <strong>proativo na criação de oportunidades de contato</strong>, o que fortalece a conexão.\n<strong>Ações recomendadas</strong>: Continue aprofundando essa relação, buscando expandir ainda mais a troca de valor. Explore novas formas de colaboração, como parcerias em projetos, mentorias ou indicações. Se possível, diversifique os canais de contato para aumentar a qualidade da proximidade, integrando interações presenciais e digitais.",
        good:
            "<strong>Boa proximidade</strong>:\nSua relação apresenta um bom nível de conexão, mas pode haver momentos de distanciamento ou interação mais superficial. Você demonstra interesse e mantém um vínculo ativo, mas há oportunidades para aprofundar as conversas, aumentar a frequência das interações ou equilibrar melhor a reciprocidade da relação.\n<strong>Ações recomendadas</strong>: Identifique onde a relação pode ser fortalecida: há pouca interação presencial? O contato digital é esporádico? As conversas são produtivas, mas pouco estratégicas? Pequenos ajustes, como aumentar a regularidade do contato ou buscar interações mais ricas em valor, podem consolidar essa conexão.",
        average:
            "<strong>Proximidade Fraca</strong>:\nA relação existe, mas está distante ou pouco aprofundada. Pode ser uma conexão que teve momentos mais intensos no passado, mas que não foi sustentada ao longo do tempo. Você pode interagir ocasionalmente, mas sem um padrão previsível ou um envolvimento significativo. Se não houver uma ação consciente para reativá-la, a tendência é que esse vínculo se torne cada vez mais fraco.\n<strong>Ações recomendadas</strong>: Avalie se essa é uma relação estratégica para você. Caso seja, tome a iniciativa para reacender a conexão - envie uma mensagem, marque um encontro, busque um ponto de interesse comum para retomar o contato. Se perceber que essa relação já não tem mais um propósito relevante, pode ser o momento de redirecionar sua energia para conexões mais ativas.",
        bad:
            "<strong>Proximidade Muito Baixa</strong>:\nEssa conexão é superficial ou praticamente inexistente. Pode ser uma relação circunstancial, baseada apenas em interações casuais ou um contato esporádico sem impacto real. Se não houver um esforço consciente de ambas as partes para fortalecer esse vínculo, ele pode ser irrelevante para seu networking.\n<strong>Ações recomendadas</strong>: Reflita sobre o valor dessa relação e se vale a pena investir nela. Caso sim, será necessário reconstruí-la do zero, aumentando a frequência das interações e gerando maior envolvimento. Se a relação parecer forçada ou sem propósito claro, talvez seja mais produtivo dedicar seu tempo a conexões mais significativas.",
    },
    "2. FREQUÊNCIA": {
        excellent:
            "<strong>Alta Frequência</strong>:\nO contato acontece de maneira consistente e fluida, sem grandes oscilações. Essa relação tem um ritmo estável, o que indica que há um esforço ativo de ambas as partes para manter o vínculo vivo. A constância fortalece a confiança e permite que a conexão gere valor contínuo. Mesmo se houver pausas, elas não afetam negativamente a relação, pois há um padrão claro de interação.\n<strong>Ações recomendadas</strong>: Continue cultivando essa consistência e, se possível, aprofunde ainda mais a relação. Diversifique os formatos de contato (presencial, digital, chamadas) para enriquecer a troca. Além disso, aproveite essa estabilidade para construir novas oportunidades de colaboração estratégica.",
        good:
            "<strong>Boa Frequência</strong>:\nA relação é ativa, mas pode haver momentos de menor contato ou períodos mais espaçados de interação. A comunicação ainda ocorre de maneira frequente, mas sem um padrão fixo. Em alguns momentos, a conexão pode parecer forte, enquanto em outros há um distanciamento natural.\n<strong>Ações recomendadas</strong>: Busque criar um padrão mais previsível de interação. Pequenos ajustes, como programar encontros regulares ou estabelecer um fluxo de comunicação mais contínuo, podem tornar essa relação ainda mais sólida. Se a relação for estratégica, um esforço intencional para manter a frequência pode evitar que ela perca relevância ao longo do tempo.",
        average:
            "<strong>Frequência Irregular</strong>:\nO contato acontece de forma esporádica, sem consistência. Há períodos em que a relação parece forte e ativa, mas também longos intervalos sem interação, tornando o vínculo instável. Se não houver um esforço consciente, essa conexão pode perder força gradativamente até se tornar irrelevante.\n<strong>Ações recomendadas</strong>: Avalie o que tem causado essa irregularidade. O afastamento é por falta de prioridade, tempo ou interesse mútuo? Se essa relação for importante para você, estabeleça um plano para aumentar a frequência dos contatos e evitar que ela esfrie por longos períodos. Se a conexão for mantida apenas por conveniência ou obrigação, talvez seja o momento de repensar sua relevância no seu networking.",
        bad:
            "<strong>Baixa Frequência</strong>:\nA relação praticamente não tem contato e a conexão pode estar se tornando irrelevante. Se não há interação regular e a retomada do contato é difícil, essa conexão pode estar no limbo entre um networking ativo e um vínculo perdido. Relações nessa categoria muitas vezes existem apenas no papel ou na lembrança, sem impacto real no presente.\n<strong>Ações recomendadas</strong>: Reflita sobre a importância dessa conexão. Se for uma relação estratégica, será necessário um esforço ativo para reacender esse vínculo - isso pode significar enviar uma mensagem, marcar um encontro ou reestabelecer uma troca de valor. Se perceber que essa relação já não faz sentido para sua trajetória profissional, pode ser melhor concentrar seus esforços em conexões mais significativas.",
    },
    "3. SINTONIA DE INTERESSES": {
        excellent:
            "<strong>Alta Sintonia</strong>:\nVocês possuem um forte alinhamento de interesses, valores e objetivos, o que torna essa relação uma conexão estratégica e de grande potencial. Há uma troca contínua de valor, seja por meio de informações, oportunidades ou suporte mútuo. A confiança é alta, permitindo um ambiente de transparência e crescimento conjunto. Além disso, há uma visão de longo prazo para a relação, o que demonstra que essa conexão pode continuar se fortalecendo ao longo do tempo.\n<strong>Ações recomendadas</strong>: Continue aprofundando essa relação, aproveitando oportunidades para cocriar, colaborar e expandir esse vínculo. Explore formas de aumentar ainda mais a troca de valor, como parcerias, mentorias ou colaborações estratégicas. Se possível, alinhe expectativas futuras para que essa conexão continue gerando impacto positivo para ambas as partes.",
        good:
            "<strong>Boa Sintonia</strong>:\nExiste um bom nível de alinhamento, mas há aspectos que podem ser aprimorados. Vocês compartilham interesses e objetivos em comum, mas a colaboração pode não ser frequente ou totalmente estruturada. O contato pode ser produtivo, mas há oportunidades para aprofundar a confiança, aumentar o compartilhamento de informações ou definir objetivos mais claros dentro da relação.\n<strong>Ações recomendadas</strong>: Identifique quais pontos podem ser fortalecidos. Vocês têm oportunidades de colaboração que ainda não exploraram? Há espaço para maior transparência e confiança? Aprofundar a troca de informações e estabelecer ações concretas pode elevar essa relação para um nível mais estratégico.",
        average:
            "<strong>Sintonia Fraca</strong>:\nA relação tem poucos pontos de conexão, e o alinhamento de valores ou interesses pode ser superficial ou limitado a interações pontuais. Há momentos em que a conexão parece relevante, mas na maior parte do tempo, falta propósito claro para a manutenção dessa relação. A confiança pode não ser suficientemente forte, e a colaboração é rara ou inexistente.\n<strong>Ações recomendadas</strong>: Avalie se essa relação tem potencial para ser fortalecida. Se sim, busque formas de criar pontos de interesse comuns - isso pode envolver conversas mais aprofundadas, maior troca de informações ou oportunidades de colaboração. Caso perceba que a relação não se sustenta por falta de afinidade genuína, pode ser mais produtivo concentrar sua energia em conexões mais estratégicas.",
        bad:
            "<strong>Baixa Sintonia</strong>:\nNão há um alinhamento significativo de interesses, valores ou objetivos, e a relação parece mais circunstancial do que estratégica. As interações são casuais e não há um fluxo natural de troca de valor. A conexão pode ter sido útil em algum momento, mas não há indícios de que seja sustentável ou relevante no longo prazo.\n<strong>Ações recomendadas</strong>: Reflita sobre a real importância dessa relação para sua rede de contatos. Se não há sintonia ou troca de valor, manter essa conexão pode ser um esforço desnecessário. Considere direcionar seu networking para pessoas com maior alinhamento, que possam agregar mais à sua trajetória e com quem haja uma afinidade natural para colaboração e crescimento mútuo.",
        },
};

function getResultInterpretation(totalScore) {
 let interpretation = "";
    if (totalScore >= 51) {
      interpretation = "excellent";
    } else if (totalScore >= 41) {
      interpretation = "good";
    } else if (totalScore >= 31) {
      interpretation = "average";
    } else if (totalScore >= 21) {
      interpretation =  "bad";
    } else {
      interpretation =  "irrelevant";
    }
    return interpretation;
}


async function showResults() {
    showLoading();
    document.getElementById("test-container").classList.add("hidden");

    const messages = [
        "Analisando a profundidade da sua conexão",
        "Desvendando os laços relacionais",
        "Calculando a Fórmula do Networking",
        "Agora você descobrirá a qualidade dessa relação de networking..."
    ];

    for (const message of messages) {
        loadingMessage.innerText = message;
        await new Promise(resolve => setTimeout(resolve, 4000)); // Adjust the delay as needed
    }

    const { totalScore, sectionScores } = calculateScores();

    const finalMessageTitle = document.getElementById("final-message-title");
    const finalMessage = document.getElementById("final-message");
    // Criar o gráfico de radar
    const ctxRadar = document.getElementById('radarChart').getContext('2d');
    new Chart(ctxRadar, {
        type: 'radar',
        data: {
            labels: ['Proximidade', 'Frequência', 'Sintonia de interesses'],
            datasets: [{
                label: 'Pontos',
                data: sectionScores,
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
            responsive: true, // Enables responsiveness
            maintainAspectRatio: true, // Keeps the aspect ratio
            scales: {
                r: {
                    min: 0,
                    max: 20,
                    ticks: { stepSize: 2 }
                }
            },
            elements: {
                line: { borderWidth: 3 }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });

    const totalResultTitle = document.getElementById("total-result-title");
    const totalResult = document.getElementById("total-result");
    const totalResultInterpretation = document.getElementById("total-result-interpretation");
    const sectionResultsDiv = document.getElementById("section-results");
    const finalReflection = document.getElementById('final-reflection');
    // Final Message

    finalMessageTitle.innerText = "FN - Fórmula do Networking";
    finalMessage.innerHTML =
        `Analise cuidadosamente seus resultados. Eles oferecem um panorama claro sobre a <strong>maturidade da sua relação de networking</strong>, ajudando a compreender como essa conexão se desenvolve e onde há espaço para crescimento. Identifique os pontos fortes que tornam essa relação valiosa, mas também reconheça os aspectos que podem ser aprimorados. Você é plenamente capaz de evoluir, se adaptar e aprender. Hoje praticar networking não é mais apenas um complemento, é uma necessidade premente.
        <br>Lembre-se: este é um retrato do momento, não um diagnóstico definitivo sobre a qualidade dessa conexão. As relações evoluem e, com pequenas ações intencionais, é possível fortalecer laços, criar maior alinhamento e transformar conexões em oportunidades significativas.
        <blockquote cite="https://www.linkedin.com/in/paulocruzfilho">"Networking é a ciência, a arte e a prática do relacionamento profissional."</blockquote><address> - Paulo Cruz, fundador do Inner Networking.</address>
        <br>O <strong>Fórmula do Networking (FN)</strong> reflete o equilíbrio entre <strong>Proximidade, Frequência e Sintonia de Interesses</strong>, três dimensões essenciais para avaliar a profundidade e o impacto de uma conexão profissional. Sua pontuação final, resultante da soma desses fatores, indica o nível de maturidade dessa relação e o quanto ela contribui para seu crescimento profissional.
        <br><p class="INIequation"></p>
        <ul>
        <li><strong>Uma pontuação alta</strong> sugere que essa é uma conexão bem estabelecida, com interações significativas, frequentes e alinhadas.</li>
        <li><strong>Uma pontuação intermediária</strong> aponta para uma relação existente, mas que pode ser fortalecida com ajustes específicos.</li>
        <li><strong>Uma pontuação baixa</strong> indica que essa conexão pode estar enfraquecida, seja por falta de interação, desalinhamento de interesses ou ausência de um vínculo consistente.</li>
        </ul>
        A seguir, veja a interpretação detalhada do seu resultado e como utilizá-lo para aprimorar sua abordagem no networking.`;


totalResultTitle.innerText = "Seu resultado foi de:";
totalResult.innerText = `${totalScore} de ${60} pontos possíveis`;

let interpretation = getResultInterpretation(totalScore);
totalResultInterpretation.innerHTML = totalResultInterpretations[interpretation];

//  saveAssessment("Fórmula do Networking", totalScore, getResultInterpretation(totalScore)); - OLD CALL
await saveAssessment("Fórmula do Networking", totalScore, interpretation, testAnswers);
     

    //Section Results
    sectionResultsDiv.innerHTML = "";
    sections.forEach((section, index) => {
        const sectionResultDiv = document.createElement("div");
        sectionResultDiv.classList.add("section-result");
        const sectionTitle = document.createElement("h3");
        sectionTitle.innerText = section.title;
        sectionResultDiv.appendChild(sectionTitle);
        const sectionScore = document.createElement("p");
       sectionScore.innerHTML = `<strong>${sectionScores[index]} de 20 pontos possíveis</strong>`;
        sectionResultDiv.appendChild(sectionScore);

        let sectionInterpretation = "";
        if (sectionScores[index] >= 17) {
            sectionInterpretation = sectionInterpretations[section.title].excellent;
        } else if (sectionScores[index] >= 13) {
            sectionInterpretation = sectionInterpretations[section.title].good;
        } else if (sectionScores[index] >= 9) {
            sectionInterpretation = sectionInterpretations[section.title].average;
        } else {
            sectionInterpretation = sectionInterpretations[section.title].bad;
        }
        const sectionInterpretationText = document.createElement('p');
        sectionInterpretationText.innerHTML = sectionInterpretation;
        sectionResultDiv.appendChild(sectionInterpretationText);


        sectionResultsDiv.appendChild(sectionResultDiv);
    });
    finalReflection.innerHTML = `<h3>REFLEXÃO FINAL</h3><br>
    As conexões profissionais não são estáticas – elas evoluem conforme o tempo, as interações e o valor que cada parte deposita na relação. A Fórmula do Networking (FN) oferece um diagnóstico do momento, mas a construção e a manutenção de relações de qualidade são processos contínuos, que dependem de intenção, consistência e autenticidade. Como próximos passos:
    <ul>
    <li>Reflita sobre suas relações estratégicas: Quais conexões você quer fortalecer? Quais precisam de mais atenção?</li>
    <li>Defina pequenas ações: Um simples contato, um convite para um café ou um compartilhamento de oportunidade podem reativar laços valiosos.</li>
    <li>Expanda sua mentalidade de networking: Construir relações maduras e produtivas leva tempo. Invista de forma intencional, autêntica e estratégica.</li>
    </ul>
    <strong>Lembre-se: seu potencial de Networking não é estático; ele pode ser moldado e aprimorado com dedicação, prática e estratégia.</strong>Use essas informações como uma bússola para fortalecer seus pontos fortes e trabalhar nas áreas que chamam mais atenção. Ao fazer isso, você não apenas aprimorará seu desempenho em networking, mas também abrirá portas para <strong>avanços inovadores em sua carreira</strong> e para a construção de relacionamentos profissionais sólidos e enriquecedores.
    <blockquote cite="https://www.linkedin.com/in/paulocruzfilho">“Seus conhecimentos e habilidades abrem portas, mas são seus relacionamentos que dirão até onde você pode ir.”</blockquote><address> - Paulo Cruz, fundador do Inner Networking.</address><br>
    Boa sorte em sua jornada de crescimento profissional!
    <br><br>
    Para saber mais sobre a FN (Fórmula do Networking), você pode acessar os materiais de aprofundamento gratuitos no site <a href="https://www.innernetworking.com.br" target="_blank">www.innernetworking.com.br</a>. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu resultado e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking.
    <br><br>
    Caso deseje adquirir a análise de perfil completa, entre em contato conosco no site <a href="https://www.innernetworking.com.br" target="_blank">www.innernetworking.com.br</a>`;

document.getElementById("results-container").classList.remove("hidden");

const shareButton = document.getElementById('share-button');
shareButton.addEventListener('click', () => {
    const chart = document.getElementById('radarChart'); // Get the chart
    shareOnWhatsApp(chart); // Pass the chart to the function
  }
 );
hideLoading();
}
    

async function shareOnWhatsApp(chart) {
    const message = `Olha só o resultado do assessment incrível que acabei de fazer`;
    const encodedMessage = encodeURIComponent(message);

    const chartImageBase64 = chart.toDataURL();

    try {
        const imageUrl = await uploadToImgBB(chartImageBase64); // Upload to ImgBB

        const whatsappUrl = `https://wa.me/?text=${encodedMessage}%0A${imageUrl}`;
        window.open(whatsappUrl, '_blank');
    } catch (error) {
        console.error("Error sharing the image:", error);
        alert("Error sharing image. Please try again."); // Optional user message
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
                const { totalScore, sectionScores } = calculateScores();
                const resultInterpretation = getResultInterpretation(totalScore);
                generatePDF(auth.currentUser.uid, testAnswers, totalScore, resultInterpretation);
            } else {
                console.log("User is not logged in.");
                alert("User is not logged in. Please log in to generate the PDF.");
            }
        });
    }

    initialModal.classList.remove('hidden');
});
// Make these functions globally accessible
window.showLoading = showLoading;
window.hideLoading = hideLoading;
window.loadingMessage = loadingMessage; // Also expose the loadingMessage element
