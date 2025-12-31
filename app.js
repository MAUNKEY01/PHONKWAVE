const tracks = [
  {
    title: "Close Eyes",
    artist: "DVRST",
    videoId: "7sO3ZxFq4j0"
  },
  {
    title: "Metamorphosis",
    artist: "INTERWORLD",
    videoId: "K8Y6YHkJ6pY"
  },
  {
    title: "Murder In My Mind",
    artist: "Kordhell",
    videoId: "w-sQRS-Lc9k"
  }
];

const container = document.getElementById("card-container");

let current = 0;

function createCard(track) {
  const card = document.createElement("div");
  card.className = "card";

  const thumb = `https://img.youtube.com/vi/${track.videoId}/hqdefault.jpg`;

  card.innerHTML = `
    <img src="${thumb}">
    <div class="info">
      <h3>${track.title}</h3>
      <p>${track.artist}</p>
    </div>
  `;

  let startX = 0;
  let currentX = 0;

  card.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  card.addEventListener("touchmove", e => {
    currentX = e.touches[0].clientX - startX;
    card.style.transform = `translateX(${currentX}px) rotate(${currentX / 15}deg)`;
  });

  card.addEventListener("touchend", () => {
    if (currentX > 120) swipe(card, "right");
    else if (currentX < -120) swipe(card, "left");
    else card.style.transform = "";
  });

  card.addEventListener("click", () => playPreview(track.videoId));

  return card;
}

function swipe(card, direction) {
  card.style.transform = `translateX(${direction === "right" ? 1000 : -1000}px)`;
  setTimeout(() => {
    card.remove();
    loadNext();
  }, 300);
}

function playPreview(videoId) {
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&start=0`;
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  setTimeout(() => {
    iframe.remove();
  }, 30000);
}

function loadNext() {
  if (current >= tracks.length) return;
  const card = createCard(tracks[current]);
  container.appendChild(card);
  current++;
}

loadNext();

// PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
