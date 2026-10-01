(function () {
  let warningShown = false;

  function showWarning() {
    if (warningShown) return;
    warningShown = true;

    let overlay = document.getElementById("securityWarning");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "securityWarning";
      overlay.className = "security-warning-overlay";
      overlay.innerHTML = '<div class="security-warning-box">' +
        '<div class="security-warning-icon">⚠️</div>' +
        '<h2>ATENÇÃO</h2>' +
        '<p>Saída da página detectada.</p>' +
        '<p>Reiniciando o jogo...</p>' +
        '</div>';
      document.body.appendChild(overlay);
    }

    setTimeout(function () {
      window.location.reload();
    }, 1300);
  }

  function blockAttempt(event) {
    if (event && typeof event.preventDefault === "function") {
      event.preventDefault();
    }
    if (event && typeof event.stopPropagation === "function") {
      event.stopPropagation();
    }
    showWarning();
    return false;
  }

  document.addEventListener("contextmenu", function (event) {
    blockAttempt(event);
  }, true);

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
    event.preventDefault();
    event.returnValue = "";
    showWarning();
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      showWarning();
    }
  });

  window.addEventListener("blur", function () {
    showWarning();
  });
})();
