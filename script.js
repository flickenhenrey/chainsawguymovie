// =======================
// Chainsaw Man - The Movie: Reze Arc
// =======================

// Movie source
const movieFile = 'https://ia601505.us.archive.org/6/items/chainsaw-man-reze-hen-episode-01.mp-4-1/Chainsaw%20Man%20Reze-hen%20Episode%2001.mp4%20%281%29.mp4';

// --- Player Logic ---
const videoPlayer = document.getElementById('video-player');
const currentEpisodeTitle = document.getElementById('current-episode');

// Load and play the movie
function loadMovie() {
  if (movieFile && movieFile !== 'YOUR_VIDEO_URL_HERE') {
    videoPlayer.src = movieFile;
    videoPlayer.load();
  }
  currentEpisodeTitle.textContent = 'Chainsaw Man – The Movie: Reze Arc';
}

// Initialize on page load
loadMovie();
