function start() {
  let n = $("name").value.trim();
  let a = $("age").value;

  if (!n || !a) return alert("Preencha seu nome e sua idade.");

  S.name = n;
  S.age = a;
  S.responses = [];
  S.totalScore = 0;
  if ($("hello")) $("hello").textContent = n;
  hud();
  show("choose");
}

function backHome() {
  S.stage = 0;
  S.q = 0;
  S.score = 0;
  S.totalScore = 0;
  S.responses = [];
  show("home");
  hud();
}
