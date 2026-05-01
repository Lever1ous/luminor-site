const raceCards = document.querySelectorAll(".race-card");

raceCards.forEach((card) => {
  const button = card.querySelector(".race-preview");

  button.addEventListener("click", () => {
    const isActive = card.classList.contains("active");

    raceCards.forEach((item) => {
      item.classList.remove("active");
    });

    if (!isActive) {
      card.classList.add("active");
      card.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  });
});