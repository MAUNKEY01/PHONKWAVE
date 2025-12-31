let current = 0;
let likes = JSON.parse(localStorage.getItem("likes")) || [];

function showTrack() {
  let track = TRACKS[current];
  loadVideo(track.videoId);
}

document.getElementById("like").onclick = () => {
  likes.push(TRACKS[current]);
  localStorage.setItem("likes", JSON.stringify(likes));
  next();
};

document.getElementById("nope").onclick = next;

function next() {
  current = (current + 1) % TRACKS.length;
  showTrack();
}

showTrack();
