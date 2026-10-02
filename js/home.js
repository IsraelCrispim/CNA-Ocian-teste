function toggleAdultAge() {
  const isAdultOption = $("age").value === "18+ anos (Adult)";
  const ageField = $("adultAgeField");
  const ageInput = $("adultAge");

  ageField.classList.toggle("hidden", !isAdultOption);
  ageInput.required = isAdultOption;
  if (!isAdultOption) ageInput.value = "";
}

function start() {
  let n = $("name").value.trim();
  let a = $("age").value;

  if (!n || !a) return alert("Preencha seu nome e sua idade.");
  if (a === "18+ anos (Adult)") {
    const enteredAge = Number($("adultAge").value);
    if (!Number.isInteger(enteredAge) || enteredAge < 18) {
      return alert("Digite uma idade válida de 18 anos ou mais.");
    }
  }

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
