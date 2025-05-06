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
        title: "2. CONSTÂNCIA DE FOMENTO (CF)",
        instruction:
            "A Constância de Fomento (CF) diz respeito à capacidade de manter conexões vivas com interações frequentes e relevantes, sempre focado na geração de valor: contribuir de forma útil e fortalecer relações no dia a dia.",
        questions: [
            {
                text: "Mantenho contato periódico com colegas, mesmo fora dos projetos em andamento.",
                options: [
                    "Sempre: Mantenho contatos regulares com colegas, mesmo sem necessidades imediatas de trabalho.",
                    "Frequentemente: Entro em contato com colegas em boa parte do tempo, mas nem sempre de forma planejada.",
                    "Ocasionalmente: Contato colegas apenas quando surgem projetos ou necessidades específicas.",
                    "Raramente: Quase nunca mantenho contato com colegas fora de projetos ativos.",
                ],
            },
            {
                text: "Dou retornos rápidos e atenciosos a comunicações internas.",
                options: [
                    "Sempre: Respondo de maneira rápida e atenciosa às comunicações internas, demonstrando comprometimento.",
                    "Frequentemente: Geralmente respondo com atenção, embora às vezes possa demorar mais que o ideal.",
                    "Ocasionalmente: Respondo apenas quando julgo ser absolutamente necessário ou urgente.",
                    "Raramente: Frequentemente atraso ou deixo de responder às comunicações internas.",
                ],
            },
            {
                text: "Participo de eventos, comitês, grupos ou redes internas da organização.",
                options: [
                    "Sempre: Participo ativamente e com frequência de eventos e redes internas, aproveitando para fortalecer relações.",
                    "Frequentemente: Participo de boa parte dos eventos internos, mas nem sempre de forma ativa ou contínua.",
                    "Ocasionalmente: Compareço a eventos internos apenas esporadicamente, ou somente quando obrigatório, sem grande envolvimento.",
                    "Raramente: Raramente participo de eventos, redes ou atividades internas da organização.",
                ],
            },
            {
                text: "Agendo conversas para troca de ideias e atualização profissional.",
                options: [
                    "Sempre: Regularmente agendo conversas para troca de ideias, conhecimentos e atualização com colegas.",
                    "Frequentemente: Costumo ter essas conversas, mas sem tanta constância ou planejamento.",
                    "Ocasionalmente: Agendo conversas apenas quando há uma necessidade explícita ou um convite direto.",
                    "Raramente: Raramente marco conversas com colegas para troca de ideias ou atualização profissional.",
                ],
            },
            {
                text: "Uso canais digitais internos (como chats, intranet, fóruns) para manter relações vivas e produtivas.",
                options: [
                    "Sempre: Utilizo de forma consistente os canais digitais internos para manter relações vivas, produtivas e relevantes.",
                    "Frequentemente: Uso canais internos com alguma frequência, mas sem planejamento ou regularidade estratégica.",
                    "Ocasionalmente: Utilizo canais digitais internos apenas de maneira pontual, quando há necessidade específica.",
                    "Raramente: Quase nunca utilizo canais digitais internos para interação ou manutenção de relações profissionais.",
                ],
            },
        ],
    },
    {

        title: "3. ALINHAMENTO DE INTERESSES (AI)",
        instruction:
            "O Alinhamento de Interesses (AI) refere-se à capacidade de identificar interesses em comum e também de criar novos interesses compartilhados, construindo parcerias baseadas em objetivos, valores e oportunidades de crescimento mútuo.",
        questions: [
            {
                text: "Identifico e crio temas de interesse comum para fortalecer as conexões.",
                options: [
                    "Sempre: Busco ativamente identificar e criar temas de interesse comum com as pessoas para fortalecer minhas relações internas.",
                    "Frequentemente: Costumo encontrar interesses em comum com colegas, mas nem sempre de forma planejada.",
                    "Ocasionalmente: Às vezes percebo interesses compartilhados, mas raramente trabalho de forma consciente para fortalecê-los.",
                    "Raramente: Não costumo identificar ou criar interesses em comum para fortalecer conexões internas.",
                ],
            },
            {
                text: "Compartilho insights, recursos e informações relevantes para os colegas.",
                options: [
                    "Sempre: Compartilho regularmente informações, insights e recursos que possam agregar valor aos colegas.",
                    "Frequentemente: Compartilho informações relevantes de tempos em tempos, mas sem tanta consistência.",
                    "Ocasionalmente: Compartilho informações apenas em situações específicas ou quando solicitado.",
                    "Raramente: Raramente compartilho informações ou recursos com colegas.",
                ],
            },
            {
                text: "Proponho ou colaboro em projetos de interesse mútuo.",
                options: [
                    "Sempre: Proponho ou colaboro de forma proativa em projetos que tragam benefícios para mim e para meus colegas.",
                    "Frequentemente: Colaboro em projetos de interesse mútuo, mas nem sempre de forma contínua ou planejada.",
                    "Ocasionalmente: Participo de projetos de interesse comum apenas quando sou convidado.",
                    "Raramente: Não costumo propor ou participar de projetos de interesse mútuo.",
                ],
            },
            {
                text: "Apoio ativamente o crescimento profissional dos outros.",
                options: [
                    "Sempre: Apoio proativamente o desenvolvimento e o crescimento profissional de colegas, oferecendo ajuda e incentivo.",
                    "Frequentemente: Costumo apoiar colegas em algumas situações específicas, mas sem muita regularidade.",
                    "Ocasionalmente: Apoio colegas apenas quando há um pedido direto ou uma situação muito evidente.",
                    "Raramente: Não costumo me envolver ativamente no apoio ao crescimento profissional de outros colegas.",
                ],
            },
            {
                text: "Busco construir relações baseadas em confiança, respeito e reciprocidade (troca genuína).",
                options: [
                    "Sempre: Atuo de maneira intencional para construir relações fundamentadas em confiança, respeito e reciprocidade (troca genuína).",
                    "Frequentemente: Na maioria das vezes busco estabelecer relações com base na confiança, respeito e reciprocidade (troca genuína), mas em outras nem tanto.",
                    "Ocasionalmente: Somente algumas das minhas relações são pautadas em confiança, respeito e reciprocidade (troca genuína).",
                    "Raramente: Não possuo e/ou priorizo a construção de relações baseadas em confiança, respeito e reciprocidade (troca genuína).",
                ],
            },
        ],

    },
    {
        title: "4. ATUAÇÃO ESTRATÉGICA (AE)",
            instruction:
                "A Atuação Estratégica (AE) diz respeito à realizar ações intencionais e proativas para agregar valor em interações, demonstrando competências, conhecimentos e inteligência de contribuição com discrição e naturalidade, evitando a percepção de exibicionismo. “Mostrar valor é necessário. O segredo é impactar pela contribuição, não pela autopromoção.”",
            questions: [
                {
                    text: "Preparo-me estrategicamente para reuniões e interações internas (pesquiso tendências, dados, fornecedores, cases relevantes, etc.).",
                    options: [
                        "Sempre: Preparo-me estrategicamente para todas as reuniões e interações importantes, pesquisando tendências e informações relevantes.",
                        "Frequentemente: Normalmente preparo-me para reuniões importantes, mas em algumas situações atuo de forma menos estruturada ou mais superficialmente.",
                        "Ocasionalmente: Somente em algumas ocasiões especiais faço pesquisas ou preparo dados antes de interações relevantes.",
                        "Raramente: Costumo participar de reuniões e interações sem preparação prévia ou pesquisa aprofundada.",
                    ],
                },
                {
                    text: "Em interações importantes, busco oportunidades de demonstrar conhecimento técnico e visão estratégica de negócio.",
                    options: [
                        "Sempre: Aproveito intencionalmente as interações importantes para demonstrar minhas competências técnicas e visão estratégica.",
                        "Frequentemente: Demonstro minhas competências e visão estratégica na maioria das minhas interações importantes, mas sem ser uma atitude constante.",
                        "Ocasionalmente: Só evidencio meu conhecimento técnico e visão de negócio em situações específicas ou sob demanda.",
                        "Raramente: Raramente utilizo interações para demonstrar minhas competências ou visão estratégica.",
                    ],
                },
                {
                    text: "Planejo como posso agregar cada vez mais valor às discussões e projetos, encontrando novas formas de contribuir.",
                    options: [
                        "Sempre: Planejo de forma consciente como posso agregar mais valor às discussões e contribuir efetivamente antes de participar, encontrando novas formas de contribuir para além de como sempre faço.",
                        "Frequentemente: Costumo pensar em formas de contribuir e gerar valor, mas nem sempre de forma inovadora ou diferente de como sempre faço.",
                        "Ocasionalmente: Em algumas situações contribuo com novas perspectivas de maneira improvisada, sem planejamento ou reflexão prévia.",
                        "Raramente: Participo de discussões e projetos da forma que sempre atuo, sem me preocupar em agregar mais valor.",
                    ],
                },
                {
                    text: "Aproveito reuniões, eventos e fóruns para evidenciar minha presença e gerar valor e impacto positivo.",
                    options: [
                        "Sempre: Utilizo reuniões, eventos e fóruns como oportunidades estratégicas para reforçar minha presença e gerar valor e impacto positivo.",
                        "Frequentemente: Costumo aproveitar essas oportunidades, mas nem sempre de forma consciente, consistente ou planejada.",
                        "Ocasionalmente: Às vezes consigo evidenciar minha presença e meu valor, mas somente em algumas ocasiões, não sendo uma atitude constante.",
                        "Raramente: Não aproveito eventos internos como oportunidades de fortalecimento da minha imagem profissional.",
                    ],
                },
                {
                    text: "Trato cada interação com pessoas como uma oportunidade de fortalecer minha reputação interna.",
                    options: [
                        "Sempre: Tenho plena consciência de que toda interação é estratégica para minha reputação e atuo intencionalmente nesse sentido.",
                        "Frequentemente: Estou atento(a) à minha reputação na maioria das interações, mas nem sempre ajo de forma estratégica consciente disso.",
                        "Ocasionalmente: Percebo a importância da minha reputação somente em algumas interações, normalmente com algumas pessoas específicas.",
                        "Raramente: Raramente tenho consciência e atuo de forma estratégica para fortalecer minha reputação interna durante as interações com as pessoas.",
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
        labels: ['Relacionamento Próximo', 'Constância de Fomento', 'Alinhamento de interesses', 'Atuação Estratégica'],
        datasets: [{
            label: 'Pontos',
            data: sectionScores,
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(181, 235, 54)',
            pointBackgroundColor: 'rgb(181, 235, 54)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(181, 235, 54)'
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
    loadingMessage.innerText = "Prepare-se para conhecer seu Networking Interno"
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
        "bg-section-3",
        "bg-section-4"
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
    excellent: "<strong>Excelente Índice de Networking Interno (Inner Networking)</strong>:\nVocê demonstra alto domínio na construção e manutenção de relações internas estratégicas, equilibrando aproximação, frequência, alinhamento e atuação com naturalidade e intenção. Seu networking interno é um diferencial competitivo importante e um grande ativo para a sua evolução dentro da organização. Continue aprofundando vínculos estratégicos, fortalecendo interesses mútuos e liderando movimentos de colaboração interna. Você já é visto como um(a) construtor(a) de pontes — siga expandindo sua influência positiva. Você pode acessar materiais de aprofundamento no site www.innernetworking.com.br.",
    good: "<strong>Bom Índice de Networking Interno (Inner Networking), com espaço para evolução</strong>:\nVocê possui uma base consistente e sólida, mas ainda existem áreas que podem ser aprimoradas. Elementos como sua frequência de contato, o fortalecimento dos interesses mútuos ou a atuação estratégica podem ser elevados a um próximo nível. Escolha pelo menos uma dimensão para focar seu desenvolvimento. A evolução em um aspecto — seja maior constância de contato ou uma atuação mais estratégica — pode transformar a qualidade da sua rede interna rapidamente. Você pode acessar esses materiais de aprofundamento no site www.innernetworking.com.br.",
    average: "<strong>Índice moderado de Networking Interno (Inner Networking), com oportunidades significativas de desenvolvimento</strong>:\nSua rede interna existe, mas não é consistentemente cultivada ou estrategicamente ativada. Há bons pontos de contato, mas falta geração de valor, continuidade, aprofundamento ou estratégia clara. Fortaleça sua presença interna aumentando a frequência e a intencionalidade das interações. Construa pontes reais com colegas de outras áreas e invista em interesses compartilhados que gerem crescimento mútuo. Você pode acessar esses materiais de aprofundamento no site www.innernetworking.com.br.",
    bad: "<strong>Baixo Índice de Networking Interno (Inner Networking), com necessidade urgente de desenvolvimento</strong>:\nSeu networking interno está frágil ou pouco ativo. Isso pode limitar seu crescimento profissional, reduzir sua visibilidade e restringir seu acesso a novas oportunidades dentro da organização. Inicie com pequenos passos: reative conexões adormecidas, participe mais ativamente de eventos internos e se coloque intencionalmente em movimentos de colaboração. Fortalecer sua rede interna e o valor gerado por você devem se tornar prioridades estratégicas. Você pode acessar esses materiais de aprofundamento no site www.innernetworking.com.br."
};

const sectionInterpretations = {
    "1. RELACIONAMENTO PRÓXIMO (RP)": {
        excellent:
            "<strong>Excelente</strong>:\nVocê demonstra uma habilidade altamente desenvolvida para construir e fortalecer vínculos com colegas de diferentes áreas e níveis hierárquicos. Suas interações são pautadas por genuíno interesse, empatia e respeito, ampliando sua rede de forma estratégica e natural. Sua presença é reconhecida como construtiva e agregadora dentro da organização.\n<strong>Ações recomendadas</strong>: Mantenha sua postura genuína, amplie ainda mais a diversidade de seus contatos internos, e atue como um facilitador de integração entre áreas. Continue liderando com empatia e abertura, inspirando confiança e colaboração.",
        good:
            "<strong>Bom</strong>:\nVocê possui boas habilidades para estabelecer relações internas, mas em alguns momentos pode haver falta de consistência na aproximação ou profundidade nos vínculos. Em geral, você se conecta bem, mas pode expandir seu alcance estratégico dentro da organização.\n<strong>Ações recomendadas</strong>: Busque diversificar suas conexões, aproximando-se intencionalmente de áreas ou níveis que ainda não fazem parte da sua rede. Pratique maior intencionalidade nas interações informais e esteja atento(a) para manter e aprofundar os vínculos já criados.",
        average:
            "<strong>Oportunidades de melhoria</strong>:\nSua capacidade de construir relações próximas é limitada e tende a se restringir a círculos conhecidos ou à sua área imediata. Isso pode diminuir sua capacidade de ampliar perspectivas e abrir portas dentro da organização.\n<strong>Ações recomendadas</strong>: Trabalhe para sair da sua zona de conforto: participe de projetos interdepartamentais, eventos internos e atividades colaborativas. Estabeleça metas de ampliar seu networking interno buscando conhecer novos colegas de diferentes áreas ou níveis hierárquicos.",
        bad:
            "<strong>Necessário Investir Intensamente</strong>:\nSua pontuação indica dificuldades significativas em construir e manter relações próximas dentro da empresa. Isso pode impactar diretamente sua visibilidade, colaboração e possibilidades de crescimento interno.\n<strong>Ações recomendadas</strong>: Invista com urgência no fortalecimento de sua rede interna: participe de treinamentos de comunicação interpessoal, aceite convites para eventos internos, aproxime-se de colegas em momentos informais e desenvolva habilidades de aproximação genuína e empática. Networking interno é uma construção diária que começa com pequenas atitudes consistentes.",
    },
    "2. CONSTÂNCIA DE FOMENTO (CF)": {
        excellent:
            "<strong>Excelente</strong>:\nVocê demonstra alta consistência e qualidade nas suas interações internas. Sua rede está viva, ativa e produtiva, sustentada por contatos regulares e relevantes. Você entende que o valor do networking interno não está apenas em iniciar relações, mas em cultivá-las com frequência, atenção e propósito.\n<strong>Ações recomendadas</strong>: Continue nutrindo suas conexões com interações autênticas e intencionais. Amplie seu alcance participando de novos grupos, fóruns e eventos internos. Seja visto como alguém que não apenas se conecta, mas mantém relações consistentes e estratégicas ao longo do tempo.",
        good:
            "<strong>Bom</strong>:\nVocê mantém boas interações internas, mas pode haver variações na regularidade ou profundidade dessas conexões. Sua rede está ativa, mas poderia se beneficiar de uma atuação ainda mais constante e planejada para se tornar mais estratégica e sólida.\n<strong>Ações recomendadas</strong>: Estabeleça uma cadência de contatos regulares com pessoas-chave da sua rede interna. Planeje pequenos checkpoints de relacionamento e mantenha a presença ativa também nos canais digitais internos, não apenas nos momentos de necessidade.",
        average:
            "<strong>Oportunidade de melhoria</strong>:\nSua rede interna sofre com a falta de regularidade no contato. Você mantém conexões, mas de forma esporádica e reativa, o que dificulta a construção de vínculos sólidos e a percepção de valor a longo prazo.\n<strong>Ações recomendadas</strong>: Programe interações regulares — mesmo que breves — com sua rede interna. Participe de mais eventos internos, marque conversas de atualização e fortaleça sua presença em fóruns e plataformas digitais da empresa. A constância cria confiança e visibilidade.",
        bad:
            "<strong>Necessário Investir Intensamente</strong>:\nSua pontuação indica que seu networking interno é inconstante ou praticamente inexistente. A falta de constância no fomento das relações pode limitar seu acesso a oportunidades e enfraquecer sua presença organizacional.\n<strong>Ações recomendadas</strong>: Priorize o estabelecimento de rotinas de contato: envie mensagens de atualização, participe de reuniões voluntárias, envolva-se em grupos de trabalho e mantenha uma presença visível nos canais internos. Trate a manutenção da sua rede como uma atividade estratégica e não circunstancial.",
    },
    "3. ALINHAMENTO DE INTERESSES (AI)": {
        excellent:
            "<strong>Excelente</strong>:\nVocê demonstra uma capacidade elevada de construir parcerias baseadas em interesses comuns, confiança e crescimento mútuo. Sua atuação fortalece alianças estratégicas dentro da organização, gera trocas ricas e impulsiona oportunidades de colaboração verdadeira.\n<strong>Ações recomendadas</strong>: Continue identificando e aprofundando temas de interesse compartilhado. Crie espaços de colaboração proativa e mantenha seu papel como facilitador de crescimento mútuo entre colegas. Multiplique sua influência conectando pessoas e projetos que podem se fortalecer.",
        good:
            "<strong>Bom</strong>:\nVocê possui uma boa capacidade de alinhar interesses com colegas e criar parcerias produtivas, embora existam momentos em que o alinhamento poderia ser mais intencional ou aprofundado.\n<strong>Ações recomendadas</strong>: Trabalhe para identificar mais cedo os interesses em comum e fortalecer alianças estratégicas. Compartilhe mais informações relevantes e envolva colegas em projetos onde todos possam ganhar, ampliando seu impacto dentro da organização.",
        average:
            "<strong>Oportunidade de melhoria</strong>:\nSeu networking interno carece de aprofundamento em interesses compartilhados. As relações podem ser amistosas, mas nem sempre geram crescimento conjunto ou colaboração estratégica.\n<strong>Ações recomendadas</strong>: Busque ativamente identificar pontos de conexão além do contexto imediato. Proponha projetos colaborativos, compartilhe insights relevantes e demonstre genuíno interesse em construir parcerias de valor com seus colegas.",
        bad:
            "<strong>Necessário Investir Intensamente</strong>:\nSua pontuação indica que você ainda não utiliza a estratégia de interesses compartilhados para fortalecer sua rede interna. Isso limita a profundidade das relações e a abertura de novas oportunidades.\n<strong>Ações recomendadas</strong>: Desenvolva habilidades de escuta ativa para entender os objetivos e desafios dos colegas. Participe de projetos conjuntos, ofereça suporte em iniciativas que não sejam exclusivamente suas e invista na construção de parcerias genuínas, baseadas em confiança e reciprocidade.",
        },
    "4. ATUAÇÃO ESTRATÉGICA (AE)": {
        excellent:
            "<strong>Excelente</strong>:\nVocê atua estrategicamente de maneira exemplar, agregando valor nas interações, fortalecendo sua reputação e impactando positivamente o ambiente interno. Seu conhecimento técnico, visão estratégica e capacidade de contribuição são reconhecidos de forma natural e respeitosa. Você se posiciona como uma liderança de influência e referência dentro da organização.\n<strong>Ações recomendadas</strong>: Continue preparando-se para cada interação importante, buscando gerar valor diferenciado. Inspire outros a também atuarem com excelência, multiplicando o impacto positivo da sua presença estratégica na empresa.",
        good:
            "<strong>Bom</strong>:\nVocê demonstra valor e visão estratégica em boa parte das interações, mas ainda pode fortalecer sua preparação ou ampliar sua influência em fóruns, eventos e interações importantes. Há espaço para tornar sua contribuição ainda mais intencional e visível.\n<strong>Ações recomendadas</strong>: Planeje estrategicamente suas participações, buscando antecipar onde e como pode gerar mais impacto. Aproveite momentos de exposição interna para reforçar sua autoridade de forma genuína, consistente e sem excessos.",
        average:
            "<strong>Oportunidades de melhoria</strong>:\nSua capacidade de atuação estratégica é percebida de maneira irregular. Algumas interações agregam valor, mas muitas são conduzidas de forma improvisada, sem planejamento consciente. Isso limita seu reconhecimento e reduz o potencial de influência positiva.\n<strong>Ações recomendadas</strong>: Invista em sua preparação: antecipe dados, tendências e contribuições relevantes para cada situação. Trate cada reunião ou fórum como uma oportunidade estratégica para agregar valor e fortalecer sua reputação interna de forma intencional e ética.",
        bad:
            "<strong>Necessário Investir Intensamente</strong>:\nSua pontuação indica uma atuação interna reativa ou pouco estratégica. A falta de preparação e de geração ativa de valor nas interações prejudica sua visibilidade positiva e limita o crescimento da sua reputação dentro da organização.\n<strong>Ações recomendadas</strong>: Construa um plano de desenvolvimento focado em atuação estratégica: participe de treinamentos de comunicação estratégica, busque mentorias, pratique a preparação de pautas e entregas antes das reuniões, e cultive a consciência de que cada interação é uma oportunidade de gerar impacto duradouro.",
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
      interpretation =  "bad";
    }
    return interpretation;
}


async function showResults() {
    showLoading();
    document.getElementById("test-container").classList.add("hidden");

    const messages = [
        "Calculando o seu índice de influência e colaboração interna",
        "Analisando a força e a coesão do seu networking pessoal",
        "Decifrando alguns padrões",
        "Apresentamos o seu Índice de Networking Interno..."
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
            labels: ['Relacionamento Próximo', 'Constância de Fomento', 'Alinhamento de interesses', 'Atuação Estratégica'],
            datasets: [{
                label: 'Pontos',
                data: sectionScores,
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(181, 235, 54)',
                pointBackgroundColor: 'rgb(181, 235, 54)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(181, 235, 54)'
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

    finalMessageTitle.innerText = "INI - Índice de Networking Interno";
    finalMessage.innerHTML =
        `Analise cuidadosamente seus resultados. Eles mostram um panorama de suas habilidades atuais de networking dentro da organziação onde você atua. Considere a presença que você entrega em tudo o que faz. Enxergue seus pontos fortes e célebres, mas também não ignore as áreas que indicam espaço para crescimento. Entenda que esta avaliação é um retrato do momento, não um veredito final. Você é plenamente capaz de evoluir, se adaptar e aprender. Atualmente, praticar networking não é mais apenas um complemento, é uma necessidade premente.
        <blockquote cite="https://www.linkedin.com/in/paulocruzfilho">"Hoje, praticar networking não é mais apenas um complemento mas uma necessidade essencial para o desenvolvimento pessoal e profissional."</blockquote><address> - Paulo Cruz, fundador do Inner Networking.</address>
        <br>De forma geral, o <strong>Índice de Networking Interno (INI)</strong> reflete o desempenho integrado das quatro dimensões essenciais – Relacionamento Próximo (RP), Constância de Fomento (CF), Alinhamento de Interesses (AI) e Atuação Estratégica (AE) – que compõem a sua capacidade de estabelecer conexões valiosas no ambiente profissional dentro da organização. A pontuação final, obtida pela soma dos pontos de cada dimensão, indica o quão eficazmente você se relaciona, se posiciona, comunica suas competências e constrói relacionamentos sólidos. Uma pontuação elevada sugere que você possui habilidades robustas de networking interno, abrindo portas para novas oportunidades dentro da própria organização e tendo abertura para parcerias estratégicas com pessoas das mais variadas áreas organizacionais. Por outro lado, uma pontuação mais baixa sinaliza áreas de desenvolvimento que, quando aprimoradas, podem potencializar sua reputação e performance pessoal e profissional. Analise os resultados abaixo para identificar seus pontos fortes e as oportunidades de melhoria, e use essas informações para direcionar seu autodesenvolvimento e aprimorar suas práticas de networking interno.`;


totalResultTitle.innerText = "Seu resultado foi de:";
totalResult.innerText = `${totalScore} de ${80} pontos possíveis`;

let interpretation = getResultInterpretation(totalScore);
totalResultInterpretation.innerHTML = totalResultInterpretations[interpretation];

//  saveAssessment("Fórmula do Networking", totalScore, getResultInterpretation(totalScore)); - OLD CALL
await saveAssessment("Índice de Networking Interno", totalScore, interpretation, testAnswers);
     

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
    <strong>Lembre-se: sua maturidade de Networking Interno não é estática; ela pode ser moldada e aprimorada com dedicação, prática e estratégia.</strong> Use essas informações como uma bússola para fortalecer seus pontos fortes e trabalhar nas áreas que chamam mais atenção. Ao fazer isso, você não apenas aprimorará seu desempenho em networking interno, mas também abrirá portas para avanços inovadores em sua carreira e para a construção de relacionamentos profissionais sólidos e enriquecedores.
    <blockquote cite="https://www.linkedin.com/in/paulocruzfilho">“Seus conhecimentos e habilidades abrem portas, mas são seus relacionamentos que dirão até onde você pode ir.”</blockquote><address> - Paulo Cruz, fundador do Inner Networking.</address><br>
    Boa sorte em sua jornada de crescimento profissional!
    <br><br>
    Para saber mais sobre a INI (Índice de Networking Interno), você pode acessar os materiais de aprofundamento gratuitos no site <a href="https://www.innernetworking.com.br" target="_blank">www.innernetworking.com.br</a>. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu INI e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking interno.
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
        alert("Erro ao compartilhar resultado. Por favor, tente novamente."); // Optional user message
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
                alert("Usuário desconectado. Entre novamente para baixar o arquivo.");
            }
        });
    }

    initialModal.classList.remove('hidden');
});
// Make these functions globally accessible
window.showLoading = showLoading;
window.hideLoading = hideLoading;
window.loadingMessage = loadingMessage; // Also expose the loadingMessage element
