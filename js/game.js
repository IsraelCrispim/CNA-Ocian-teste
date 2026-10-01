const A = {
  BLUE: "img/personagens/ingles.png",
  GREEN: "img/personagens/robotica.png",
  LONDON: "img/mapas/london.png",
  CYBER: "img/mapas/cybertec.png"
};

const ENGLISH_QUESTIONS = [
  [
    ["Complete a frase com a forma correta do verbo to be: \"She ________ a software engineer, and her brothers ________ teachers.\"", ["is / is", "are / is", "is / are", "am / are"], 2],
    ["Selecione a palavra correta para completar a lacuna: \"Excuse me, where ________ I find the nearest supermarket?\"", ["does", "can", "is", "do"], 1],
    ["Escolha a expressão correta de rotina diária: \"He usually ________ up at 7:00 AM, but on weekends he ________ in bed until 9:00 AM.\"", ["wakes / stays", "wake / stay", "waking / staying", "woke / stayed"], 0],
    ["Introduza-se em 2 a 3 frases. Diga seu nome, de onde você é e o que gosta de fazer no tempo livre.", { type: "text", placeholder: "Escreva sua resposta aqui..." }, null],
    ["Descreva sua rotina diária em 2 a 3 frases usando o simple present (por exemplo: I get up, I work, I study...).", { type: "text", placeholder: "Escreva sua rotina aqui..." }, null]
  ],
  [
    ["Escolha o tempo correto para completar a narrativa: \"While I ________ to work yesterday morning, it ________ to rain heavily.\"", ["was driving / started", "drove / was starting", "drive / starts", "have driven / started"], 0],
    ["Selecione a opção que melhor completa a frase com verbo modal: \"You ________ wear a helmet while riding a motorcycle; it’s required by law.\"", ["might", "must", "could", "would"], 1],
    ["Escolha a forma comparativa correta: \"This project is much ________ than the previous one, so we need extra time.\"", ["complexer", "more complex", "most complex", "complex"], 1],
    ["Pense em uma viagem ou evento memorável do passado. Escreva 3 a 4 frases descrevendo o que aconteceu, usando passado (Simple Past ou Past Continuous).", { type: "text", placeholder: "Escreva sobre o evento aqui..." }, null],
    ["Responda em 3 a 4 frases: Qual são seus principais objetivos profissionais ou pessoais para os próximos dois anos? Use formas do futuro como will, going to ou hope to.", { type: "text", placeholder: "Escreva seus objetivos aqui..." }, null]
  ],
  [
    ["Selecione a opção que completa corretamente a terceira condicional: \"If we ________ the strategy earlier, we ________ the deadline.\"", ["adjusted / wouldn't miss", "had adjusted / wouldn't have missed", "adjust / won't miss", "have adjusted / didn't miss"], 1],
    ["Escolha a frase com o uso correto de inversion para ênfase: \"Not only ________ the technical issue, but they also upgraded the entire infrastructure.\"", ["they resolved", "did they resolve", "had resolved they", "they did resolve"], 1],
    ["Selecione a melhor correspondência de vocabulário para o contexto profissional: \"The company's new policy was designed to ________ collaboration across interdisciplinary teams.\"", ["foster", "strictly eliminate", "deteriorate", "overlook"], 0],
    ["Leia o prompt e escreva um pequeno parágrafo de 4 a 5 frases: Você acha que a inteligência artificial vai substituir profissionais humanos na educação e na tecnologia, ou ela apenas servirá como ferramenta? Justifique sua opinião.", { type: "text", placeholder: "Escreva seu parágrafo aqui..." }, null],
    ["Reescreva a frase abaixo usando uma estrutura avançada (como passive voice, inversion ou cleft sentence) para enfatizar a ação destacada: \"The team solved the problem after working continuously for ten hours.\"", { type: "text", placeholder: "Escreva a reescrita aqui..." }, null]
  ]
];

const TECH_QUESTIONS = [
  [
    ["O que é um algoritmo na programação?", ["Um tipo de tela de computador", "Uma sequência passo a passo de instruções para resolver um problema ou realizar uma tarefa", "Um motor elétrico que gira muito rápido", "Uma pilha que alimenta um circuito"], 1],
    ["Na programação em blocos (como Scratch ou MakeCode), qual bloco permite que uma ação se repita várias vezes sem precisar reescrever os blocos?", ["se... então", "mudar variável para 0", "repetir / sempre (loop)", "parar todos os atores"], 2],
    ["Observe este circuito simples: você conecta uma bateria, um interruptor (chave) e um LED. O que acontece quando você abre o interruptor?", ["O LED acende porque a eletricidade passa", "A bateria esquenta", "O LED apaga porque o caminho da corrente elétrica foi interrompido", "O LED fica piscando para sempre"], 2],
    ["Imagine que você está programando um personagem em um jogo para atravessar a rua. Escreva uma lista passo a passo de 3 a 4 instruções (em português ou blocos) para fazer o personagem chegar em segurança ao outro lado.", { type: "text", placeholder: "Escreva os passos do algoritmo aqui..." }, null],
    ["Cite dois componentes de entrada (sensores/botões) e dois componentes de saída (luzes/motores/sirenes) usados na robótica. Explique brevemente o que um deles faz.", { type: "text", placeholder: "Escreva os componentes e sua explicação aqui..." }, null]
  ],
  [
    ["Um carrinho robô desviador de obstáculos utiliza um Sensor Ultrassônico HC-SR04. Como esse sensor calcula a distância até um objeto?", ["Medindo a luminosidade do ambiente", "Emitindo uma onda de som de alta frequência e medindo o tempo que ela leva para bater no objeto e voltar", "Tocando fisicamente na parede com um parachoque de metal", "Lendo a mudança de cor no chão"], 1],
    ["Qual será o valor final da variável x após a execução deste trecho de código em Python?\n\nPython\n\nx = 5\npara i no intervalo(3):\n    x = x + 2", ["5", "8", "11", "15"], 2],
    ["Ao ligar um LED diretamente em um pino do Arduino ou micro:bit, por que precisamos colocar um resistor em série com o LED?", ["Para fazer o LED brilhar duas vezes mais forte", "Para limitar a corrente elétrica e evitar queimar o LED ou o pino do microcontrolador", "Para mudar a cor da luz do LED", "Para guardar eletricidade extra como se fosse uma bateria"], 1],
    ["Escreva a lógica (em pseudocódigo ou blocos) para um robô seguidor de linha autônomo que usa dois sensores infravermelhos (Sensor Esquerdo e Sensor Direito) para se manter em cima de uma linha preta.", { type: "text", placeholder: "Escreva a lógica do robô aqui..." }, null],
    ["Explique a diferença entre um Sinal Digital e um Sinal Analógico em um microcontrolador (como Arduino ou ESP32). Dê um exemplo do mundo real de cada um.", { type: "text", placeholder: "Explique a diferença e dê exemplos reais..." }, null]
  ],
  [
    ["Qual técnica é utilizada para controlar a velocidade de um motor DC conectado a uma ponte H (como a L298N) usando um pino digital do microcontrolador?", ["Conversão Analógico-Digital (ADC)", "Modulação por Largura de Pulso (PWM)", "Comunicação Serial SPI", "Protocolo I2C"], 1],
    ["Qual é a falha lógica ou erro principal no seguinte código em C++ / Arduino?\n\nC++\n\nvoid loop() {\n    int valorSensor = analogRead(A0);\n    if (valorSensor > 500) {\n        digitalWrite(13, HIGH);\n    }\n}", ["A função analogRead() não pode ser usada dentro do void loop()", "O pino 13 é acionado para HIGH, mas nunca é desligado (LOW) quando valorSensor <= 500", "A variável valorSensor precisa ser obrigatoriamente do tipo float", "No Arduino só se usa ponto e vírgula no final do void loop()"], 1],
    ["Qual estrutura de dados é mais eficiente para armazenar uma sequência de comandos de movimentos ou histórico de leitura de sensores em Python?", ["Booleano (True/False)", "Inteiro (int)", "Lista / Vetor (List / Array)", "Modo de Pino (pinMode)"], 2],
    ["Escreva uma função simples em Python ou C++/Arduino que receba a variável distancia_cm de um sensor ultrassônico. Se a distância for menor que 15 cm, o robô deve parar os motores; caso contrário, deve mover para a frente.", { type: "text", placeholder: "Escreva a função do robô aqui..." }, null],
    ["Explique como uma Máquina de Estados Finitos (FSM) pode ser usada para controlar um robô 4WD com 3 estados: PARADO, NAVEGANDO e DESVIANDO_OBSTACULO. Explique o que faz o robô mudar do estado NAVEGANDO para DESVIANDO_OBSTACULO e depois voltar.", { type: "text", placeholder: "Explique o FSM e as transições entre estados..." }, null]
  ]
];

const D = {
  eng: {
    title: "🇬🇧 ENGLISH — LONDON ADVENTURE",
    map: A.LONDON,
    char: A.BLUE,
    st: [
      ["BÁSICO", [25, 68], ENGLISH_QUESTIONS[0]],
      ["INTERMEDIÁRIO", [53, 46], ENGLISH_QUESTIONS[1]],
      ["AVANÇADO", [78, 29], ENGLISH_QUESTIONS[2]]
    ]
  },
  tech: {
    title: "🤖 PROGRAMAÇÃO E ROBÓTICA — CYBERTEC",
    map: A.CYBER,
    char: A.GREEN,
    st: [
      ["BÁSICO", [24, 67], TECH_QUESTIONS[0]],
      ["INTERMEDIÁRIO", [43, 50], TECH_QUESTIONS[1]],
      ["AVANÇADO", [70, 35], TECH_QUESTIONS[2]]
    ]
  }
};

const AGE_LEVELS = {
  "5 a 7 anos (Little Kids)": {
    stageNames: { eng: ["BÁSICO", "BÁSICO", "BÁSICO"], tech: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"] },
    questions: {
      eng: ENGLISH_QUESTIONS,
      tech: TECH_QUESTIONS
    }
  },
  "8 a 10 anos (Kids)": {
    stageNames: { eng: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"], tech: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"] },
    questions: {
      eng: ENGLISH_QUESTIONS,
      tech: TECH_QUESTIONS
    }
  },
  "11 a 13 anos (Teens)": {
    stageNames: { eng: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"], tech: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"] },
    questions: {
      eng: ENGLISH_QUESTIONS,
      tech: TECH_QUESTIONS
    }
  },
  "14+ anos (Youth & Adult)": {
    stageNames: { eng: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"], tech: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"] },
    questions: {
      eng: ENGLISH_QUESTIONS,
      tech: TECH_QUESTIONS
    }
  }
};

let S = { name: "", age: "", m: "", stage: 0, q: 0, score: 0, answered: false, responses: [] }, $ = id => document.getElementById(id);

function currentGameData() {
  const base = JSON.parse(JSON.stringify(D[S.m] || D.eng));
  const preset = AGE_LEVELS[S.age] || AGE_LEVELS[Object.keys(AGE_LEVELS)[0]];
  const custom = preset.questions[S.m] || base.st.map(stage => stage[2]);
  const names = preset.stageNames[S.m] || base.st.map(stage => stage[0]);
  base.st = base.st.map((stage, index) => [names[index] || stage[0], stage[1], custom[index] || stage[2]]);
  return base;
}

function show(id) {
  document.querySelectorAll("section").forEach(x => x.classList.add("hidden"));
  $(id).classList.remove("hidden");
}

function hud() {
  const nameNode = $("userBadgeName");
  const starsNode = $("userBadgeStars");
  if (nameNode) nameNode.textContent = S.name || "Aluno";
  if (starsNode) starsNode.textContent = S.score;
  const hudNode = $("hud");
  if (hudNode && !nameNode && !starsNode) {
    hudNode.innerHTML = '<span class="chip">👤 ' + (S.name || "Aluno") + '</span><span class="chip">⭐ ' + S.score + '</span>';
  }
}

function updateOrientationState() {
  const overlay = $("orientationOverlay");
  const isPortraitMobile = window.matchMedia("(orientation: portrait)").matches && window.innerWidth < 1100 && window.innerHeight >= 400;
  const isSmallLandscape = window.matchMedia("(orientation: landscape)").matches && window.innerWidth <= 748 && window.innerHeight <= 400;

  const shouldShowRotation = isPortraitMobile && !isSmallLandscape;

  document.body.classList.toggle("orientation-lock", shouldShowRotation);
  if (overlay) overlay.classList.toggle("show", shouldShowRotation);
}

window.addEventListener("resize", updateOrientationState);
window.addEventListener("orientationchange", updateOrientationState);
updateOrientationState();

function start() {
  let n = $("name").value.trim();
  let a = $("age").value;

  if (!n || !a) return alert("Preencha seu nome e sua idade.");

  S.name = n;
  S.age = a;
  S.responses = [];
  if ($("hello")) $("hello").textContent = n;
  hud();
  show("choose");
}

function backHome() {
  S.stage = 0;
  S.q = 0;
  S.score = 0;
  S.responses = [];
  show("home");
  hud();
}

function openM(m) {
  S.m = m;
  S.stage = 0;
  S.q = 0;
  S.score = 0;
  S.responses = [];

  let d = currentGameData();
  $("mt").textContent = d.title;
  $("mapimg").src = d.map;
  $("player").src = d.char;
  render();
  hud();
  show("mapS");
}

function render() {
  let d = currentGameData();
  let st = $("stages");
  let dots = $("dots");

  st.innerHTML = "";
  dots.innerHTML = "";

  let route = [];
  for (let i = 0; i < d.st.length - 1; i++) {
    let [x1, y1] = d.st[i][1];
    let [x2, y2] = d.st[i + 1][1];
    let steps = 12;
    for (let s = 0; s <= steps; s++) {
      let t = s / steps;
      let x = x1 + (x2 - x1) * t;
      let y = y1 + (y2 - y1) * t;
      route.push([x, y]);
    }
  }

  route.forEach((p, i) => {
    let e = document.createElement("i");
    e.className = "dot";
    e.style.left = p[0] + "%";
    e.style.top = p[1] + "%";
    e.style.animationDelay = i * 0.03 + "s";
    dots.appendChild(e);
  });

  d.st.forEach((s, i) => {
    let b = document.createElement("button");
    b.className = "stage " + (i > S.stage ? "locked" : "");
    b.style.left = s[1][0] + "%";
    b.style.top = s[1][1] + "%";
    b.innerHTML = '<span class="star">★</span><span>' + s[0] + '</span>';
    b.onclick = () => i <= S.stage && go(i);
    st.appendChild(b);
  });

  let p = d.st[S.stage][1];
  $("player").style.left = p[0] + "%";
  $("player").style.top = p[1] + "%";
}

function go(i) {
  S.stage = i;
  let p = currentGameData().st[i][1];
  $("player").style.left = p[0] + "%";
  $("player").style.top = p[1] + "%";
  setTimeout(quiz, 1150);
}

function quiz() {
  S.q = 0;
  S.answered = false;
  show("quizS");
  qrender();
}

function shuffleAnswers(options) {
  let arr = options.map((text, index) => ({ text, index }));
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function qrender() {
  S.answered = false;
  let d = currentGameData();
  let s = d.st[S.stage];
  let q = s[2][S.q];
  let totalQuestions = s[2].length;
  let isTextQuestion = q && q[1] && typeof q[1] === "object" && q[1].type === "text";

  $("qt").textContent = s[0];
  $("qc").textContent = "QUESTION " + (S.q + 1) + "/" + totalQuestions;
  $("bar").style.width = (S.q / totalQuestions * 100) + "%";

  if (isTextQuestion) {
    $("body").innerHTML = '<div class="question">' + q[0] + '</div><div class="answers"><textarea id="writtenAnswer" rows="5" placeholder="' + (q[1].placeholder || "Escreva sua resposta aqui...") + '" style="width:100%;border-radius:0.9rem;border:2px solid rgba(125,211,252,0.7);padding:0.9rem 1rem;background:rgba(7,15,31,0.9);color:white;resize:vertical;"></textarea></div><div id="fb" class="feedback"></div><button class="btn red full" onclick="answerText()">RESPONDER</button><button id="next" class="btn red full hidden" onclick="next()">CONTINUE ▶</button>';
    return;
  }

  S.options = shuffleAnswers(q[1]);
  $("body").innerHTML = '<div class="question">' + q[0] + '</div><div class="answers">' + S.options.map((option, i) => '<button class="answer" onclick="answer(' + i + ')">' + String.fromCharCode(65 + i) + ') ' + option.text + '</button>').join("") + '</div><div id="fb" class="feedback"></div><button id="next" class="btn red full hidden" onclick="next()">CONTINUE ▶</button>';
}

function saveAnswer(response) {
  const d = currentGameData();
  const q = d.st[S.stage][2][S.q];
  S.responses.push({
    stage: d.st[S.stage][0],
    questionNumber: S.q + 1,
    question: q[0],
    answer: response.answer,
    correction: response.correction,
    isCorrect: response.isCorrect,
    isWritten: !!response.isWritten
  });
}

function answerText() {
  if (S.answered) return;

  const input = $("writtenAnswer");
  if (!input || !input.value.trim()) {
    $("fb").textContent = "✍️ Escreva sua resposta antes de continuar.";
    return;
  }

  const answerTextValue = input.value.trim();
  S.answered = true;
  S.score += 3;
  saveAnswer({
    answer: answerTextValue,
    correction: "Resposta registrada para revisão pelo professor. Verifique gramática, clareza, vocabulário e estrutura da frase.",
    isCorrect: true,
    isWritten: true
  });
  $("fb").textContent = "✨ Resposta registrada!";
  const submitBtn = document.querySelector("button[onclick='answerText()']");
  if (submitBtn) submitBtn.classList.add("hidden");
  $("next").classList.remove("hidden");
  hud();
}

function answer(i) {
  if (S.answered) return;
  S.answered = true;

  let q = currentGameData().st[S.stage][2][S.q];
  let b = [...document.querySelectorAll(".answer")];
  let correctIndex = S.options.findIndex(option => option.index === q[2]);
  const selectedText = S.options[i].text;
  const correctText = S.options[correctIndex].text;
  b[correctIndex].classList.add("correct");

  if (i === correctIndex) {
    S.score += 3;
    saveAnswer({
      answer: selectedText,
      correction: "Resposta correta: " + correctText,
      isCorrect: true,
      isWritten: false
    });
    $("fb").textContent = "✨ Great job! You got it right!";
  } else {
    b[i].classList.add("wrong");
    saveAnswer({
      answer: selectedText,
      correction: "Resposta correta: " + correctText,
      isCorrect: false,
      isWritten: false
    });
    $("fb").textContent = "💡 The correct answer is highlighted.";
  }

  $("next").classList.remove("hidden");
  hud();
}

function next() {
  let totalQuestions = currentGameData().st[S.stage][2].length;

  if (S.q < totalQuestions - 1) {
    S.q++;
    qrender();
    return;
  }

  let totalStages = currentGameData().st.length;
  if (S.stage < totalStages - 1) {
    S.stage++;
    render();
    show("mapS");
    return;
  }

  finish();
}

function finish() {
  let totalQuestions = currentGameData().st.reduce((sum, stage) => sum + stage[2].length, 0);
  let total = totalQuestions * 3;
  let p = S.score / total;
  let n = p >= 0.9 ? 3 : p >= 0.6 ? 2 : 1;
  let pct = Math.round((S.score / total) * 100);
  const isEnglish = S.m === "eng";
  const teacherName = isEnglish ? "Professor de Inglês" : "Professor Crispim";
  const teacherAction = isEnglish
    ? "vai confirmar o nível de inglês do aluno no teste presencial."
    : "vai analisar o conhecimento do aluno em aula.";

  const levelMap = {
    basic: { label: "BÁSICO", desc: "Domina os primeiros passos e precisa reforçar conceitos fundamentais." },
    intermediate: { label: "INTERMEDIÁRIO", desc: "Já entende a maioria dos tópicos, mas ainda precisa praticar com mais confiança." },
    advanced: { label: "AVANÇADO", desc: "Está bem preparado para evoluir para desafios mais complexos." }
  };

  let levelKey = pct >= 75 ? "advanced" : pct >= 45 ? "intermediate" : "basic";
  let levelData = levelMap[levelKey];
  let englishLevel = pct >= 75 ? "AVANÇADO" : pct >= 45 ? "INTERMEDIÁRIO" : "BÁSICO";
  let teacherStatus = pct >= 60
    ? "Aprovado com orientação do " + teacherName + "."
    : "Aprovado pelo " + teacherName + " após revisão e reforço.";

  const englishTips = {
    basic: "Dica de Inglês: revisite vocabulário, frases simples e verbos básicos. Foque em subject + verb + complement e pratique respostas curtas com confiança.",
    intermediate: "Dica de Inglês: reforçe tempos verbais, preposições e estruturas de frases. Você já compreende bem, então o próximo passo é usar a gramática com mais naturalidade.",
    advanced: "Dica de Inglês: continue trabalhando fluência, nuances e expressões usadas no dia a dia. Seu nível está forte e a revisão de contexto ajudará a evoluir ainda mais."
  };

  const techTips = {
    basic: "Dica de Programação: revise sequências, sensores, motores e comandos simples. O erro mais comum está em esquecer a ordem correta dos passos do robô.",
    intermediate: "Dica de Programação: pratique laços, variáveis e lógica condicional. Quando a ideia está certa, o erro geralmente aparece na organização do algoritmo.",
    advanced: "Dica de Programação: foque em depuração, lógica e criação de soluções mais completas. Você está avançando bem; agora é tempo de testar, ajustar e otimizar."
  };

  const moduleResult = isEnglish
    ? "<div><strong>Professor:</strong> " + teacherName + " — " + teacherAction + "</div>"
    : "<div><strong>Professor:</strong> " + teacherName + " — " + teacherAction + "</div>";

const answerReview = S.responses.length
    ? "<div style='margin-top: 1rem; text-align: left;'><strong>Respostas do aluno e correção:</strong><br>" +
    S.responses.map((entry, idx) => {
      const shortAnswer = String(entry.answer || "Sem resposta").replace(/\s+/g, " ").trim();
      const answerText = shortAnswer.length > 150 ? shortAnswer.slice(0, 150) + "..." : shortAnswer;
      const correctionText = entry.correction || "Revisar com o professor.";
      return "<div style='margin: 0.8rem 0; padding: 0.7rem 0.8rem; background: rgba(15, 23, 42, 0.45); border: 1px solid rgba(125,211,252,0.25); border-radius: 0.75rem;'><strong>Q" + (idx + 1) + ":</strong> " + (entry.isWritten ? "Resposta escrita" : "Alternativa") + "<br><strong>Aluno:</strong> " + answerText + "<br><strong>Correção:</strong> " + correctionText + "</div>";
    }).join("") + "</div>"
    : "";

  $("rt").innerHTML = S.name + ", você terminou com <b>" + S.score + "/" + total + "</b> acertos!";
  $("resultLevel").innerHTML = isEnglish
    ? "<strong>Nível do aluno:</strong> " + levelData.label + "<br><strong>Nível recomendado de inglês:</strong> " + englishLevel + "<br><strong>Observação:</strong> " + levelData.desc
    : "<strong>Nível do aluno:</strong> " + levelData.label + "<br><strong>Observação:</strong> " + levelData.desc;
  $("resultTeacher").innerHTML = "<strong>Aprovação do " + teacherName + ":</strong> " + teacherStatus;
  $("resultTips").innerHTML = isEnglish
    ? "<div><strong>Dicas para inglês:</strong> " + englishTips[levelKey] + "</div>" +
    "<div><strong>Explicação dos erros:</strong> os erros apareceram principalmente quando a estrutura da frase ou o vocabulário não foi aplicado corretamente. Revise os conceitos, pratique em pequenas etapas e tente explicar cada resposta antes de avançar.</div>" +
    moduleResult + answerReview
    : "<div><strong>Dicas para programação e robótica:</strong> " + techTips[levelKey] + "</div>" +
    "<div><strong>Explicação dos erros:</strong> os erros apareceram principalmente quando a lógica ou a sequência de passos não foi aplicada corretamente. Revise os conceitos, pratique em pequenas etapas e tente explicar cada resposta antes de avançar.</div>" +
    moduleResult;
  $("stars").textContent = "★".repeat(n) + "☆".repeat(3 - n);
  show("result");
}

function back() {
  show("choose");
  hud();
}

function sendResultByEmail() {
  const nome = S.name || "Aluno";
  const total = currentGameData().st.length * 3;
  const percentual = Math.round((S.score / total) * 100);
  const nivel = percentual >= 75 ? "AVANÇADO" : percentual >= 45 ? "INTERMEDIÁRIO" : "BÁSICO";
  const faixa = S.age || "Não informada";
  const materia = S.m === "eng" ? "Inglês" : "Programação e Robótica";

  const subject = encodeURIComponent("Resultado do desafio CNA Ocian - " + nome);
  const body = encodeURIComponent(
    "Olá Professor Crispim,\n\n" +
    "Segue o resultado do aluno: \n" +
    "- Nome: " + nome + "\n" +
    "- Idade: " + faixa + "\n" +
    "- Módulo: " + materia + "\n" +
    "- Nível atual: " + nivel + "\n" +
    "- Pontuação: " + S.score + "/" + total + "\n" +
    "- Percentual: " + percentual + "%\n\n" +
    "Atenciosamente,\n" +
    "Equipe CNA Ocian"
  );

  window.location.href = "mailto:teachercrispim.ctrlplay@gmail.com?subject=" + subject + "&body=" + body;
}

if ($("homechar")) $("homechar").src = A.BLUE;
if ($("blue")) $("blue").src = A.BLUE;
if ($("green")) $("green").src = A.GREEN;

hud();
