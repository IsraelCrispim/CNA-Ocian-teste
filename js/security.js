(function () {
  let warningShown = false;
  let actionMessageTimer;

  function isGameActive() {
    return ["mapS", "quizS"].some(function (id) {
      const screen = document.getElementById(id);
      return screen && !screen.classList.contains("hidden");
    });
  }

  function showWarning() {
    if (warningShown || !isGameActive()) return;
    warningShown = true;

    let overlay = document.getElementById("securityWarning");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "securityWarning";
      overlay.className = "security-warning-overlay";
      overlay.setAttribute("role", "alertdialog");
      overlay.setAttribute("aria-live", "assertive");
      overlay.innerHTML = '<div class="security-warning-box">' +
        '<div class="security-warning-popup">' +
        '<div class="security-warning-icon" aria-hidden="true">!</div>' +
        '<h2>Sessão interrompida</h2>' +
        '<p>Foi detectada uma saída da tela do jogo.</p>' +
        '<p>O jogo será reiniciado em instantes.</p>' +
        '</div></div>';
      document.body.appendChild(overlay);
    }

    setTimeout(function () {
      window.location.reload();
    }, 3000);
  }

  function showActionMessage() {
    let message = document.getElementById("securityActionMessage");
    if (!message) {
      message = document.createElement("div");
      message.id = "securityActionMessage";
      message.className = "security-action-overlay";
      message.setAttribute("role", "status");
      message.setAttribute("aria-live", "polite");
      message.innerHTML = '<div class="security-action-frame">' +
        '<div class="security-action-popup">' +
        '<div class="security-action-icon" aria-hidden="true">!</div>' +
        '<h2>Ação não permitida</h2>' +
        '<p>Esta ação foi bloqueada para manter a atividade em andamento.</p>' +
        '</div></div>';
      document.body.appendChild(message);
    }

    message.classList.add("visible");
    clearTimeout(actionMessageTimer);
    actionMessageTimer = setTimeout(function () {
      message.classList.remove("visible");
    }, 3000);
  }

  function blockAttempt(event) {
    if (event && typeof event.preventDefault === "function") {
      event.preventDefault();
    }
    if (event && typeof event.stopPropagation === "function") {
      event.stopPropagation();
    }
    showActionMessage();
    return false;
  }

  document.addEventListener("contextmenu", blockAttempt, true);

  document.addEventListener("keydown", function (event) {
    const key = event.key || "";
    const ctrl = event.ctrlKey || event.metaKey;
    const blockedKeys = ["F12", "PrintScreen", "Snapshot", "Escape", "Tab"];
    const shortcutKeys = ["p", "s", "c", "x", "v", "u", "i", "j"];

    if (blockedKeys.includes(key) || (ctrl && shortcutKeys.includes(key.toLowerCase()))) {
      blockAttempt(event);
    }
  }, true);

  window.addEventListener("beforeunload", function (event) {
    if (!isGameActive()) return;
    event.preventDefault();
    event.returnValue = "";
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      showWarning();
    }
  });

  window.addEventListener("blur", showWarning);
})();
