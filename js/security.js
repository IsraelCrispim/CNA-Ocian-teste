(function () {
  const securityState = {
    resetTimer: null,
    ready: false
  };

  function isQuizActive() {
    const quizEl = document.getElementById("quizS");
    return !!(quizEl && !quizEl.classList.contains("hidden"));
  }

  function showSecurityPopup() {
    let overlay = document.getElementById("securityWarning");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "securityWarning";
      overlay.className = "security-warning-overlay";
      overlay.innerHTML = '<div class="security-warning-box">' +
        '<div class="security-warning-icon">⚠️</div>' +
        '<h2>ATENÇÃO</h2>' +
        '<p>Não é permitido sair da página durante as perguntas.</p>' +
        '<p>O jogo será reiniciado automaticamente.</p>' +
        '</div>';
      document.body.appendChild(overlay);
    }

    requestAnimationFrame(() => overlay.classList.add("show"));
  }

  function resetQuizSecurity() {
    if (securityState.resetTimer) return;

    if (typeof window.backHome === "function") {
      showSecurityPopup();
      securityState.resetTimer = setTimeout(() => {
        window.backHome();
        const overlay = document.getElementById("securityWarning");
        if (overlay) overlay.remove();
        securityState.resetTimer = null;
      }, 1800);
    }
  }

  function handleLeaveAttempt() {
    if (isQuizActive()) {
      resetQuizSecurity();
    }
  }

  document.addEventListener("visibilitychange", function () {
    if (document.hidden && isQuizActive()) {
      handleLeaveAttempt();
    }
  });

  window.addEventListener("blur", function () {
    if (isQuizActive()) {
      handleLeaveAttempt();
    }
  });

  window.addEventListener("beforeunload", function (event) {
    if (isQuizActive()) {
      event.preventDefault();
      event.returnValue = "";
    }
  });

  document.addEventListener("keydown", function (event) {
    if (!isQuizActive()) return;

    const target = event.target;
    const isEditable = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable || target.closest("input, textarea, [contenteditable='true']"));
    if (isEditable) return;

    const isModifier = event.ctrlKey || event.metaKey || event.altKey;
    const blockedKey = [
      "F12",
      "PrintScreen",
      "Insert",
      "Home",
      "End",
      "PageUp",
      "PageDown"
    ];
    const blockedShortcuts = ["c", "v", "x", "u", "s", "p", "a", "i", "j", "d"];

    if (blockedKey.includes(event.key) || (isModifier && blockedShortcuts.includes(event.key.toLowerCase()))) {
      event.preventDefault();
      event.stopPropagation();
      handleLeaveAttempt();
      return false;
    }

    if (event.shiftKey && isModifier && ["i", "c", "j"].includes(event.key.toLowerCase())) {
      event.preventDefault();
      event.stopPropagation();
      handleLeaveAttempt();
      return false;
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("protected");
    securityState.ready = true;
  });

  setInterval(function () {
    if (!isQuizActive()) return;
    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;
    if (widthDiff > 170 || heightDiff > 170) {
      handleLeaveAttempt();
    }
  }, 800);
})();
