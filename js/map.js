function openM(m) {
  S.m = m;
  S.stage = 0;
  S.q = 0;
  S.score = 0;
  S.responses = [];

  if (typeof S.totalScore !== "number") S.totalScore = 0;

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
