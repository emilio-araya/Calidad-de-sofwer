let playlists = [];
let songs = ["Song A - Artist 1", "Song B - Artist 2", "Song C - Artist 3"];
let currentSongIndex = 0;

function showSection(id) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let msg = document.getElementById("loginMsg");
  if(user && pass) {
    msg.textContent = "Bienvenido " + user + "!";
  } else {
    msg.textContent = "Error: ingrese usuario y contraseña.";
  }
}

function searchSong() {
  let query = document.getElementById("searchBox").value.toLowerCase();
  let results = document.getElementById("results");
  results.innerHTML = "";
  let found = songs.filter(s => s.toLowerCase().includes(query));
  if(found.length === 0) {
    results.innerHTML = "<li>No se encontraron resultados</li>";
  } else {
    found.forEach(s => {
      let li = document.createElement("li");
      li.textContent = s;
      results.appendChild(li);
    });
  }
}

function addPlaylist() {
  let name = document.getElementById("playlistName").value;
  if(name) {
    playlists.push(name);
    renderPlaylists();
  }
}

function renderPlaylists() {
  let list = document.getElementById("playlistList");
  list.innerHTML = "";
  playlists.forEach(p => {
    let li = document.createElement("li");
    li.textContent = p;
    list.appendChild(li);
  });
}

function playSong() {
  document.getElementById("currentSong").textContent = "Reproduciendo: " + songs[currentSongIndex];
}
function pauseSong() {
  document.getElementById("currentSong").textContent = "Pausado: " + songs[currentSongIndex];
}
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  playSong();
}

function updateEco() {
  document.getElementById("bandwidth").textContent = Math.floor(Math.random()*500) + " MB";
  document.getElementById("co2").textContent = Math.floor(Math.random()*100) + " kg";
}
