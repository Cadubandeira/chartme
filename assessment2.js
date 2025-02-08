let currentStep = 0;
let currentSection = 0;
let userName = "User";
let userEmail = "user@email.com";
let testAnswers = [];
const sections = [
  {
    title: "1. AGRADABILIDADE",
    instruction:
      "A agradabilidade é a capacidade de uma pessoa de ser receptiva, cordial e interessada nos contatos com outras pessoas, independentemente do cargo, função ou status. Pessoas com essa habilidade tendem a ser acessíveis, espontâneas e proativas em suas abordagens e diálogos. São bem vistas, conhecidas por suas conversas construtivas e pela capacidade de escutar e expressar opiniões sem causar confrontos. Sempre que possível, estão presentes em eventos na empresa, mercado e outros encontros. Mantêm uma postura e imagem compatíveis às situações e estabelecem vínculos com certa facilidade.",
    questions: [
      {
        text: "Receptividade, atenção e compreensão para com os outros\nComo você avalia sua capacidade de demonstrar receptividade, atenção e compreensão ao interagir com as pessoas, independentemente de cargo ou status?",
        options: [
          "Sempre: Sempre mostro-me acessível, atencioso(a) e compreensivo(a) com todas as pessoas, independentemente de cargo ou status, em qualquer situação.",
          "Frequentemente: Costumo ser receptivo(a) e compreensivo(a) com as pessoas, mas em alguns momentos posso ser mais reservado(a) ou menos atento(a).",
          "Ocasionalmente: Em certas ocasiões, consigo ser receptivo(a) e demonstrar compreensão com as pessoas, mas frequentemente encontro dificuldades para manter uma atenção plena.",
          "Raramente: Tenho dificuldade em manter uma postura receptiva e atenciosa ao interagir com as pessoas.",
        ],
      },
      {
        text: "Abordagem e início de conversas\nComo você avalia sua habilidade para se aproximar e iniciar conversas de forma espontânea e construtiva, tanto com pessoas conhecidas quanto desconhecidas?",
        options: [
          "Sempre: Aproximo-me e inicio conversas de maneira natural e espontânea, gerando diálogos interessantes e construtivos em qualquer situação, tanto com pessoas que conheço quanto que não conheço.",
          "Frequentemente: Geralmente me aproximo e consigo iniciar conversas com facilidade, embora nem sempre eu consiga tornar ou manter o diálogo construtivo.",
          "Ocasionalmente: Consigo iniciar conversas em alguns momentos, mas muitas vezes sinto dificuldades, hesito ou enfrento barreiras para continuar ou mesmo iniciar a conversa.",
          "Raramente: Raramente me sinto à vontade para iniciar conversas ou engajar em diálogos.",
        ],
      },
      {
        text: "Atenção ao escutar\nComo você avalia sua capacidade de ouvir atentamente, demonstrando interesse genuíno durante a comunicação?",
        options: [
          "Sempre: Sempre escuto com total atenção e interesse genuíno, mantendo o foco na pessoa com a qual estou interagindo.",
          "Frequentemente: Geralmente mantenho uma boa atenção na escuta, embora em algumas ocasiões possa me distrair ou desviar minha atenção momentaneamente.",
          "Ocasionalmente: Normalmente encontro dificuldades para manter o interesse e o foco durante a escuta de uma outra pessoa.",
          "Raramente: Não consigo concentrar minha atenção ao escutar a maioria das pessoas, perdendo o interesse e o foco rapidamente e frequentemente.",
        ],
      },
      {
        text: "Estabelecimento de vínculos\nComo você avalia sua habilidade para criar e manter vínculos sólidos e produtivos, especialmente no ambiente profissional?",
        options: [
          "Sempre: Tenho uma habilidade natural (ou desenvolvida) para criar e sustentar vínculos fortes e produtivos com as pessoas, aplicando essa capacidade de forma consistente.",
          "Frequentemente: Costumo criar vínculos com facilidade, embora nem sempre eles se mantenham tão fortes ou duradouros quanto eu desejaria.",
          "Ocasionalmente: Consigo estabelecer vínculos em alguns momentos, mas geralmente tenho desafios para mantê-los a longo prazo.",
          "Raramente: Encontro grandes dificuldades em criar e manter vínculos significativos e frequentes com as pessoas.",
        ],
      },
      {
        text: "Adaptação a diferentes públicos\nComo você avalia sua capacidade de se adaptar e interagir de forma eficaz com diferentes públicos e em variados contextos?",
        options: [
          "Sempre: Consigo me adaptar e interagir com eficácia e naturalidade com qualquer público ou contexto, com flexibilidade e empatia.",
          "Frequentemente: Na maioria das situações adapto-me bem a diferentes públicos e contextos, embora em alguns contextos específicos possa enfrentar dificudaldades ou desconfortos.",
          "Ocasionalmente: Consigo me adaptar a alguns públicos ou contextos, mas normalmente precisando fazer um esforço considerável, o que torna a adaptação um desafio constante para mim.",
          "Raramente: Tenho dificuldades significativas em me adaptar e interagir com públicos e contextos variados, preferindo permanecer em relações e situações já conhecidas e confortáveis.",
        ],
      },
    ],
  },
  {
    title: "2. EXPERTISE",
    instruction:
      "A expertise diz respeito à capacidade de uma pessoa de usar eficazmente suas competências cognitivas, técnicas e comportamentais para atingir metas, resolver problemas, propor ideias e fazer sugestões. Pessoas com alta expertise são geralmente proativas, produtivas e mesmo realizadas em suas áreas. São frequentemente inconformadas com o que já sabem, arrojadas na exploração de novos conceitos e comprometidas com o autoconhecimento e o autodesenvolvimento. Fazem questão de compartilhar conhecimentos e experiências com profissionais no mercado e, em especial, dentro de sua própria organização, numa postura de humildade estratégica e refinada.",
    questions: [
      {
        text: "Aplicação de habilidades cognitivas, técnicas e comportamentais: \nComo você avalia sua capacidade de aplicar suas habilidades cognitivas, técnicas e comportamentais para gerar inovações, melhorar processos, atingir objetivos e superar desafios?",
        options: [
          "Sempre: Utilizo de forma consistente e estratégica minhas habilidades, expertises e competências, contribuindo ativamente para inovações, atingimento de objetivos e superação de desafios.",
          "Frequentemente: Na maioria das vezes aplico minhas habilidades, expertises e competências com sucesso, embora em algumas situações encontre desafios e enfrente obstáculos.",
          "Ocasionalmente: Consigo utilizar alguma habilidades, expertises e competências, mas frequentemente encontro dificuldades ou não aproveito todas as oportunidades.",
          "Raramente: Tenho dificuldades significativas em aplicar minhas habilidades, expertises e competências para aproveitar oportunidades, solucionar problemas ou alcançar metas.",
        ],
      },
      {
        text: "Busca por conhecimento e atualização: \nComo você avalia sua iniciativa em buscar novos conhecimentos e se manter atualizado(a) na sua área de atuação?",
        options: [
          "Sempre: Estou constantemente em busca de novas informações, tendências e conhecimentos relevantes, mantendo-me na vanguarda da minha área.",
          "Frequentemente: Procuro me atualizar de forma regular, embora em alguns momentos tenha dificuldade em acompanhar todas as novidades.",
          "Ocasionalmente: Busco atualizações de vez em quando, mas frequentemente encontro desafios para acompanhar a evolução da minha área.",
          "Raramente: Quase nunca busco novos conhecimentos e/ou raramente acompanho as tendências ou inovações do meu campo.",
        ],
      },
      {
        text: "Uso do compartilhamento para potencializar meus conhecimentos e experiências: \nComo você avalia a frequência e a eficácia com que compartilha seus conhecimentos e experiências para fortalecer sua relevância e contribuir para sua área?",
        options: [
          "Sempre: De forma proativa, estruturada e contínua, uso e compartilho meus conhecimentos, aprendizados e experiências, estabelecendo-me como uma referência em minha área e maximizando minha reputação.",
          "Frequentemente: Compartilho meus conhecimentos, aprendizados e experiências com regularidade, embora de maneira pouco estruturada e sistemática.",
          "Ocasionalmente: Compartilho meus conhecimentos e aprendizados esporadicamente, pois enfrento desafios ao tentar capitalizar, estruturar, organizar, repassar ou transmitir minhas experiências e conteúdos.",
          "Raramente: Tenho pouquíssimas iniciativas de compartilhamento de meus conhecimentos e aprendizados, e raramente contribuo para o intercâmbio de experiências.",
        ],
      },
      {
        text: "Responsabilidade e cumprimento de compromissos, metas e resultados: \nComo você avalia sua capacidade de assumir e cumprir metas e compromissos, garantindo a responsabilidade pelos resultados obtidos?",
        options: [
          "Sempre: Sempre assumo o cumprimento das minhas metas e honro meus compromissos com excelência, assumindo total responsabilidade pelos resultados.",
          "Frequentemente: Na maioria das vezes honro meus compromissos e assumo o cumprimento e a responsabilidade por minhas metas e resultados, mas em alguns casos falho neste processo ou enfrento dificuldades e contratempos.",
          "Ocasionalmente: Tenho dificuldades regulares em cumprir metas, honrar compromissos ou assumir a responsabilidade pelos resultados e de forma consistente.",
          "Raramente: Muito dificilmente consigo honrar meus compromissos e assumir o cumprimento e a responsabilidade por minhas metas e resultados.",
        ],
      },
      {
        text: "Proatividade na aprendizagem e autodesenvolvimento: \nComo você avalia sua iniciativa para buscar oportunidades de aprendizagem e se desenvolver continuamente, aprimorando suas habilidades e competências?",
        options: [
          "Sempre: Tenho autonomia e busco ativamente novas formas de aprimorar minhas habilidades e competências, impulsionado(a) por uma forte curiosidade e desejo de superação.",
          "Frequentemente: Procuro me desenvolver regularmente, embora precise de algum estímulo externo ou oportunidade específica para fazê-lo. ",
          "Ocasionalmente: Tento me desenvolver, mas não sei por qual caminho seguir e/ou não percebo oportunidades de desenvolvimento na minha jornada.",
          "Raramente: Raramente procuro oportunidades para me desenvolver ou busco autodesenvolvimento, a menos que seja obrigatório ou inevitável ​​para meu trabalho.",
        ],
      },
    ],
  },
  {
    title: "3. CONFIANÇA",
    instruction:
      "A confiança refere-se à qualidade que uma pessoa tem de transmitir integridade, segurança e presença em todas as suas interações pessoais e profissionais. Pessoas confiáveis ​​são reconhecidas como profissionais coerentes entre discurso e ação, e são também cumpridoras de suas palavras, metas e compromissos, seja dentro da organização em que atuam ou em relações externas. Por essa razão, elas estabelecem relacionamentos e alianças consistentes e fidedignas, consolidam parcerias de longo prazo e são valorizadas como referências em seriedade, sendo vistas como escolhas indispensáveis para projetos, desafios, cooperação e amizades pessoais e estratégicas.",
    questions: [
      {
        text: "Coerência entre palavra e ação\nComo você avalia sua capacidade de honrar promessas, acordos, responsabilidades e compromissos, mantendo uma postura aberta e transparente mesmo diante de dificuldades?",
        options: [
          "Sempre: Sou uma pessoa reconhecida por sempre honrar e cumprir minhas promessas, acordos, responsabilidades e compromissos, tendo uma postura aberta, sincera e transparente em situações adversas.",
          "Frequentemente: Na maioria das vezes, honro e cumpro o que foi prometido ou acordado, mas em situações problemáticas tenho dificuldades em lidar e manter uma postura aberta, sincera e transparente.",
          "Ocasionalmente: Tenho dificuldades frequentes com relação a honrar e cumprir minhas promessas, acordos, responsabilidades e compromissos com outras pessoas, e minha postura tende a ser pouco transparente em situações problemáticas.",
          "Raramente: Raramente consigo honrar e cumprir minhas promessas, acordos, responsabilidades e compromissos com outras pessoas.",
        ],
      },
      {
        text: "Estabelecimento de relacionamentos confiáveis: \nComo você avalia sua capacidade de construir e manter relacionamentos baseados em transparência, respeito e confiança mútua?",
        options: [
          "Sempre: Consigo criar e manter relacionamentos sólidos e genuínos, pautados na transparência, no respeito e na confiança mútua.",
          "Frequentemente: Geralmente estabeleço conexões confiáveis, embora em determinadas situações eu enfrente desafios para manter a transparência ou o mesmo nível de abertura.",
          "Ocasionalmente: Tenho momentos em que consigo formar relações de confiança, mas frequentemente encontro dificuldades em mantê-las de forma consistente.",
          "Raramente: Encontro grandes dificuldades em criar e sustentar relacionamentos baseados em confiança, transparência e respeito.",
        ],
      },
      {
        text: "Manutenção da confidencialidade ao lidar com informações reservadas:\nComo você se posiciona em relação à proteção e manutenção da confidencialidade de informações sensíveis ou reservadas?",
        options: [
          "Sempre: Mantenho rigorosamente a confidencialidade de todas as informações sensíveis ou reservadas e nunca compartilho informações confidenciais sem a devida autorização.",
          "Frequentemente: Na maioria das vezes, consigo proteger a confidencialidade, embora possa ocorrer algum deslize ocasionalmente.",
          "Ocasionalmente: Tenho certa dificuldade em manter a confidencialidade e o sigilo das informações, e às vezes acabo compartilhando dados sensíveis inadvertidamente.",
          "Raramente: Tenho dificuldades em manter a confidencialidade das informações, deixando-as expostas ou mal gerenciadas, por descuido, por achar que não são tão importantes ou outros motivos.",
        ],
      },
      {
        text: "Consolidação de parcerias de longo prazo: \nComo você avalia sua capacidade de estabelecer e manter parcerias baseadas na confiança mútua ao longo do tempo?",
        options: [
          "Sempre: Tenho uma trajetória de estabelecimento e manutenção de parcerias, alianças e relações sólidas e duradouras, baseadas na confiança mútua.",
          "Frequentemente: Geralmente crio parcerias, alianças e relações de confiança, embora nem todas se mantenham a longo prazo.",
          "Ocasionalmente: Por vezes consigo estabelecer parcerias, alianças ou relações, mas são de pouca confiança e/ou tenho dificuldades para mantê-las de forma consistente.",
          "Raramente: Tenho grandes dificuldades em criar e manter parcerias, alianças ou relações confiáveis e duradouras.",
        ],
      },
      {
        text: "Integridade e reconhecimento: \nComo você avalia o reconhecimento que recebe em suas relações no que diz respeito à sua integridade – ou seja, à capacidade de “fazer o que eu digo” (walk the talk) – e à postura confiável que adoto?",
        options: [
          "Sempre: Sou constantemente reconhecido(a) por minha integridade e coerência, praticando o “walk the talk” (“fazer o que eu digo”) e sendo uma referência de confiabilidade em minhas relações.",
          "Frequentemente: Na maioria das vezes postura é íntegra (ou seja, minhas ações correspondem às minhas palavras) e sou, de forma geral, valorizado(a) por minha confiabilidade, mesmo que nem todas as pessoas percebam essa coerência.",
          "Ocasionalmente: Em algumas situações consigo demonstrar integridade, mas há momentos em que minhas ações não refletem totalmente o que digo, o que compromete esse reconhecimento.",
          "Raramente: Tenho dificuldades em alinhar minhas palavras com minhas ações, e consequentemente, raramente sou reconhecido(a) por integridade e confiança em minhas relações.",
        ],
      },
    ],
  },
  {

    title: "4. COLABORAÇÃO",
    instruction:
      "A virtude da colaboração diz respeito à disposição de um profissional em oferecer contribuições benéficas a outros, sem necessariamente esperar uma retribuição imediata. São pessoas cooperativas, engajadas, receptivas às demandas de ajuda e apoio, baseando-se no princípio da reciprocidade com aqueles a quem prestam apoio. Demonstram disposição e participam sempre que possível de atividades que agregam valor para colegas, clientes, parceiros de negócios e outros profissionais do mercado. Tal interação colaborativa se traduz em ações como mentoria, aconselhamento, compartilhamento de conhecimentos, insights e diálogos enriquecedores com as pessoas envolvidas.",
    questions: [
      {
        text: "Disposição em contribuir sem retribuição imediata:\nComo você avalia sua disposição para oferecer ajuda e contribuições sem esperar algo em troca imediatamente?",
        options: [
          "Sempre: Ofereço ajuda e boas contribuições de forma espontânea, sem esperar reciprocidade imediata (ou seja, sem esperar nada em troca).",
          "Frequentemente: Frequentemente ofereço ajuda e contribuo, mas em determinadas situações valorizo e espero alguma forma de reciprocidade.",
          "Ocasionalmente: Contribuo em determinadas ocasiões, e quase sempre esperando algum retorno ou reconhecimento.",
          "Raramente: Tenho dificuldades em contribuir sem que haja uma expectativa de retorno imediato.",
        ],
      },
      {
        text: "Receptividade às demandas de ajuda e apoio: \nComo você avalia sua capacidade de ser receptivo(a) e atender às demandas de ajuda e apoio quando solicitadas?",
        options: [
          "Sempre: Sou altamente receptivo(a) e atendo prontamente as demandas de ajuda que chegam à mim, sempre busco auxiliar de alguma forma.",
          "Frequentemente: Geralmente respondo bem às solicitações, embora em alguns momentos possa hesitar (por priorização, falta de tempo, falta de interesse ou outros motivos).",
          "Ocasionalmente: Atendo às demandas de ajuda apenas em poucas e determinadas ocasiões, normalmente quando estão alinhadas às minhas próprias demandas, quando estou sobrecarregado(a) ou porque não disponho das informações necessárias para ajudar de maneira eficaz, entre outros motivos.",
          "Raramente: Tenho dificuldades em ser receptivo(a) e raramente atendo às solicitações de ajuda dos outros, o que pode ocorrer quando me sinto desconectado(a) ou quando as demandas não se alinham com minhas prioridades imediatas, ou outros motivos.",
        ],
      },
      {
        text: "Participação ativa em atividades que agregam valor: \nComo você avalia seu envolvimento em atividades que agregam valor, ou seja, que beneficiam tanto você quanto seus colegas ou a organização?",
        options: [
          "Sempre: Participo ativamente e proativamente de atividades que agregam valor, contribuindo de forma consistente para o desenvolvimento coletivo.",
          "Frequentemente: Geralmente me envolvo em atividades relevantes que agregam valor para outras pessoas, embora nem sempre de forma contínua ou estruturada.",
          "Ocasionalmente: Participo esporadicamente e com pouca frequência de atividades que agregam valor para outras pessoas.",
          "Raramente: Raramente me envolvo em atividades que agregam valor a outras pessoas.",
        ],
      },
      {
        text: "Mentoria, incentivo, recomendações e conselhos:\nComo você avalia sua prática de oferecer mentoria, orientação, incentivo e conselhos para ajudar colegas e parceiros?",
        options: [
          "Sempre: Constantemente e proativamente ofereço mentoria, orientação, incentivo, feedbacks e dou conselhos para auxiliares colegas e/ou parceiros.",
          "Frequentemente: Ocasionalmente ofereço mentoria, orientação, incentivo ou dou conselhos, mas não é uma prática constante.",
          "Ocasionalmente: Dou conselhos e orientações em algumas situações, geralmente sob demanda, e não de forma proativa, contínua ou sistemática.",
          "Raramente: Tenho dificuldades em oferecer mentoria, orientações, incentivos ou conselhos, e raramente me envolvo nesse tipo de apoio.",
        ],
      },
      {
        text: "Compartilhamento de insights e fomento a diálogos enriquecedores: \nComo você avalia sua iniciativa para compartilhar conhecimentos e promover diálogos construtivos que possam enriquecer o ambiente de trabalho?",
        options: [
          "Sempre: Compartilho insights proativamente e promovo discussões construtivas de forma contínua, contribuindo para um ambiente colaborativo e inovador.",
          "Frequentemente: Costumo compartilhar ideias e fomentar diálogos, embora não o faça de maneira sistemática e nem sempre estimulando diálogos enriquecedores.",
          "Ocasionalmente: Compartilho insights apenas em algumas ocasiões, normalmente quando solicitado, e tenho uma certa dificuldade em manter diálogos constantes e enriquecedores.",
          "Raramente: Tenho dificuldades em compartilhar meus conhecimentos e insights, sendo que raramente ou quase nunca promovo discussões ou diálogos.",
        ],
      },
    ],
  },
  {
    title: "5. VISIBILIDADE",
    instruction:
      "A visibilidade mede a capacidade de uma pessoa de tornar suas competências, resultados e contribuições conhecidas no ambiente de trabalho e no mercado. Profissionais com alta visibilidade sabem se posicionar, compartilhar conquistas de forma autêntica e construir uma reputação sólida, mantendo um equilíbrio saudável entre autopromoção e relevância. Ao cultivarem uma imagem consistente, elevam seu “valuation pessoal” - o valor percebido de sua marca profissional entre colegas, líderes, clientes e parceiros -, abrindo portas para oportunidades de crescimento, parcerias e reconhecimento.",
    questions: [
      {
        text: "Promoção das próprias realizações e habilidades\nComo você avalia sua capacidade de promover, de maneira estratégica e natural, suas conquistas e habilidades, fortalecendo sua imagem profissional?",
        options: [
          "Sempre: Compartilho minhas conquistas e habilidades de forma estratégica, natural e objetiva, reforçando meu valor profissional sem exageros, contribuindo conscientemente para meu “valuation profissional e pessoal”.",
          "Frequentemente: Menciono meus feitos e habilidades com certa ou alguma frequência, embora de forma não estruturada e/ou sentindo certo desconforto ao fazê-lo em alguns momentos.",
          "Ocasionalmente: Exponho minhas realizações apenas em situações específicas, normalmente sob demanda, pois tenho dificuldades em valorizar ou compartilhar meus feitos.",
          "Raramente: Raramente exponho ou promovo minhas conquistas e quase nunca menciono minhas realizações em contextos e conversas profissionais.",
        ],
      },
      {
        text: "Participação em eventos e oportunidades de exposição\nComo você avalia sua iniciativa em buscar e participar de eventos, palestras, workshops e outras oportunidades que aumentem sua visibilidade profissional?",
        options: [
          "Sempre: Busco ativamente participar de eventos (palestras, workshops, painéis ou outros) internos e externos que fortaleçam minha imagem e ampliem minha rede de contatos profissionais.",
          "Frequentemente: Participo de eventos com regularidade, embora nem sempre de forma planejada ou sistemática.",
          "Ocasionalmente: Participo de eventos de forma esporádica, enfrentando desafios para integrar essas oportunidades na minha rotina.",
          "Raramente: Raramente participo de eventos ou tiro aproveito de tipo de oportunidade para aumentar minha visibilidade.",
        ],
      },
      {
        text: "Uso de redes sociais e plataformas profissionais\nComo você avalia sua capacidade de utilizar redes sociais e plataformas profissionais para divulgar seu trabalho e reforçar sua marca pessoal?",
        options: [
          "Sempre: Mantenho meus perfis sempre atualizados, faço postagens relevantes e interajo de forma estratégica, fortalecendo minha marca pessoal.",
          "Frequentemente: Acesso redes sociais ou plataformas profissionais com regularidade, e uso e publico com certa frequência, embora não seja com foco profissional e/ou nem sempre atualize ou divulgue meu trabalho de forma consistente.",
          "Ocasionalmente: Tenho perfil em redes sociais ou plataformas profissionais, mas não atualizo ou uso/acesso regularmente, utilizando de forma esporádica, passiva e/ou com pouquíssima regularidade na atualização de conteúdos.",
          "Raramente: Não tenho perfil em redes sociais ou plataformas profissionais e/ou tenho dificuldades em (querer) usar essas tecnologias para divulgar meu trabalho e compartilhar minhas experiências.",
        ],
      },
      {
        text: "Demonstração de resultados\nComo você avalia sua habilidade de apresentar de forma clara e estruturada os resultados e impactos dos seus projetos e realizações?",
        options: [
          "Sempre: Apresento de forma clara e estruturada o impacto dos meus projetos, seja em relatórios, reuniões ou conversas informais, evidenciando meu valor profissional.",
          "Frequentemente: Mostro meus resultados de forma consistente, ainda que nem sempre de forma estruturada, detalhada e proativa.",
          "Ocasionalmente: Apresento meus resultados esporadicamente, sem formalização regular, o que dificulta a visibilidade do meu impacto e geração de valor.",
          "Raramente: Tenho dificuldades em formalizar ou demonstrar meus resultados, mesmo quando eles são relevantes para meu desenvolvimento profissional.",
        ],
      },
      {
        text: "Reconhecimento como referência ou especialista\nComo você avalia o reconhecimento que recebe como referência ou especialista em sua área, tanto dentro da sua organização quanto no mercado?",
        options: [
          "Sempre: Sou constantemente lembrado(a) como especialista em minha área, tanto internamente quanto no mercado, o que reforça meu valor (“valuation pessoal”) e a confiança dos demais em minhas habilidades.",
          "Frequentemente: Sou reconhecido(a) por minha especialidade, mas ainda vejo e sinto que há espaço para maior destaque e visibilidade.",
          "Ocasionalmente: Recebo algum reconhecimento como referência, porém de forma esporádica e menos consistente.",
          "Raramente: Raramente sou reconhecido(a) como referência, mesmo possuindo habilidades e experiências relevantes.",
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
    labels: ['Agradabilidade', 'Expertise', 'Confiança', 'Colaboração', 'Visibilidade'],
    datasets: [{
      label: 'Dimensões do Networking',
      data: [],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
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
          label: function(context) {
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
    loadingMessage.innerText = "Prepare-se para avaliar seu magnetismo pessoal"
     await new Promise(resolve => setTimeout(resolve, 2500));
    document.getElementById('initial-modal').classList.add('hidden');
    document.getElementById('test-container').classList.remove('hidden');
    document.removeEventListener('keypress', handleEnterTest);
    await loadQuestion();
      hideLoading();
}

function handleEnterTest(event) {
  if (event.key === "Enter") {
    nextQuestion();
  }
}

async function loadQuestion() {
  document.getElementById("section-title").innerText = sections[currentSection].title;
  document.getElementById("section-instruction").innerText = sections[currentSection].instruction;
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
  await new Promise((resolve) => setTimeout(resolve, 100));
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

     if(!selectedOption){
        showError('answer-error', true);
        return;
     }else {
          showError('answer-error', false);
     }
    document.removeEventListener('keypress', handleEnterTest);
  testAnswers.push(parseInt(selectedOption.value));
  currentStep++;
  if (currentStep < sections[currentSection].questions.length) {
    loadQuestion();
  } else {
    currentStep = 0;
    currentSection++;
    if (currentSection < sections.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
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
    section.questions.forEach((question, questionIndex) => {
      const answerValue = testAnswers[questionIndex + (sectionIndex * section.questions.length)];
      sectionScore += (4 - answerValue);
    });
    sectionScores.push(sectionScore);
    totalScore += sectionScore;
  });
  return { totalScore, sectionScores };
}

const totalResultInterpretations = {
    excellent: "Excelente IMP: Você demonstra um desempenho excepcional em todas as áreas do networking. A combinação de suas habilidades de agradabilidade, expertise, confiança, colaboração e visibilidade demonstra um nível atual altíssimo de Magnetismo Pessoal de Networking. Sua capacidade de construir relacionamentos sólidos, comunicar seus conhecimentos e promover suas conquistas reflete um alto “valuation” pessoal e profissional. Continue investindo no aprimoramento contínuo para manter e expandir essa excelência, pois seu magnetismo pessoal é um diferencial competitivo poderoso. Você pode acessar materiais de aprofundamento no site www.innernetworking.com.br.",
      good: "Bom IMP: Seu índice indica que você possui boas habilidades de networking e já alcançou uma base sólida em diversas dimensões do seu Magnetismo Pessoal de Networking. No entanto, existem oportunidades de aprimoramento em alguns atributos para que você atinja um nível ainda mais elevado. Analise quais dimensões tiveram pontuações mais baixas e concentre seus esforços em desenvolver essas áreas por meio de conteúdos, treinamentos, feedbacks e práticas direcionadas. Você pode acessar esses materiais de aprofundamento no site www.innernetworking.com.br.",
	average: "Médio: IMP: Sua pontuação média em seu Nível de Magnetismo Pessoal sugere que, embora você apresente competências em networking, há desafios importantes a serem superados. Identifique os atributos em que seu desempenho é menos consistente e busque estratégias práticas (como mentorias, cursos ou mudanças de comportamento e novos hábitos) para aprimorar sua atuação. Investir no desenvolvimento dessas habilidades permirá transformar seus relacionamentos profissionais e ampliar suas oportunidades. Você pode acessar esses materiais de aprofundamento no site www.innernetworking.com.br.",
	bad: "Baixo IMP: Seu índice aponta para desafios significativos no desenvolvimento das habilidades de networking. É essencial trabalhar de forma consistente e direcionada em todas as dimensões – desde a receptividade e colaboração até a visibilidade e demonstração de resultados. Procure treinamentos, mentorias, leituras e práticas que estimulem seu crescimento pessoal e profissional, a fim de fortalecer suas conexões e expandir seu magnetismo no ambiente de trabalho. Você pode acessar esses materiais de aprofundamento no site www.innernetworking.com.br."

};

const sectionInterpretations = {
  "1. AGRADABILIDADE": {
    excellent:
      "Excelente: Você demonstra uma alta capacidade de ser receptivo(a), cordial e empático(a) em suas interações, estabelecendo vínculos com facilidade e criando um ambiente de relacionamento positivo. Ações recomendadas: Mantenha seu comportamento receptivo, diversifique suas interações, lidere conversas construtivas e continue cultivando relacionamentos.\n\nPara saber mais sobre a agradabilidade e o IMP (Índice de Magnetismo Pessoal), você pode acessar os materiais de aprofundamento gratuitos no site www.innernetworking.com.br. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu IMP e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking.",
    good:
      "Bom: Suas habilidades interpessoais são sólidas, embora haja pequenas variações na consistência da sua receptividade e atenção. Ações recomendadas: Procure aprimorar a escuta ativa e mantenha a abertura em todas as interações, reforçando a consistência no contato com diferentes perfis.\n\nPara saber mais sobre a agradabilidade e o IMP (Índice de Magnetismo Pessoal), você pode acessar os materiais de aprofundamento gratuitos no site www.innernetworking.com.br. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu IMP e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking.",
    average:
      "Oportunidades de Melhoria: Você apresenta desafios em manter uma postura consistentemente receptiva e atenta, o que pode afetar a qualidade dos vínculos. Ações recomendadas: Invista em treinamentos de comunicação, participe de eventos de networking e pratique técnicas de empatia e escuta ativa para fortalecer suas relações.\n\nPara saber mais sobre a agradabilidade e o IMP (Índice de Magnetismo Pessoal), você pode acessar os materiais de aprofundamento gratuitos no site www.innernetworking.com.br. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu IMP e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking.",
    bad:
      "Necessário Investir Intensamente: Sua pontuação indica dificuldade significativa em demonstrar receptividade e estabelecer vínculos positivos, prejudicando seu networking. Ações recomendadas: Busque conteúdos, workshops e mentorias focadas em comunicação eficaz e relacionamento interpessoal, e esforce-se para interagir com pessoas fora do seu círculo habitual, adotando novos hábitos de vida.\n\nPara saber mais sobre a agradabilidade e o IMP (Índice de Magnetismo Pessoal), você pode acessar os materiais de aprofundamento gratuitos no site www.innernetworking.com.br. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu IMP e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking. Para saber mais sobre a agradabilidade e o IMP (Índice de Magnetismo Pessoal), você pode acessar os materiais de aprofundamento gratuitos no site www.innernetworking.com.br. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu IMP e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking.",
  },
  "2. EXPERTISE": {
    excellent:
      "Excelente: Você utiliza suas competências de forma consistente para inovar, atingir metas e superar desafios, mantendo-se sempre atualizado(a) e compartilhando conhecimentos de maneira estratégica. Ações recomendadas: Continue investindo em sua atualização e compartilhe seus aprendizados para consolidar sua reputação profissional.\n\nPara saber mais sobre a expertise e o IMP (Índice de Magnetismo Pessoal), você pode acessar os materiais de aprofundamento gratuitos no site www.innernetworking.com.br. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu IMP e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking.",
    good:
      "Bom: Suas habilidades e conhecimentos são sólidos, mas há oportunidades para uma aplicação mais sistemática e consistente, especialmente no compartilhamento de suas experiências. Ações recomendadas: Fortaleça sua rotina de atualização e organize melhor o compartilhamento dos seus conhecimentos, buscando proativamente feedback para aprimorar suas práticas.\n\nPara saber mais sobre a expertise e o IMP (Índice de Magnetismo Pessoal), você pode acessar os materiais de aprofundamento gratuitos no site www.innernetworking.com.br. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu IMP e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking.",
    average:
      "Oportunidades de Melhoria: Há desafios na aplicação regular das suas competências e na busca por atualização, o que impacta o compartilhamento de aprendizados. Ações recomendadas: Participe de cursos e seminários na sua área e estimule trocas de experiências com colegas para elevar sua prática profissional.\n\nPara saber mais sobre a expertise e o IMP (Índice de Magnetismo Pessoal), você pode acessar os materiais de aprofundamento gratuitos no site www.innernetworking.com.br. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu IMP e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking.",
    bad:
      "Necessário Investir Intensamente: Sua pontuação indica dificuldades significativas em aplicar suas habilidades de forma consistente, com pouca iniciativa para atualização e compartilhamento. Ações recomendadas: Invista fortemente em autodesenvolvimento por meio de treinamentos, mentorias e leituras especializadas para construir uma base sólida e aplicá-la regularmente.\n\nPara saber mais sobre a expertise e o IMP (Índice de Magnetismo Pessoal), você pode acessar os materiais de aprofundamento gratuitos no site www.innernetworking.com.br. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu IMP e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking.",
  },
  "3. CONFIANÇA": {
    excellent:
      "Excelente: Você demonstra ser altamente confiável, alinhando suas palavras e ações com transparência e integridade, o que se reflete em relacionamentos sólidos e no cumprimento consistente de seus compromissos. Ações recomendadas: Mantenha essa postura exemplar e continue buscando feedback para aperfeiçoar ainda mais sua integridade e consistência.\n\nPara saber mais sobre a confiança e o IMP (Índice de Magnetismo Pessoal), você pode acessar os materiais de aprofundamento gratuitos no site www.innernetworking.com.br. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu IMP e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking.",
    good:
      "Bom: Sua postura é geralmente íntegra e consistente, embora existam oportunidades para aumentar a transparência em situações desafiadoras. Ações recomendadas: Trabalhe para alinhar ainda mais suas ações com seu discurso, solicitando feedback de colegas e aprimorando sua comunicação nos momentos difíceis.\n\nPara saber mais sobre a confiança e o IMP (Índice de Magnetismo Pessoal), você pode acessar os materiais de aprofundamento gratuitos no site www.innernetworking.com.br. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu IMP e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking.",
    average:
      "Oportunidades de Melhoria: Você enfrenta desafios para manter uma postura íntegra e consistente, o que impacta a percepção de sua confiabilidade. Ações recomendadas: Invista em estratégias para fortalecer sua comunicação e ética profissional, buscando novos hábitos que ajudem a alinhar seus compromissos com suas ações.\n\nPara saber mais sobre a confiança e o IMP (Índice de Magnetismo Pessoal), você pode acessar os materiais de aprofundamento gratuitos no site www.innernetworking.com.br. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu IMP e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking.",
    bad:
      "Necessário Investir Intensamente: Sua pontuação sugere dificuldades significativas em demonstrar confiabilidade e integridade, prejudicando seus relacionamentos e parcerias. Ações recomendadas: Dedique-se a desenvolver a transparência e a consistência, participando de treinamentos em ética e integridade e solicitando feedback regular para ajustar seu comportamento.\n\nPara saber mais sobre a confiança e o IMP (Índice de Magnetismo Pessoal), você pode acessar os materiais de aprofundamento gratuitos no site www.innernetworking.com.br. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu IMP e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking.",
  },
  "4. COLABORAÇÃO": {
    excellent:
      "Excelente: Você se destaca pela disposição em contribuir de forma espontânea e pelo engajamento ativo em iniciativas que agregam valor ao coletivo, fortalecendo parcerias e relações de trabalho. Ações recomendadas: Continue se envolvendo em atividades de grupo e incentivando a troca de conhecimentos, reforçando sua influência positiva no ambiente profissional.\n\nPara saber mais sobre a colaboração e o IMP (Índice de Magnetismo Pessoal), você pode acessar os materiais de aprofundamento gratuitos no site www.innernetworking.com.br. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu IMP e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking.",
    good:
      "Bom: Sua colaboração é consistente, mas há momentos em que um engajamento mais proativo pode beneficiar ainda mais o coletivo. Ações recomendadas: Busque participar mais ativamente de projetos de equipe e ofereça apoio de forma mais desinteressada para ampliar sua rede de alianças.\n\nPara saber mais sobre a colaboração e o IMP (Índice de Magnetismo Pessoal), você pode acessar os materiais de aprofundamento gratuitos no site www.innernetworking.com.br. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu IMP e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking.",
    average:
      "Oportunidades de Melhoria: Você apresenta desafios em oferecer ajuda de forma espontânea e em engajar-se ativamente, o que pode limitar a formação de vínculos sólidos. Ações recomendadas: Participe de projetos colaborativos, pratique oferecer ajuda sem esperar retorno e solicite feedback sobre sua postura colaborativa.\n\nPara saber mais sobre a colaboração e o IMP (Índice de Magnetismo Pessoal), você pode acessar os materiais de aprofundamento gratuitos no site www.innernetworking.com.br. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu IMP e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking.",
    bad:
      "Necessário Investir Intensamente: Sua pontuação indica dificuldades significativas em colaborar sem esperar algo em troca, comprometendo o desenvolvimento de parcerias e a percepção de seu valor no grupo. Ações recomendadas: Invista em atividades de grupo, busque trocar sobre colaboração com outras pessoas e desenvolva uma mentalidade de contribuir primeiro para fortalecer sua rede.\n\nPara saber mais sobre a colaboração e o IMP (Índice de Magnetismo Pessoal), você pode acessar os materiais de aprofundamento gratuitos no site www.innernetworking.com.br. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu IMP e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking.",
  },
  "5. VISIBILIDADE": {
    excellent:
      "Excelente: Você promove suas conquistas e habilidades de forma estratégica e natural, utilizando eventos, redes sociais e outras ferramentas para ampliar sua presença e consolidar sua marca pessoal. Ações recomendadas: Continue ampliando sua visibilidade e explore novas oportunidades de autopromoção e networking para expandir sua influência.\n\nPara saber mais sobre a visibilidade e o IMP (Índice de Magnetismo Pessoal), você pode acessar os materiais de aprofundamento gratuitos no site www.innernetworking.com.br. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu IMP e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking.",
    good:
      "Bom: Sua capacidade de divulgação é boa, mas pode ser aprimorada com uma abordagem mais sistemática e regular, tanto em eventos quanto nas redes sociais. Ações recomendadas: Atualize seus perfis com maior frequência e planeje sua participação em eventos e publicações para fortalecer sua presença no mercado.\n\nPara saber mais sobre a visibilidade e o IMP (Índice de Magnetismo Pessoal), você pode acessar os materiais de aprofundamento gratuitos no site www.innernetworking.com.br. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu IMP e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking.",
    average:
      "Oportunidades de Melhoria: Sua divulgação ocorre de forma intermitente, com uso esporádico das redes sociais e participação irregular em eventos, o que dificulta o reconhecimento de suas competências. Ações recomendadas: Invista em estratégias de autopromoção, atualize regularmente seus canais digitais e participe ativamente de oportunidades para compartilhar seus resultados.\n\nPara saber mais sobre a visibilidade e o IMP (Índice de Magnetismo Pessoal), você pode acessar os materiais de aprofundamento gratuitos no site www.innernetworking.com.br. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu IMP e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking.",
    bad:
      "Necessário Investir Intensamente: Sua pontuação revela dificuldades em tornar seu trabalho conhecido, prejudicando o reconhecimento de suas competências e limitando oportunidades de crescimento. Ações recomendadas: Dedique-se a desenvolver sua marca pessoal, mantendo perfis profissionais atualizados, participando de eventos relevantes e buscando oportunidades para falar sobre seus projetos e conquistas.\n\nPara saber mais sobre a visibilidade e o IMP (Índice de Magnetismo Pessoal), você pode acessar os materiais de aprofundamento gratuitos no site www.innernetworking.com.br. Além disso, caso seja do seu interesse, você pode obter uma versão detalhada do seu IMP e mesmo desenvolver o seu Desafio Perfeito para dar um salto evolutivo em seu nível de networking.",
  },
};

async function showResults() {
  showLoading();
  document.getElementById("test-container").classList.add("hidden");

  const { totalScore, sectionScores } = calculateScores();

  const finalMessageTitle = document.getElementById("final-message-title");
  const finalMessage = document.getElementById("final-message");
// Criar o gráfico de radar
const ctxRadar = document.getElementById('radarChart').getContext('2d');
new Chart(ctxRadar, {
  type: 'radar',
  data: {
    labels: ['Agradabilidade', 'Expertise', 'Confiança', 'Colaboração', 'Visibilidade'],
    datasets: [{
      label: 'Pontos',
      data: sectionScores,
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
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

  finalMessageTitle.innerText = "IMP - Índice de Magnetismo Pessoal";
    finalMessage.innerText =
      "Analise cuidadosamente seus resultados. Eles mostram um panorama de suas habilidades atuais no mundo do networking, considere a presença que você entrega em tudo o que faz. Enxergue seus pontos fortes e célebres, mas também não ignore as áreas que indicam espaço para crescimento. Entenda que esta avaliação é um retrato do momento, não um veredicto final sobre sua capacidade. Você é plenamente capaz de evoluir, se adaptar e aprender. Hoje praticar networking não é mais apenas um complemento, é uma necessidade premente.\n\n“Hoje, praticar networking não é mais apenas um complemento, mas uma necessidade essencial para o desenvolvimento pessoal e profissional.” - Paulo Cruz, fundador do Inner Networking.\n\nDe forma geral, o Índice de Magnetismo Pessoal (IMP) do seu Networking reflete o desempenho integrado das cinco dimensões essenciais – Agradabilidade, Expertise, Confiança, Colaboração e Visibilidade – que compõem a sua capacidade de estabelecer conexões valiosas no ambiente profissional. A pontuação final, obtida pela soma dos pontos de cada dimensão, indica o quão eficazmente você se posiciona, comunica suas competências e constrói relacionamentos sólidos. Uma pontuação elevada sugere que você possui habilidades robustas de networking, abrindo portas para novas oportunidades e parcerias estratégicas. Por outro lado, uma pontuação mais baixa sinaliza áreas de desenvolvimento que, quando aprimoradas, podem potencializar seu magnetismo pessoal e profissional. Analise os resultados abaixo para identificar seus pontos fortes e as oportunidades de melhoria, e use essas informações para direcionar seu autodesenvolvimento e aprimorar suas práticas de networking. O seu resultado final foi de:";


 // Total Result
  totalResultTitle.innerText = "Seu Índice de Magnetismo Pessoal foi de:";
  //totalResult.innerText = totalScore; // Remova esta linha

  // Calcule o número máximo de pontos possíveis (assumindo que seja 100, ajuste se necessário)
  const maxScore = 100;

  // Atualize o texto para mostrar a pontuação e o máximo possível
  totalResult.innerText = `${totalScore} de ${maxScore} pontos possíveis`;

  let interpretation = "";
    if (totalScore >= 81) {
      interpretation = totalResultInterpretations.excellent;
    } else if (totalScore >= 61) {
      interpretation = totalResultInterpretations.good;
    } else if (totalScore >= 41) {
      interpretation = totalResultInterpretations.average;
    } else {
      interpretation = totalResultInterpretations.bad;
    }

  totalResultInterpretation.innerText = interpretation;


  //Section Results
  sectionResultsDiv.innerHTML = ""; // Clear any previous content
  sections.forEach((section, index) => {
    const sectionResultDiv = document.createElement("div");
    sectionResultDiv.classList.add("section-result");
    const sectionTitle = document.createElement("h3");
        sectionTitle.innerText = section.title;
        sectionResultDiv.appendChild(sectionTitle);
    const sectionScore = document.createElement("p");
    sectionScore.innerHTML = `O seu resultado total para esse atributo foi: ${sectionScores[index]} de 20 pontos possíveis`;
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
         const sectionInterpretationText= document.createElement('p');
         sectionInterpretationText.innerText = sectionInterpretation;
         sectionResultDiv.appendChild(sectionInterpretationText);


      sectionResultsDiv.appendChild(sectionResultDiv);
  });
   finalReflection.innerText = "REFLEXÃO FINAL\n\nLembre-se: seu potencial de Networking não é estático; ele pode ser moldado e aprimorado com dedicação, prática e estratégia. Use essas informações como uma bússola para fortalecer seus pontos fortes e trabalhar nas áreas que chamam mais atenção. Ao fazer isso, você não apenas aprimorará seu desempenho em networking, mas também abrirá portas para avanços inovadores em sua carreira e para a construção de relacionamentos profissionais sólidos e enriquecedores.\n\n“Seus conhecimentos e habilidades abrem portas, mas são seus relacionamentos que dirão até onde você pode ir.” - Paulo Cruz, fundador do Inner Networking.\n\nBoa sorte em sua jornada de crescimento profissional!";

  document.getElementById("results-container").classList.remove("hidden");
   const shareButton = document.getElementById('share-button');
    shareButton.addEventListener('click', () => shareOnWhatsApp());
  hideLoading();

}
async function shareOnWhatsApp() {
   const message = `Olá! Acabei de fazer um teste de Inner Networking incrível e olha só o resultado:  ${document.getElementById('final-message').innerText}. \n\n ${document.getElementById('total-result-title').innerText} ${document.getElementById('total-result').innerText} \n ${document.getElementById('total-result-interpretation').innerText} \n\n Veja meus resultados completos em https://cadubandeira.github.io/chartme/.`;
    const encodedMessage = encodeURIComponent(message);


    try {
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
         window.open(whatsappUrl, '_blank');
    } catch (error) {
        console.error("Error sharing:", error);
          alert("Error sharing. Please try again.");  // Optional user message
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
             saveResultsButton.addEventListener('click', generatePDF);
      }

         initialModal.classList.remove('hidden');
    });
