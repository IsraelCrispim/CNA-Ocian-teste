const S = { name: "", age: "", m: "", stage: 0, q: 0, score: 0, totalScore: 0, answered: false, responses: [] }, $ = id => document.getElementById(id);

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

if ($("homechar")) $("homechar").src = A.BLUE;
if ($("blue")) $("blue").src = A.BLUE;
if ($("green")) $("green").src = A.GREEN;

hud();
