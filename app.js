const container = document.getElementById("card-container");
let index = 0;

function createCard(track) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${track.cover}">
    <div class="info">
      <h2>${track.title}</h2>
      <p>${track.artist}</p>
    </div>
    <iframe
      src="https://www.youtube.com/embed/${track.videoId}?start=30&end=60&autoplay=0&controls=0"
      allow="autoplay"
    ></iframe>
  `;

  enableSwipe(card);
  return card;
}

function loadCard() {
  if (index >= PHONKS.length) return;
  const card = createCard(PHONKS[index]);
  container.appendChild(card);
}

function enableSwipe(card) {
  let startX = 0;
  let currentX = 0;

  card.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  card.addEventListener("touchmove", e => {
    currentX = e.touches[0].clientX - startX;
    card.style.transform = `translateX(${currentX}px) rotate(${currentX / 20}deg)`;
  });

  card.addEventListener("touchend", () => {
    if (Math.abs(currentX) > 100) {
      card.remove();
      index++;
      loadCard();
    } else {
      card.style.transform = "translateX(0)";
    }
  });

  card.addEventListener("click", () => {
    const iframe = card.querySelector("iframe");
    iframe.style.height = "60px";
    iframe.src += "&autoplay=1";
  });
}

loadCard();
