document.addEventListener("DOMContentLoaded", () => {
  const times = document.querySelectorAll("time.local-time");

  times.forEach((time) => {
    const rawDate = time.getAttribute("datetime");
    if (!rawDate) return;

    const date = new Date(rawDate);

    const showTimeOnly = time.classList.contains("time-only");

    const options = showTimeOnly
      ? {
          hour: "numeric",
          minute: "2-digit",
          timeZoneName: "short"
        }
      : {
          weekday: "long",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          timeZoneName: "short"
        };

    const formatted = new Intl.DateTimeFormat(undefined, options).format(date);
    time.textContent = formatted;
  });
});