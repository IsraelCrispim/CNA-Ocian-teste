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

function getCurrentQuestionPoints() {
  const stageWeights = [20, 30, 50];
  const stageIndex = Math.min(Number(S.stage) || 0, stageWeights.length - 1);
  return stageWeights[stageIndex];
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
  const questionPoints = getCurrentQuestionPoints();
  S.answered = true;
  S.score += questionPoints;
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
  const questionPoints = getCurrentQuestionPoints();
  b[correctIndex].classList.add("correct");

  if (i === correctIndex) {
    S.score += questionPoints;
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

function getModuleReviewEntries() {
  const moduleData = currentGameData();
  const responsesByKey = new Map();

  (S.responses || []).forEach((entry) => {
    const stageKey = String(entry.stage || "").trim().toLowerCase();
    const questionNumber = Number(entry.questionNumber || 0);
    if (stageKey && questionNumber) {
      responsesByKey.set(stageKey + "-" + questionNumber, entry);
    }
  });

  return moduleData.st.flatMap((stage) => {
    const stageKey = String(stage[0] || "").trim().toLowerCase();
    return stage[2].map((question, questionIndex) => {
      const response = responsesByKey.get(stageKey + "-" + (questionIndex + 1));
      const questionText = String(question[0] || "Pergunta sem enunciado").replace(/\s+/g, " ").trim();

      return {
        stage: stage[0],
        questionNumber: questionIndex + 1,
        question: questionText,
        answer: response ? (response.answer || "Sem resposta") : "Não respondida",
        correction: response ? (response.correction || "Sem correção registrada.") : "Sem resposta registrada. Revisar com o professor.",
        isCorrect: !!(response && response.isCorrect),
        isWritten: !!(response && response.isWritten)
      };
    });
  });
}

function getCelebrationLevelKeyForPercent(pct) {
  return pct >= 75 ? "advanced" : pct >= 45 ? "intermediate" : "basic";
}

function getStageLevelKey(stageName) {
  const text = String(stageName || "").toUpperCase();
  if (text.includes("BÁSICO") || text.includes("BASICO")) return "basic";
  if (text.includes("INTERMEDIÁRIO") || text.includes("INTERMEDIARIO")) return "intermediate";
  return "advanced";
}

function getCelebrationMascot() {
  return S.m === "tech" ? A.GREEN : A.BLUE;
}

function showStageCelebrationPopup(stageName) {
  const overlayEl = $("celebrationOverlay");
  if (!overlayEl) return;

  const levelKey = getStageLevelKey(stageName);
  const motivationalMessages = {
    basic: "Você está no caminho certo! Continue aprendendo com a CNA e vai evoluir cada vez mais.",
    intermediate: "Você foi muito bom! Mas ainda dá para ser melhor com a CNA e alcançar muito mais.",
    advanced: "Você arrasou! Agora é só se aprofundar e aguardar o que o professor fala!"
  };

  overlayEl.innerHTML = '<div class="celebration-popup">' +
    '<div class="result-special">' +
    '<div class="mascot-left"><img src="' + getCelebrationMascot() + '" alt="Mascote"></div>' +
    '<strong>' + motivationalMessages[levelKey] + '</strong>' +
    '</div>' +
    '<button class="celebration-close" type="button" onclick="closeCelebrationPopup()">FINALIZAR</button>' +
    '</div>';
  overlayEl.classList.remove("hidden");
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
    const completedStage = currentGameData().st[S.stage][0];
    S.stage++;
    showStageCelebrationPopup(completedStage);
    render();
    show("mapS");
    return;
  }

  finish();
}

function finish() {
  const moduleTotal = 500;
  const totalQuestions = currentGameData().st.reduce((sum, stage) => sum + stage[2].length, 0);
  const total = moduleTotal;
  S.totalScore = (Number(S.totalScore) || 0) + Number(S.score || 0);
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

  let levelKey = getCelebrationLevelKeyForPercent(pct);
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

  const reviewEntries = getModuleReviewEntries();
  const answerReview = reviewEntries.length
    ? "<div style='margin-top: 1rem; text-align: left;'><strong>Respostas do aluno e correção:</strong><br>" +
      reviewEntries.map((entry, idx) => {
        const shortQuestion = String(entry.question || "Pergunta").replace(/\s+/g, " ").trim();
        const shortAnswer = String(entry.answer || "Sem resposta").replace(/\s+/g, " ").trim();
        const questionText = shortQuestion.length > 110 ? shortQuestion.slice(0, 110) + "..." : shortQuestion;
        const answerText = shortAnswer.length > 150 ? shortAnswer.slice(0, 150) + "..." : shortAnswer;
        const correctionText = entry.correction || "Revisar com o professor.";
        return "<div style='margin: 0.8rem 0; padding: 0.7rem 0.8rem; background: rgba(15, 23, 42, 0.45); border: 1px solid rgba(125,211,252,0.25); border-radius: 0.75rem;'><strong>Q" + (idx + 1) + ":</strong> " + questionText + "<br><strong>Resposta:</strong> " + answerText + "<br><strong>Correção:</strong> " + correctionText + "</div>";
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
    moduleResult + answerReview;
  $("stars").textContent = "★".repeat(n) + "☆".repeat(3 - n);

  const totalAcquired = Number(S.totalScore) || 0;
  const specialEl = $("resultSpecial");
  const overlayEl = $("celebrationOverlay");

  if (specialEl) {
    specialEl.classList.add("hidden");
    specialEl.innerHTML = "";
  }

  if (overlayEl) {
    overlayEl.classList.add("hidden");
    overlayEl.innerHTML = "";
  }

  if (totalAcquired >= 1000) {
    const levelKey = getCelebrationLevelKeyForPercent(pct);
    const motivationalMessages = {
      basic: "Você está no caminho certo! Continue aprendendo com a CNA e vai evoluir cada vez mais.",
      intermediate: "Você foi muito bom! Mas ainda dá para ser melhor com a CNA e alcançar muito mais.",
      advanced: "Você arrasou! Agora é só se aprofundar e aguardar o que o professor fala!"
    };

    if (overlayEl) {
      overlayEl.innerHTML = '<div class="celebration-popup">' +
        '<div class="result-special">' +
        '<div class="mascot-left"><img src="' + getCelebrationMascot() + '" alt="Mascote"></div>' +
        '<strong>' + motivationalMessages[levelKey] + '</strong>' +
        '</div>' +
        '<button class="celebration-close" type="button" onclick="closeCelebrationPopup()">FINALIZAR</button>' +
        '</div>';
      overlayEl.classList.remove("hidden");
    }
  }

  show("result");
}

function closeCelebrationPopup() {
  const overlayEl = $("celebrationOverlay");
  if (overlayEl) {
    overlayEl.classList.add("hidden");
    overlayEl.innerHTML = "";
  }
}

function back() {
  show("choose");
  hud();
}

function buildWhatsAppMessage() {
  const state = window.S || S;
  const nome = (state && state.name) || "Aluno";
  const total = 500;
  const rawScore = (state && state.score) || 0;
  const percentual = total ? Math.round((rawScore / total) * 100) : 0;
  const nivel = percentual >= 75 ? "AVANÇADO" : percentual >= 45 ? "INTERMEDIÁRIO" : "BÁSICO";
  const faixa = (state && state.age) || "Não informada";
  const materia = (state && state.m) === "eng" ? "Inglês" : "Programação e Robótica";

  const lines = [
    "Olá! Aqui está o resultado do teste CNA Ocian.",
    "",
    "Nome: " + nome,
    "Idade: " + faixa,
    "Módulo: " + materia,
    "Nível atual: " + nivel,
    "Pontuação: " + rawScore + "/" + total,
    "Percentual: " + percentual + "%",
    "",
    "Respostas do aluno:"
  ];

  const reviewEntries = getModuleReviewEntries();
  if (reviewEntries.length) {
    reviewEntries.forEach((entry, index) => {
      const questionText = String(entry.question || "Pergunta " + (index + 1)).replace(/\s+/g, " ").trim();
      const answerText = String(entry.answer || "Sem resposta").replace(/\s+/g, " ").trim();
      const answerPreview = answerText.length > 180 ? answerText.slice(0, 180) + "..." : answerText;
      lines.push("Q" + (index + 1) + " - " + questionText);
      lines.push("Resposta: " + answerPreview);
    });
  } else {
    lines.push("Nenhuma resposta registrada.");
  }

  lines.push("", "Atenciosamente,", "Equipe CNA Ocian");
  return lines.join("\n");
}

function sendResultByWhatsapp() {
  const phoneInput = document.getElementById("whatsappNumber");
  const rawNumber = phoneInput ? phoneInput.value : "";
  const digits = String(rawNumber || "").replace(/\D/g, "");

  if (!digits) {
    if (phoneInput) {
      phoneInput.focus();
      phoneInput.style.borderColor = "#f87171";
      phoneInput.setAttribute("placeholder", "Digite um número para continuar");
    }
    return;
  }

  const normalizedNumber = digits.startsWith("55") ? digits : "55" + digits;
  const url = "https://wa.me/" + normalizedNumber + "?text=" + encodeURIComponent(buildWhatsAppMessage());

  window.open(url, "_blank");
}
