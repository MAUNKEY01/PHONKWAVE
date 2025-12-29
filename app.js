const discoverTracks = [
  "https://www.youtube.com/embed/6x7B0GmZpVY",
  "https://www.youtube.com/embed/VW3t6n6Y0JQ",
  "https://www.youtube.com/embed/6fRUpN0pFHM"
];

let currentIndex = 0;

function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

function loadTrack() {
  document.getElementById("player").src = discoverTracks[currentIndex];
}

function vote(like) {
  if (like) {
    console.log("Liked track", currentIndex);
  }
  currentIndex = (currentIndex + 1) % discoverTracks.length;
  loadTrack();
}

loadTrack();
