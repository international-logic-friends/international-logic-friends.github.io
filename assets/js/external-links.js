document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="http"]').forEach((link) => {
    const url = new URL(link.href);

    if (url.hostname !== window.location.hostname) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });
});