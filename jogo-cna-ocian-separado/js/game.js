const A = {
  BLUE: "img/personagens/ingles.png",
  GREEN: "img/personagens/robotica.png",
  LONDON: "img/mapas/london.png",
  CYBER: "img/mapas/cybertec.png"
};

const D = {
  eng: {
    title: "🇬🇧 ENGLISH — LONDON ADVENTURE",
    map: A.LONDON,
    char: A.BLUE,
    st: [
      ["BÁSICO", [25, 68], [["What is the translation of “house”?", ["Home", "Car", "School"], 0], ["Complete: “Good ___!”", ["night", "morning", "school"], 1], ["Which word means “book”?", ["Book", "Table", "Door"], 0]]],
      ["INTERMEDIÁRIO", [53, 46], [["Choose the correct sentence.", ["She are happy.", "She is happy.", "She am happy."], 1], ["What is the past tense of “go”?", ["Goed", "Gone", "Went"], 2], ["“I have been studying” is in which tense?", ["Present Perfect Continuous", "Simple Past", "Future"], 0]]],
      ["AVANÇADO", [78, 29], [["What does “although” mean?", ["Because", "Although", "Therefore"], 1], ["Complete: “If I ___ more time, I would travel.”", ["have", "had", "will have"], 1], ["Which option sounds more natural?", ["I look forward to meeting you.", "I look forward meet you.", "I look forward to meet you."], 0]]]
    ]
  },
  tech: {
    title: "🤖 PROGRAMAÇÃO E ROBÓTICA — CYBERTEC",
    map: A.CYBER,
    char: A.GREEN,
    st: [
      ["BÁSICO", [24, 67], [["Qual destes é um componente de um robô?", ["Sensor", "Caderno", "Borracha"], 0], ["“avance 2” significa...", ["Avançar dois passos", "Girar 2 vezes", "Desligar"], 0], ["O que é uma instrução?", ["Uma ação que o robô executa", "Uma cor", "Um desenho"], 0]]],
      ["INTERMEDIÁRIO", [43, 50], [["Qual comando pode repetir uma ação?", ["loop", "color", "printscreen"], 0], ["Qual linguagem é usada em projetos educacionais?", ["Scratch", "Photoshop", "PowerPoint"], 0], ["O que uma variável pode guardar?", ["Um valor", "Somente uma imagem", "Somente um cabo"], 0]]],
      ["AVANÇADO", [70, 35], [["O que um sensor de movimento detecta?", ["Movimento", "Música", "Cor de texto"], 0], ["Para que serve um motor?", ["Produzir movimento", "Guardar senhas", "Mostrar vídeo"], 0], ["Um robô segue uma linha usando sensor para...", ["Perceber a linha e corrigir o caminho", "Aumentar volume", "Trocar idioma"], 0]]]
    ]
  }
};

const AGE_LEVELS = {
  "5 a 7 anos (Little Kids)": {
    stageNames: { eng: ["BÁSICO", "BÁSICO", "BÁSICO"], tech: ["BÁSICO", "BÁSICO", "BÁSICO"] },
    questions: {
      eng: [
        [["What color is the sun?", ["Yellow", "Blue", "Green"], 0], ["Complete: “I ___ a dog.”", ["am", "have", "is"], 1], ["Which one is a number?", ["Three", "Chair", "Cup"], 0]],
        [["Choose the correct sentence.", ["He are happy.", "He is happy.", "He am happy."], 1], ["What is the opposite of “small”?", ["big", "slow", "cold"], 0], ["What is the past of “play”?", ["played", "playing", "play"], 0]],
        [["Which word means “casa”?", ["House", "Tree", "Door"], 0], ["Complete: “I like ___.”", ["music", "book", "jump"], 0], ["Which sentence is correct?", ["She likes apples.", "She like apples.", "She apple likes."], 0]]
      ],
      tech: [
        [["Qual é o nome de um robô?", ["Robot", "Papel", "Mesa"], 0], ["O que uma seta significa?", ["Andar", "Parar", "Dormir"], 0], ["Qual é um comando simples?", ["Vá para frente", "Cor", "Livro"], 0]],
        [["Qual parte ajuda o robô a ver?", ["Sensor", "Caneta", "Boneca"], 0], ["O que é repetir?", ["Fazer a mesma coisa várias vezes", "Acabar o jogo", "Guardar roupa"], 0], ["Qual é a função de um botão?", ["Clicar para agir", "Escrever uma frase", "Pintar a parede"], 0]],
        [["O que é uma etapa?", ["Uma parte de um passo", "Uma música", "Um carro"], 0], ["Qual ajuda o robô a andar?", ["Motor", "Pincel", "Caderno"], 0], ["O que um programa faz?", ["Ensina o robô a agir", "Desliga a luz", "Apaga o chão"], 0]]
      ]
    }
  },
  "8 a 10 anos (Kids)": {
    stageNames: { eng: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"], tech: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"] },
    questions: {
      eng: [
        [["What is the translation of “school”?", ["Escola", "Casa", "Livro"], 0], ["Complete: “I ___ to school.”", ["go", "am", "is"], 0], ["Which word is a color?", ["Blue", "Table", "Chair"], 0]],
        [["Choose the correct sentence.", ["They is playing.", "They are playing.", "They am playing."], 1], ["What is the past tense of “see”?", ["saw", "seen", "seeing"], 0], ["Which sentence is correct?", ["I have finished my homework.", "I has finished my homework.", "I finished my homework yesterday."], 0]],
        [["What does “because” mean?", ["Por causa de", "Depois", "Mas"], 0], ["Complete: “If I had a bike, I ___ faster.”", ["would ride", "ride", "am ride"], 0], ["Which option is more natural?", ["I would like to learn more.", "I like learn more.", "I would like learning more."], 0]]
      ],
      tech: [
        [["Qual peça mede distância?", ["Sensor", "Teclado", "Mouse"], 0], ["Uma instrução é...", ["Um passo do programa", "Uma música", "Uma imagem"], 0], ["Qual ação faz o robô andar?", ["Mover-se", "Dormir", "Parar"], 0]],
        [["Qual estrutura repete ações?", ["loop", "input", "print"], 0], ["Qual linguagem é usada para robótica?", ["Scratch", "Word", "Excel"], 0], ["O que é uma variável?", ["Um espaço para guardar valor", "Um botão", "Um sensor"], 0]],
        [["Para que serve um motor?", ["Mover partes do robô", "Guardar dados", "Ler arquivos"], 0], ["O que um sensor de movimento detecta?", ["Movimento", "Teclas", "Som"], 0], ["Um robô segue linha usando...", ["sensor de linha e correção", "teclado e mouse", "microfone e luz"], 0]]
      ]
    }
  },
  "11 a 13 anos (Teens)": {
    stageNames: { eng: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"], tech: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"] },
    questions: {
      eng: [
        [["Select the correct meaning of “responsible”.", ["Responsável", "Rápido", "Fácil"], 0], ["Complete: “I ___ my homework yesterday.”", ["finished", "finish", "finishing"], 0], ["Which word is a verb?", ["run", "happy", "blue"], 0]],
        [["Choose the correct sentence.", ["She has never seen that movie.", "She never has seen that movie.", "She have never seen that movie."], 0], ["What is the past participle of “write”?", ["written", "writed", "writing"], 0], ["Which option is in the present perfect continuous?", ["I have been studying.", "I studied.", "I will study."], 0]],
        [["What does “although” mean?", ["Even though", "Because", "Finally"], 0], ["Complete: “If I ___ more time, I would travel.”", ["had", "have", "will have"], 0], ["Which is more natural?", ["I look forward to hearing from you.", "I look forward hearing from you.", "I look forward to hear from you."], 0]]
      ],
      tech: [
        [["Qual componente capta entrada do ambiente?", ["Sensor", "Display", "Processador"], 0], ["Qual comando permite repetir?", ["loop", "start", "sound"], 0], ["O que é uma variável?", ["Um espaço de memória para guardar valor", "Um ícone", "Um botão"], 0]],
        [["Qual linguagem é especialmente usada em escolas para introduzir programação?", ["Scratch", "HTML", "Excel"], 0], ["Para que serve um motor em robótica?", ["Gerar movimento", "Armazenar energia", "Exibir texto"], 0], ["Qual é a função de um algoritmo?", ["Organizar passos para resolver um problema", "Desligar o robô", "Guardar arquivos"], 0]],
        [["O que um sensor de linha detecta?", ["A linha no chão", "A cor do monitor", "A energia do motor"], 0], ["Qual instrução define uma condição?", ["if", "loop", "reset"], 0], ["O que é depuração?", ["Encontrar e corrigir erros no programa", "Trocar o nome do robô", "Reiniciar tudo"], 0]]
      ]
    }
  },
  "14+ anos (Youth & Adult)": {
    stageNames: { eng: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"], tech: ["BÁSICO", "INTERMEDIÁRIO", "AVANÇADO"] },
    questions: {
      eng: [
        [["Which phrase is correct?", ["I have lived here for two years.", "I lived here for two years ago.", "I have been living here since two years."], 0], ["Complete: “The project was completed ___ the deadline.”", ["before", "on", "during"], 0], ["Choose the best synonym for “effective”.", ["efficient", "expensive", "quiet"], 0]],
        [["What is the function of the passive voice?", ["Emphasize the action instead of the agent.", "Shorten sentences.", "Avoid verbs."], 0], ["Complete: “If I had known, I ___ earlier.”", ["would have acted", "acted", "would act"], 0], ["Choose the most natural sentence.", ["I am looking forward to discussing the proposal.", "I am looking forward discussing the proposal.", "I am looking forward to discuss the proposal."], 0]],
        [["Select the best sentence.", ["Although it was difficult, we continued.", "Because it was difficult, we continued.", "Despite it was difficult, we continued."], 0], ["What is the meaning of “detailed”?", ["Comprehensive and specific", "Short and vague", "Fast and easy"], 0], ["Which sentence uses the correct conditional structure?", ["If she studies, she will improve.", "If she studied, she will improve.", "If she studies, she would improve."], 0]]
      ],
      tech: [
        [["Qual estrutura condiciona uma decisão?", ["if", "output", "array"], 0], ["O que é um sensor?", ["Dispositivo que lê dados do ambiente", "Botão visual", "Programa de som"], 0], ["Qual é a vantagem de modularizar um código?", ["Facilitar manutenção e leitura", "Diminuir a lógica", "Eliminar a depuração"], 0]],
        [["O que é um algoritmo eficiente?", ["Uma sequência otimizada para resolver o problema", "Um código sem objetivo", "Uma função estática"], 0], ["Qual estrutura repete uma ação enquanto a condição for verdadeira?", ["while", "input", "object"], 0], ["Qual é o papel de uma variável?", ["Armazenar valores para utilização no programa", "Exibir mensagens fixas", "Desligar o sistema"], 0]],
        [["O que é IA em robótica?", ["Sistema capaz de interpretar dados e tomar decisões", "Botão simples", "Fonte de energia"], 0], ["Como testar um robô de forma segura?", ["Simular cenários e validar sensores e lógica", "Executar sem revisão", "Pressionar todos os botões"], 0], ["Qual é o objetivo da depuração?", ["Localizar e corrigir erros lógicos", "Simplificar o hardware", "Trocar o código por outro"], 0]]
      ]
    }
  }
};

let S = { name: "", age: "", m: "", stage: 0, q: 0, score: 0, answered: false }, $ = id => document.getElementById(id);

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

function start() {
  let n = $("name").value.trim();
  let a = $("age").value;

  if (!n || !a) return alert("Preencha seu nome e sua idade.");

  S.name = n;
  S.age = a;
  if ($("hello")) $("hello").textContent = n;
  hud();
  show("choose");
}

function backHome() {
  S.stage = 0;
  S.q = 0;
  S.score = 0;
  show("home");
  hud();
}

function openM(m) {
  S.m = m;
  S.stage = 0;
  S.q = 0;
  S.score = 0;

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

function qrender() {
  S.answered = false;
  let d = currentGameData();
  let s = d.st[S.stage];
  let q = s[2][S.q];

  $("qt").textContent = s[0];
  $("qc").textContent = "QUESTION " + (S.q + 1) + "/3";
  $("bar").style.width = (S.q / 3 * 100) + "%";
  $("body").innerHTML = '<div class="question">' + q[0] + '</div><div class="answers">' + q[1].map((x, i) => '<button class="answer" onclick="answer(' + i + ')">' + String.fromCharCode(65 + i) + ') ' + x + '</button>').join("") + '</div><div id="fb" class="feedback"></div><button id="next" class="btn red full hidden" onclick="next()">CONTINUE ▶</button>';
}

function answer(i) {
  if (S.answered) return;
  S.answered = true;

  let q = currentGameData().st[S.stage][2][S.q];
  let b = [...document.querySelectorAll(".answer")];
  b[q[2]].classList.add("correct");

  if (i === q[2]) {
    S.score++;
    $("fb").textContent = "✨ Great job! You got it right!";
  } else {
    b[i].classList.add("wrong");
    $("fb").textContent = "💡 The correct answer is highlighted.";
  }

  $("next").classList.remove("hidden");
  hud();
}

function next() {
  let totalStages = currentGameData().st.length;

  if (S.q < 2) {
    S.q++;
    qrender();
    return;
  }

  if (S.stage < totalStages - 1) {
    S.stage++;
    render();
    show("mapS");
    return;
  }

  finish();
}

function finish() {
  let total = currentGameData().st.length * 3;
  let p = S.score / total;
  let n = p >= 0.9 ? 3 : p >= 0.6 ? 2 : 1;
  let pct = Math.round((S.score / total) * 100);

  const levelMap = {
    basic: { label: "BÁSICO", desc: "Domina os primeiros passos e precisa reforçar conceitos fundamentais." },
    intermediate: { label: "INTERMEDIÁRIO", desc: "Já entende a maioria dos tópicos, mas ainda precisa praticar com mais confiança." },
    advanced: { label: "AVANÇADO", desc: "Está bem preparado para evoluir para desafios mais complexos." }
  };

  let levelKey = pct >= 75 ? "advanced" : pct >= 45 ? "intermediate" : "basic";
  let levelData = levelMap[levelKey];

  let englishLevel = pct >= 75 ? "AVANÇADO" : pct >= 45 ? "INTERMEDIÁRIO" : "BÁSICO";
  let teacherStatus = pct >= 60 ? "Aprovado com orientação do Professor Crispim." : "Aprovado pelo Professor Crispim após revisão e reforço.";

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

  $("rt").innerHTML = S.name + ", você terminou com <b>" + S.score + "/" + total + "</b> acertos!";
  $("resultLevel").innerHTML = "<strong>Nível do aluno:</strong> " + levelData.label + "<br><strong>Nível recomendado de inglês:</strong> " + englishLevel + "<br><strong>Observação:</strong> " + levelData.desc;
  $("resultTeacher").innerHTML = "<strong>Aprovação do Professor Crispim:</strong> " + teacherStatus;
  $("resultTips").innerHTML = "<div><strong>Dicas para inglês:</strong> " + englishTips[levelKey] + "</div>" +
    "<div><strong>Dicas para programação e robótica:</strong> " + techTips[levelKey] + "</div>" +
    "<div><strong>Explicação dos erros:</strong> os erros apareceram principalmente quando a lógica ou a estrutura da frase não foi aplicada corretamente. Revise os conceitos, pratique em pequenas etapas e tente explicar cada resposta antes de avançar.</div>";
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
