/**
 * Fix position:fixed bottom decorations on mobile.
 *
 * iOS Safari scrolls the viewport when the address bar hides,
 * which can make `position:fixed` elements appear to shift.
 * This script re‑lays out the decoration after scroll / resize
 * to keep it anchored at the true visual bottom.
 */
(function () {
  "use strict";

  var deco = document.querySelector(".fixed-page-decoration");
  if (!deco) return;

  function pin() {
    var vh = window.innerHeight;
    var bottom = 0;

    // On iOS in standalone (home‑screen) mode the bottom safe‑area
    // inset is baked into window.innerHeight, so no adjustment needed.
    // On normal Safari the toolbar bottom is also excluded from innerHeight,
    // so innerHeight already reflects the visible area.

    deco.style.bottom = bottom + "px";
  }

  pin();

  // Re‑pin on scroll (covers iOS toolbar collapse/expand)
  var ticking = false;
  function onTick() {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        pin();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onTick, { passive: true });
  window.addEventListener("resize", onTick, { passive: true });
  window.addEventListener("orientationchange", function () {
    setTimeout(pin, 200);
  });
})();