document.addEventListener("DOMContentLoaded", () => {
  const times = document.querySelectorAll("time.local-time");

  times.forEach((time) => {
    const rawDate = time.getAttribute("datetime");

    if (!rawDate) return;

    const date = new Date(rawDate);

    const formatted = new Intl.DateTimeFormat(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short"
    }).format(date);

    time.textContent = formatted;
  });
});