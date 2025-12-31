let playerContainer = document.getElementById("player");

function loadVideo(videoId) {
  playerContainer.innerHTML = `
    <iframe 
      src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1"
      allow="autoplay; encrypted-media"
      allowfullscreen>
    </iframe>
  `;
}
