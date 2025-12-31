function renderPlaylist() {
  let list = document.getElementById("playlistList");
  list.innerHTML = "";

  let likes = JSON.parse(localStorage.getItem("likes")) || [];

  likes.forEach(track => {
    let div = document.createElement("div");
    div.textContent = track.title;
    list.appendChild(div);
  });
}

renderPlaylist();
