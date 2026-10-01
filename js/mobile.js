(function () {
  function updateOrientationState() {
    const overlay = document.getElementById("orientationOverlay");
    const isPortraitMobile = window.matchMedia("(orientation: portrait)").matches && window.innerWidth < 1100 && window.innerHeight >= 400;
    const isSmallLandscape = window.matchMedia("(orientation: landscape)").matches && window.innerWidth <= 748 && window.innerHeight <= 400;
    const shouldShowRotation = isPortraitMobile && !isSmallLandscape;

    document.body.classList.toggle("orientation-lock", shouldShowRotation);
    if (overlay) overlay.classList.toggle("show", shouldShowRotation);
  }

  window.addEventListener("resize", updateOrientationState);
  window.addEventListener("orientationchange", updateOrientationState);
  updateOrientationState();
})();
